const express = require('express');

const app = express();
const Product = require('./model/products'); // Import the Product model
const User = require('./model/user');
const mongoose = require("mongoose"); // Import Mongoose for database operations
const bodyParser = require('body-parser'); // Import body-parser for handling POST requests
const cors = require('cors'); // Import cors for handling cross-origin resource sharing
const shopRouter = require('./routes/shop'); // Import the shopRouter module
const userRouter = require('./routes/userRoutes');
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse incoming request bodies
app.listen(3000); // Start the server on port 3000

mongoose.connect('mongodb+srv://mostafadarch619:edzUFGAO4EKTskO7@cluster0.ihkpott.mongodb.net').then(() => {
    console.log("Connected To Database");
}).catch((err) => {
    console.log(err);
});



// Sample fetch request to an external API
/*
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
*/

// Route handler for the root URL
app.get('/', (req, res, next) => {
    res.send('<h1>the server is working</h1>'); // Send a simple response
    console.log("The server is working on port 3000");
});

app.use(shopRouter); // Use the shopRouter middleware for handling routes related to the shop

app.use(userRouter);

