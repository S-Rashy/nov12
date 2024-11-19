const mongoose = require("mongoose");

const connectToDB = () =>{
    //connect to db
try {
    const DB_URI = "mongodb://localhost:27017/newSchool"
    mongoose.connect(DB_URI);
    console.log("connected to db");
    
 } 
 catch (error) {
     console.log("failed to connect to database" + error);
 }
};

module.exports = connectToDB;