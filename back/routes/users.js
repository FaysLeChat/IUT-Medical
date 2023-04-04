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

/* GET users listing. */
router.get('/', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
