//@ Models are a place where we make schemas to our clusters
//~ We've created a schema
const mongoose = require('mongoose');

const PaoSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  person: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  object: {
    type: String,
    required: true
  }
});

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pao', PaoSchema);