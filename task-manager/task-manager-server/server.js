const express = require('express');
const mongoose = require('mongoose');
const mongoString = "mongodb://localhost:27017";
const routes = require('./routes/routes');
const userrouter = require('./routes/userRoutes')
const cors = require('cors');
const app = express();
// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', routes);

app.use('/user', userrouter)

// Connect to MongoDB
mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(8000, () => {
    console.log(`Server Started at ${8000}`);
});
