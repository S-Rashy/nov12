//default get
app.get("/", (req, res)=>{
    res.status(200).json({
        message: "server is up and running"
    })
})

   
    //controller
    const getAllStudents = async(req, res) => {
        try {
            const getStudents = studentModel.find()
            return res.status(200).json({
                message: "students gotten successfully",
                data: getStudents
            })
        } catch (error) {
            return res.status(404).json({
                message: "error getting students",
                data: error.message
            });
        }
    }