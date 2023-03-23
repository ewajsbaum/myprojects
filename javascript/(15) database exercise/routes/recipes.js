var express = require('express');
var router = express.Router();
const pool = require('../pool.js');

router.get('/', function (req, res, next) {
  pool.query(
    'SELECT * FROM recipes',
    (err, results, fields) => {
      if (err) {
        res.statusCode = 500;
        return res.end('Unable to load recipes');
      }
      res.send(results);
    });

});

router.post('/', function (req, res, next) {
  pool.query(
    'INSERT INTO recipes(name, ing) VALUES (?,?)', [req.body.name, req.body.ing],
    (err, results, fields) => {
      if (err) {
        res.statusCode = 500;
        return res.end('Unable to add recipe');
      }

      res.status(201)
        .location(`/recipes`)
        .send(req.body);
    });
});

router.get('/:id', function (req, res, next) {
  pool.query(
    'SELECT * FROM recipes WHERE id = ?', [req.params.id],
    (err, results, fields) => {
      if (err) {
        res.statusCode = 500;
        return res.end('Unable to load recipe');
      }

      if (!results.length) {
        res.statusCode = 404;
        return res.end(`No such recipe - ${req.params.id}`);
      }

      res.send(results[0]);
    });
});

router.put('/:id', function (req, res, next) {
  pool.query(
    'UPDATE recipes SET name = ?, ing = ? WHERE id = ?', [req.body.name, req.body.ing, req.params.id],
    (err, results, fields) => {
      if (err) {
        res.statusCode = 500;
        return res.end(`Unable to update recipe - ${req.body.name}`);
      }

      console.log(results);
      if (!results.affectedRows) {
        res.statusCode = 404;
        return res.end(`No such recipe - ${req.params.id}`);
      }

      res.sendStatus(204);
    });
});

router.delete('/:id', function (req, res, next) {
  pool.query(
    'DELETE FROM recipes WHERE id = ?', [req.params.id],
    (err, results, fields) => {
      if (err) {
        res.statusCode = 500;
        return res.end(`Unable to delete recipe - ${req.params.id}`);
      }

      if (!results.affectedRows) {
        res.statusCode = 404;
        return res.end(`No such recipe - ${req.params.id}`);
      }

      res.sendStatus(204);
    });
});

module.exports = router;
