const mongoose = require('mongoose');

   const zencareSchema = new mongoose.Schema({
     // Define your schema fields here based on your frontend requirements
     title: {
       type: String,
       required: true
     },
     description: {
       type: String,
       required: true
     },
     // Add more fields as needed
   });

   module.exports = mongoose.model('zencare', Schema);