const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String }
});

const Mongoose = mongoose.model('Mongoose', mongooseSchema);

module.exports = Mongoose;
