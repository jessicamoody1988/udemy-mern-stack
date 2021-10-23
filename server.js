const express = require('express');
const { connect } = require('mongoose');

const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// process.env.PORT looks for environment variable called port
// When we deploy to Heroku that's where it's go9ing to get the port number
// locally this will run on port 5000
const PORT = process.env.PORT || 5000;

// Listen on a port 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));