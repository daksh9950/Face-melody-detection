const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    postUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    mood:{
        type:String,
        enum:{
            values:['sad','happy','surprized'],
            message:"the enum is "

        }
    }

})

const songModel = mongoose.model('song',songSchema)
module.exports = songModel