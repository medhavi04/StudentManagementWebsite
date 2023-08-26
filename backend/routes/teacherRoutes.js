const routes=require('express').Router();
const teacher=require('../models/teacher');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const Student=require('../models/studentDetails');

routes.post('/register', async(req,res)=>{
    console.log(req.body);
    try {
        const salt=await bcrypt.genSalt();
        const hashedPass= await bcrypt.hash(req.body.password,salt);
        const isRegistered=await teacher.findOne({email:req.body.email});
        if(isRegistered){
            res.status(208).json({message:"Email already exists!"});
        }
        else{
            const newTeacher= await new teacher({
                email: req.body.email,
                name: req.body.name,
                password: hashedPass
            })
            const saved=await newTeacher.save();
            res.status(200).json(saved);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Some internal server error!");      
    }
})

routes.post("/login",async(req,res)=>{
    try {
        let isPresent= await teacher.findOne({email:req.body.email});
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

routes.post('/find',async (req,res)=>{
    try {
        const newStudent={};
        if(req.body.name) newStudent['name']={'$regex':'^'+req.body.name,'$options':'i'};
        if(req.body.rollno) newStudent['rollno']={'$regex':'^'+req.body.rollno,'$options':'i'};
        if(req.body.branch) newStudent['branch']={'$regex':'^'+req.body.branch,'$options':'i'};
        if(req.body.gender) newStudent['gender']={'$regex':'^'+req.body.gender,'$options':'i'};
        
        const student=await Student.find(newStudent);
        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error!");
    }
})

module.exports=routes;