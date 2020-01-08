//@ Models are a place where we make schemas to our clusters
//~ We've created a schema
const mongoose = require('mongoose');

const PaoSchema = mongoose.Schema({
  number: {
    type: Number,
    required: false
  },
  person: {
    type: String,
    required: false
  },
  action: {
    type: String,
    required: false
  },
  object: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Pao', PaoSchema);