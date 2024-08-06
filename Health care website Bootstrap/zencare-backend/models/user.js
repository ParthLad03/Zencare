// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  appointmentDate: Date,
  ageGroup: String,
  doctor: String,
  message: String,
});

module.exports = mongoose.model('User', userSchema);
