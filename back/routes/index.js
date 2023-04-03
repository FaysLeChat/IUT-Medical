var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('data/data.db');
db.exec("PRAGMA foreign_keys = ON");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

module.exports = router;
