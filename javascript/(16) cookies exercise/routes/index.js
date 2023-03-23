var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Cookies', partials: { content: 'user' } });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  res.cookie('name', JSON.stringify(req.body));
  res.writeHead(301, { location: '/cookies' });
  res.end();
});

module.exports = router;
