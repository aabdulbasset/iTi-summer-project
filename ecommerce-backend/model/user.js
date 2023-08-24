const mongoose = require('mongoose');
const mongooseValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({

    userName: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    cart: {
        items: [{
            productID: Number,
            quantity: Number
        }]
    },
    fullName: {
        type: String
    }

})

userSchema.plugin(mongooseValidator);

module.exports = mongoose.model('User', userSchema);