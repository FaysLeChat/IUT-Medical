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

module.exports = router;
