const routes=require('express').Router();
const courses=require('../models/courses');
const student=require('../models/studentDetails');
const teacher=require('../models/teacher');

routes.post('/add', async(req,res)=>{
    try {
       const newCourse=await new courses(req.body);
       const saved=await newCourse.save(); 
       const Teacher=await teacher.find({name:req.body.faculty});
       const p=await Teacher.update({$push:{courses: saved._id}});
       res.status(200).json(saved);
    } catch (error) {
        console.log(error);
        res.status(500).json("Some internal server error!");
    }
})

routes.get('/getCourseDetails/:courseId', async (req,res)=>{
    try {
        const course=await courses.findById(req.params.courseId);
        res.status(200).json(course);
    } catch (error) {
        console.log(error);
        res.status(500).json("Some internal server error!");
    }
})

routes.put('/addStudent/:courseId/:studentId', async(req,res)=>{
    console.log(req.params.courseId);
    console.log(req.params.studentId);
    
    try {
        const course=await courses.findByIdAndUpdate(req.params.courseId,{$push:{students:req.params.studentId}});
        const studCourse=await student.findByIdAndUpdate(req.params.studentId,{$push:{courses:req.params.courseId}});
        res.status(200).json([course,studCourse]);
    } catch (error) {
        console.log(error);
        res.status(500).json("Some internal server error!");
    }
})

routes.put('/removeStudent/:courseId/:studentId', async(req,res)=>{
    console.log(req.params.courseId);
    console.log(req.params.studentId);
    
    try {
        const course=await courses.findByIdAndUpdate(req.params.courseId,{$pull:{students:req.params.studentId}});
        const studCourse=await student.findByIdAndUpdate(req.params.studentId,{$pull:{courses:req.params.courseId}});
        res.status(200).json([course,studCourse]);
    } catch (error) {
        console.log(error);
        res.status(500).json("Some internal server error!");
    }
})

module.exports=routes;