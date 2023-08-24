const {
    get
} = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// This user Is used in addtochart functionality as a test
var currentUser = {

    email: 'mostafadarch199@gmail.com',
    _id: '64e11dbb0249ac9f6ca3b969'
}

module.exports.postAddUser = (req, res) => {
    const userData = req.body;
    console.log(userData)
    bcrypt.hash(userData.password, 10).then(hashPassword => {
        const newUser = new User({
            fullName: userData.fullname,
            userName: userData.username,
            email: userData.email,
            password: hashPassword,
            cart: {
                items: []
            }
        })

        newUser.save().then((userDetails) => {
            res.send(userDetails);
        }).catch(err => {
            res.status(400).send(err)
        })
    }).catch(err => {
        console.log(err)
    })

}


module.exports.postLogin = (req, res) => {
    const userLoginData = req.body;
    let getUser;
    User.findOne({
        email: userLoginData.email
    }).then(searchedUser => {
        if (!searchedUser) {
            return res.status(401).json({
                msg: 'authentication error'
            })
        }
        getUser = { ...searchedUser._doc };

        return bcrypt.compare(userLoginData.password, searchedUser.password)
    })
        .then(compareResult => {
            if (!compareResult) {
                return res.status(401).json({
                    msg: 'authentication error'
                })
            }
            let token = jwt.sign({
                email: getUser.email,
                userId: getUser._id
            }, 'our_ecommerce_nodeAPP_jwt', {
            });
            delete getUser.password;
            res.status(200).json({
                msg: 'login sucessfully',
                token: token,
                user: getUser
            })
        })
        .catch(err => console.log(err))
}
// res.send(userLoginData);

module.exports.postAddToChart = (req, res) => {
    const cartData = req.body;

    const recievedProductID = cartData.productID;
    const recievedUserID = jwt.verify(req.headers.authorization.split(" ")[1], 'our_ecommerce_nodeAPP_jwt').userId.toString();


    //console.log("ProductID: ", recievedProductID);

    User.find({
        _id: recievedUserID
    }).then(userDetails => {
        let updatedCart = [...userDetails[0].cart.items];
        //console.log(updatedCart);
        //  console.log(userDetails)
        let newQuantity = 1;

        var cartProductIndex = updatedCart.findIndex(m => {


            return m.productID.toString() == recievedProductID.toString();
        })

        // console.log(cartProductIndex);

        if (cartProductIndex >= 0) {
            newQuantity = userDetails[0].cart.items[cartProductIndex].quantity + 1;
            updatedCart[cartProductIndex].quantity = newQuantity;
        } else {
            updatedCart.push({
                productID: recievedProductID,
                quantity: newQuantity
            })
        }
        let userCart = {
            items: updatedCart
        }

        return User.updateOne({
            _id: recievedUserID
        }, {
            $set: {
                cart: userCart
            }
        }).then(updatedUser => {
            // console.log(updatedUser)
            res.send(userDetails);
        })
    })
        .catch(err => {
            console.log(err)
        })

}
module.exports.getCart = (req, res) => {
    const recievedUserID = jwt.verify(req.headers.authorization.split(" ")[1], 'our_ecommerce_nodeAPP_jwt').userId.toString();
    //include product details with each product in cart
    User.aggregate([{
        $match: {
            _id: new mongoose.Types.ObjectId(recievedUserID)
        }


    }, {
        $unwind: '$cart.items',
    }, {
        $lookup: {
            from: 'products',
            localField: 'cart.items.productID',
            foreignField: 'id',
            as: 'cart.items.productDetails'
        }
    }, {
        $addFields: {
            'cart.items.productDetails': {
                "quantity": "$cart.items.quantity",
            }
        }
    }, {
        $unwind: '$cart.items.productDetails',
    }, {
        $group: {
            _id: '$_id',

            cart: {
                $push: '$cart.items.productDetails',

            }

        }
    }]).then(userDetails => {
        res.send(userDetails[0]);
    })
}
module.exports.deleteCartItem = (req, res) => {
    const recievedUserID = jwt.verify(req.headers.authorization.split(" ")[1], 'our_ecommerce_nodeAPP_jwt').userId.toString();
    const recievedProductID = req.params.productID;
    // console.log(recievedProductID)
    User.updateOne({
        _id: recievedUserID
    }, {
        $pull: {
            'cart.items': {
                productID: recievedProductID
            }
        }
    }).then(result => {
        res.send(result);
    })
}
module.exports.updateCartItem = (req, res) => {
    const recievedUserID = jwt.verify(req.headers.authorization.split(" ")[1], 'our_ecommerce_nodeAPP_jwt').userId.toString();
    const recievedProductID = req.body.productID;
    const recievedQuantity = req.body.quantity;
    console.log(recievedProductID)
    console.log(recievedQuantity)
    User.updateOne({
        _id: recievedUserID,
        'cart.items.productID': recievedProductID
    }, {
        $set: {
            'cart.items.$.quantity': recievedQuantity
        }
    }).then(result => {
        res.send(result);
    })
}