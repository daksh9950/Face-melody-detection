const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:[true,"email will be required"],
        unique:[true,"email should be unique"]
    },

    username:{
        type:String,
        require:[true,"username must be required"],
        unique:[true,"username should be unique"]
    },
    password:{
        type:String,
        require:[true,"password must be required"],
        select: false,

    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel