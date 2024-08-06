const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment'); // Assuming you have an appointment model

// POST /api/appointments - Create a new appointment
router.post('/appointments', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/appointments - Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
