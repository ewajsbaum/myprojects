var express = require('express');
var router = express.Router();

let contacts = [
  { id: 1, first: 'Joe', last: 'Biden', email: 'jbiden@whitehouse.gov', phone: '1234567890' },
  { id: 2, first: 'Kamala', last: 'Harris', email: 'kharris@whitehouse.gov', phone: '9876543210' }
];

let nextId = contacts.length + 1;

router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts,
    noContacts: contacts.length === 0,
    partials: { content: 'contacts' }
  });
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'contactForm' }
  });
});

router.post('/addContact', function (req, res, next) {
  req.body.id = nextId++;
  contacts.push(req.body);
  res.writeHead(301, { location: '/contacts' });
  res.end();
});

router.get('/deleteContact/:id', function (req, res, next) {
  contacts = contacts.filter(c => c.id !== +req.params.id);
  res.writeHead(301, { location: '/contacts' });
  res.end();
});

router.get('/editContact/:id', function (req, res, next) {
  let contact = contacts.find(c => c.id === +req.params.id);
  res.render('layout', {
    title: 'Edit Contact',
    contact,
    partials: { content: 'contactForm' }
  });
});

router.post('/editContact/:id', function (req, res, next) {
  let index = contacts.findIndex(c => c.id === +req.params.id);
  req.body.id = req.params.id;
  contacts[index] = (req.body);
  res.writeHead(301, { location: '/contacts' });
  res.end();
});

module.exports = router;
