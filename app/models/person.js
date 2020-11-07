const mongoose = require("mongoose")

const peopleSchema = new mongoose.Schema({
    Name :{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    }
},{timestamps:true})



const People = mongoose.model("People",peopleSchema)


module.exports = People