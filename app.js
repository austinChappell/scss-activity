const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const Mongoose = require('./models/mongoose');
const Ox = require('./models/ox');
const Person = require('./models/person');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});

let port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addperson', (req, res) => {
  const person = new Person();
  person.firstName = req.body.firstName;
  person.lastName = req.body.lastName;
  person.save((err, person) => {
    res.redirect('/');
  });
});

app.post('/addox', (req, res) => {
  const ox = new Ox();
  ox.name = req.body.oxName;
  ox.save((err, ox) => {
    res.redirect('/');
  });
});

app.post('/addmongoose', (req, res) => {
  const animal = new Mongoose();
  animal.name = req.body.name;
  animal.save((err, animal) => {
    res.redirect('/');
  });
});

app.get('/people', (req, res) => {
  Person.find({}, (err, people) => {
    res.json(people);
  });
});

app.listen(port, (req, res) => {
  console.log(`Listening on PORT ${ port }.`);
});
