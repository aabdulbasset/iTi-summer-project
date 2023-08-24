const Products = require('../model/products');

// Route handler to get all products
module.exports.getAllProducts = (req, res) => {
    // Retrieve all products from the database
    Products.find()
        .then((products) => {
            // Send the products as a response
            res.send(products);
        })
        .catch((err) => {
            // Handle any errors and log them
            console.log(err);
        });
};

// Route handler to get a single product by ID
module.exports.getSingleProduct = (req, res) => {
    // Extract the product ID from the request parameters
    const productId = req.params.id;

    // Find a single product by its ID in the database
    Products.findOne({
            id: productId
        })
        .then((productDetails) => {
            // Send the product details as a response
            res.send(productDetails);
        })
        .catch((err) => {
            // Handle any errors and log them
            console.log(err);
        });
};