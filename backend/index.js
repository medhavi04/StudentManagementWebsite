const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path=require('path');
const fs=require('fs');
const multer=require('multer');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


// mongoose.connect("mongodb://localhost:27017/StudentDB",{
    mongoose.connect("mongodb://0.0.0.0:27017/StudentDB",{
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }).then(()=>{
        console.log('Successfully Connected to Database!');
    }).catch((e)=>{
        console.log('Datbase error: ',e);
    })
    app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.status(200).json("Welcome!");
})
app.use("/teacher", require("./routes/teacherRoutes"));
app.use("/student", require("./routes/studentRoutes"));
app.use("/courses", require("./routes/courseRoutes"));
app.listen(8000,()=>{
    console.log('Server started at port no. 8000');
})
