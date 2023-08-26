const routes=require('express').Router();
const student=require('../models/student');
const studentDetails=require('../models/studentDetails');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,'../uploads/'));
    }, filename: (req,file,cb)=>{
        cb(null,req.body.rollno+'.jpg');
    }
});
const upload=multer({
    storage: storage
})
// app.post('/add',upload.single('profile'),(req,res)=>{
//     console.log(req.body);
// });

routes.post('/register',async(req,res)=>{
    console.log(req.body);
    try {
    const salt=await bcrypt.genSalt();
    const hashedPass=await bcrypt.hash(req.body.password,salt);
    const isRegistered=await student.findOne({email:req.body.email});
    if(isRegistered) res.status(208).json({msg:"Email already exists!"});
    else{
        const newStudent= await new student({
            name:req.body.name,
            email:req.body.email,
            password: hashedPass
        });
        const saved=await newStudent.save();
        res.status(200).json(saved);
            
    } 
    } catch (error) {
        console.log('ERROR');
        res.status(500).json("Some internal server error occurred!");
    }
})

routes.post("/login",async(req,res)=>{
    try {
        let isPresent= await student.findOne({email:req.body.email});
        if(!isPresent) res.status(404).send("Email not found!");
        else{
            // const salt=await bcrypt.genSalt();
            const check=await bcrypt.compare(req.body.password,isPresent.password);
            if(check){
                // delete isPresent['password'];
                let toSend={...isPresent};
                // const toSend=.filter(key=>(key!=='password'));
                delete toSend._doc.password;
                res.status(200).json(toSend._doc);
            }
            else{
                res.status(401).send("Incorrect Password!");
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Some internal server error!");     
    }
})

routes.post('/register/details',upload.single('dp'),async (req,res)=>{
    // routes.post('/register/details',async(req,res)=>{
    try {
        // console.log(req.body);
        const user=await student.findOne({email:req.body.email});
        const details=new studentDetails(req.body);
        const savedDetails=await details.save();
        const updatedUser=await user.updateOne({$set:{detailId:savedDetails._id}})
        // console.log(user._id);
        if(savedDetails){
            res.status(200).send(user._id);
        // console.log(savedDetails._doc._id);
        }
        else{
            res.status(500).send("Some internal server error occurred!");
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Some internal server error occurred!"); 
    }
})

// routes.get('/studenthome/:studentId',async(req,res)=>{
//     try {

//     } catch (error) {
        
//     }
// })

module.exports=routes;