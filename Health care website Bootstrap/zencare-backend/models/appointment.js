const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  age: { type: Number, required: true },
  doctor: { type: String, required: true },
  message: { type: String }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
