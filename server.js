const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  })
  .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// const formRoutes = require('./routes/formRoutes');
// app.use('/forms', formRoutes);

app.get('/', (req, res)=>{
    res.send("hello form")
})


