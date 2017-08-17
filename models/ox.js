const mongoose = require('mongoose');

const oxSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String }
});

const Ox = mongoose.model('Ox', oxSchema);

module.exports = Ox;
