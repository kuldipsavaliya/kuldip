const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    contact:{
        type:Number
    }
})

const User =mongoose.model("User",userSchema);
module.exports = User;