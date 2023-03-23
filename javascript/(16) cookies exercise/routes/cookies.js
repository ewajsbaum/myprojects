var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const cookieCounter = req.cookies['count'] ? JSON.parse(req.cookies['count']) : { count: 0 };
  cookieCounter.count++;
  const name = req.cookies['name'] ? JSON.parse(req.cookies['name']) : '';
  res.cookie('count', JSON.stringify(cookieCounter));
  res.render('layout', { title: `Hello, ${name.name}`, count: cookieCounter.count, partials: { content: 'cookies' } });
});

module.exports = router;
