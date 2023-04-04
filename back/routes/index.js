var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('data/data.db');

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

router.get("/home", auth.authenticate() ,(req, res) => {
  res.json( "Hello world !!!!");
});

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

router.get('/doctors', (req, res) => {
  db.all('SELECT * FROM doctors', (err, rows) => {
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

router.get("/appointments/:id",(req,res)=>
{db.get("select * from appointments where id=?",
    req.params.id,(err,row)=>{res.json(row)})})

router.delete("/appointments/:id",(req,res)=>
{db.get("delete from appointments where id=?",
    req.params.id,(err,row)=>{res.json(row)})})

module.exports = router;
