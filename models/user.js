const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_name : {
        type : String ,
        required : true 
    },
    user_age : {
        type : Number ,
        required : true 
    },
    user_job : {
        type : String ,
        required : true 
    }
},{timestamps : true});

const User = mongoose.model("User" , userSchema);

module.exports = User;