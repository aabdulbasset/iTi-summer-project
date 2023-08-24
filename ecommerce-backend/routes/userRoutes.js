const express = require('express'); // Import the Express framework
const userController = require('../controller/userController')

const router = express.Router();


router.post('/register', userController.postAddUser);
router.post('/login', userController.postLogin);


router.post('/addtocart', userController.postAddToChart);
router.get('/cart', userController.getCart);
router.delete('/cart/:productID', userController.deleteCartItem);
router.put('/cart', userController.updateCartItem);
module.exports = router;