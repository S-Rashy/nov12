const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    adminNo:{
        type: String,
        unique: true
    },
    age:{
        type: String
    },
    gender:{
        type: String
    },
    isFee:{
        type: Boolean
    },
})
const Users = new mongoose.model("users", userSchema )