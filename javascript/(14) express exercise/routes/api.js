var express = require('express');
var router = express.Router();

let contacts = [
  { id: 1, first: 'Joe', last: 'Biden', email: 'jbiden@whitehouse.gov', phone: '1234567890' },
  { id: 2, first: 'Kamala', last: 'Harris', email: 'kharris@whitehouse.gov', phone: '9876543210' }
];

router.get('/contacts', function (req, res, next) {
  let jsonString = JSON.stringify(contacts);
  res.render('layout', {
    title: 'Api',
    contacts: jsonString,
    partials: { content: 'api' }
  });

});

module.exports = router;
