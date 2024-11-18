const express = require("express");
const mongoose = require("mongoose")
const PORT = 2020;

const myRouter = express.Router()

const app = express();
//middleware
app.use(express.json())

//default get
app.get("/", (req, res)=>{
    res.status(200).json({
        message: "server is up and running"
    })
})
//connect to db
try {
   const DB_URI = "mongodb://localhost:27017/newSchool"
   mongoose.connect(DB_URI);
   console.log("connected to db");
   
} 
catch (error) {
    console.log("failed to connect to database" + error);
}

    const studentSchema = new mongoose.Schema({
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
   const studentModel = new mongoose.model("students", studentSchema )
   
    //controller
    const getAllStudents = async(req, res) => {
        try {
            const getStudents = studentModel.find()
            return req.status(200).json({
                message: "students gotten successful",
                data: getStudents
            })
        } catch (error) {
            return res.status(404).json({
                message: "error getting students",
                data: error.message
            });
        }
    }
app.use("/api", myRouter.get("/getstudents", getAllStudents));

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
    
});