const express = require('express');
const { connect } = require('mongoose');

const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// process.env.PORT looks for environment variable called port
// When we deploy to Heroku that's where it's go9ing to get the port number
// locally this will run on port 5000
const PORT = process.env.PORT || 5000;

// Listen on a port 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));