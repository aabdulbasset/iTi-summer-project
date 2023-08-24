const productsController = require('../controller/productsController'); // Import the productsController module
const express = require('express'); // Import the Express framework

const router = express.Router(); // Create an instance of an Express Router

// Define routes using the productsController
router.get('/products', productsController.getAllProducts); // Route for getting all products
router.get('/products/:id', productsController.getSingleProduct); // Route for getting a single product by ID

module.exports = router; // Export the router to be used in other parts of the application
