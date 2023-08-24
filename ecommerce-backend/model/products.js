const mongoose = require("mongoose"); // Import Mongoose for database operations

const {
    Schema
} = mongoose; // Destructure Schema from mongoose

// Define a Mongoose schema for your products
const productSchema = new Schema([{
    id: Number, // Product ID
    title: String, // Product titles
    price: Number, // Product price
    description: String, // Product description
    category: String, // Product category
    image: String, // URL to the product image
    rating: {
        rate: Number, // Product rating rate
        count: Number // Number of ratings
    }
}]);

// Export the Mongoose model based on the schema
module.exports = mongoose.model('Product', productSchema);