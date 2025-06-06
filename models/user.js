const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['buyer', 'seller', 'agent'],
        default: 'user'
    },
    address: {
    type:String,
    default:''
    },
    mobile:{
      type:Number,
      default:0,
      
    },
    profilePicture: {
        type: String,
        default: ''
    },
    subscription: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model("User", userSchema);
module.exports = User;