const mongoose = require('mongoose');
const express = require('express');
const appointmentRoutes = require('./routes/appointment'); // Updated to reflect the new route file name

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', appointmentRoutes);

mongoose.connect("mongodb+srv://parthlad2403:<Parthr@2410>@zencare.svoiijy.mongodb.net/?retryWrites=true&w=majority&appName=Zencare", 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
