const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String ,
  password: String ,
  name: String,
  score: Number,
});

module.exports = mongoose.model('User', userSchema);
