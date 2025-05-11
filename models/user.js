const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // number:{
  //   type: number,
  //   required: true
  // },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
// This code defines a Mongoose schema and model for a User in a MongoDB database.