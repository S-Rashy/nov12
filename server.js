const express = require("express");
const connectToDB = require("./src/config/index")
const PORT = 2020;

// const myRouter = express.Router()

const app = express();
app.use(express.json())
// app.use("/api/v1",)
connectToDB()


// app.use("/api", myRouter.get("/getstudents", getAllStudents));

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
    
});