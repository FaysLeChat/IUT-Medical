var express = require('express');
var router = express.Router();

const app = express();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('data/data.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require("../auth/auth")();
const cfg = require("../auth/config");
const saltRounds = 10;
module.exports = router;

db.exec("PRAGMA foreign_keys = ON");

router.use(auth.initialize());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Login et register. */

router.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        db.run(
            "INSERT INTO users (name, surname, email, password) VALUES ($name, $surname, $email, $password)",
            {
                $name: req.body.name,
                $surname: req.body.surname,
                $email: req.body.email,
                $password: hash
            },
            function (err) {
                if (err) {
                    return res.json(err).status(401);
                }
                return res.json({ id: this.lastID }).status(201);
            }
        );
    });
});

router.post("/login", (req, res) => {
    db.get('SELECT * FROM users WHERE email = $email',
        { $email: req.body.email },
        async (err, row) => {
            if (err) {
                console.log(err);
                return res.json(err).status(500);
            }
            if (!row) {
                return res.json("bad user");
            }
            const match = await bcrypt.compare(req.body.password, row.password);
            if (match) {
                const token = jwt.sign({ id: row.id, patient_id: row.patient_id, doctor_id: row.doctor_id }, cfg.jwtSecret, { expiresIn: "1h" });
                return res.json({ token: token });
            }
            res.json("bad password").status(401);
        })
})

/* GET endpoints */

router.get('/medicaloffices', (req, res) => {
    db.all('SELECT * FROM medicaloffice', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

router.get('/doctors', (req, res) => {
    db.all('SELECT * FROM doctors', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

router.get('/patients', (req, res) => {
    db.all('SELECT * FROM patients', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

router.get('/appointments', (req, res) => {
    db.all('SELECT * FROM appointments', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

/* POST endpoints */

router.post('/medicaloffices', (req, res) => {
    const { name, address, city, postal_code } = req.body;
    db.run(
        "INSERT INTO medicaloffice (name, address, city, postal_code) VALUES (?, ?, ?, ?)",
        [name, address, city, postal_code],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({ id: this.lastID });
            }
        }
    );
});

router.post('/doctors', (req, res) => {
    const { description, medicaloffice_id } = req.body;
    db.run(
        "INSERT INTO doctors (description, medicaloffice_id) VALUES (?, ?)",
        [description, medicaloffice_id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({ id: this.lastID });
            }
        }
    );
});

router.post('/patients', (req, res) => {
    const { birthdate, doctor_id } = req.body;
    db.run(
        "INSERT INTO patients (birthdate, doctor_id) VALUES (?, ?)",
        [birthdate, doctor_id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({ id: this.lastID });
            }
        }
    );
});

router.post('/appointments', (req, res) => {
    const { start_time, end_time, doctor_id, patient_id } = req.body;
    db.run(
        "INSERT INTO appointments (start_time, end_time, doctor_id, patient_id) VALUES (?, ?, ?, ?)",
        [start_time, end_time, doctor_id, patient_id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json({ id: this.lastID });
            }
        }
    );
});

/* DELETE endpoints */

router.delete('/medicaloffices/:id', (req, res) => {
    const id = req.params.id;
    db.run(
        "DELETE FROM medicaloffice WHERE id = ?",
        id,
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send("Not found");
            } else {
                res.send("Deleted");
            }
        }
    );
});

router.delete('/doctors/:id', (req, res) => {
    const id = req.params.id;
    db.run(
        "DELETE FROM doctors WHERE id = ?",
        id,
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send("Not found");
            } else {
                res.send("Deleted");
            }
        }
    );
});

router.delete('/patients/:id', (req, res) => {
    const id = req.params.id;
    db.run(
        "DELETE FROM patients WHERE id = ?",
        id,
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send("Not found");
            } else {
                res.send("Deleted");
            }
        }
    );
});

router.delete('/appointments/:id', (req, res) => {
    const id = req.params.id;
    db.run(
        "DELETE FROM appointments WHERE id = ?",
        id,
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send("Not found");
            } else {
                res.send("Deleted");
            }
        }
    );
});

/* PUT endpoints */

router.put('/medicaloffices/:id', (req, res) => {
    const id = req.params.id;
    const { name, address, city, postal_code } = req.body;

    db.run(
        'UPDATE medicaloffice SET name=?, address=?, city=?, postal_code=? WHERE id=?',
        [name, address, city, postal_code, id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send(`Medical office with ID ${id} not found.`);
            } else {
                res.sendStatus(204);
            }
        }
    );
});

router.put('/doctors/:id', (req, res) => {
    const id = req.params.id;
    const { description, medicaloffice_id } = req.body;

    db.run(
        'UPDATE doctors SET description=?, medicaloffice_id=? WHERE id=?',
        [description, medicaloffice_id, id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send(`Doctor with ID ${id} not found.`);
            } else {
                res.sendStatus(204);
            }
        }
    );
});

router.put('/patients/:id', (req, res) => {
    const id = req.params.id;
    const { birthdate, doctor_id } = req.body;

    db.run(
        'UPDATE patients SET birthdate=?, doctor_id=? WHERE id=?',
        [birthdate, doctor_id, id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send(`Patient with ID ${id} not found.`);
            } else {
                res.sendStatus(204);
            }
        }
    );
});

router.put('/appointments/:id', (req, res) => {
    const id = req.params.id;
    const { start_time, end_time, doctor_id, patient_id } = req.body;

    db.run(
        'UPDATE appointments SET start_time=?, end_time=?, doctor_id=?, patient_id=? WHERE id=?',
        [start_time, end_time, doctor_id, patient_id, id],
        function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else if (this.changes === 0) {
                res.status(404).send(`Appointment with ID ${id} not found.`);
            } else {
                res.sendStatus(204);
            }
        }
    );
});

router.get("/appointments/:id",(req,res)=>
{db.get("select * from appointments where id=?",
    req.params.id,(err,row)=>{res.json(row)})})

router.delete("/appointments/:id",(req,res)=>
{db.get("delete from appointments where id=?",
    req.params.id,(err,row)=>{res.json(row)})})

module.exports = router;
