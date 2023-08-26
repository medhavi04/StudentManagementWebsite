const mongoose=require('mongoose');
const courseSchema=new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    code: {
        type: String,
        required:true,
        unique:true
    },
    credits: {
        type: Number,
        enum: [0,1,2,3,4],
        required:true
    },
    faculty: {
        type: String,
        required:true
    },
    students: {
        type: Array,
        default:[]
    }
})

const Course=new mongoose.model("Courses",courseSchema);
module.exports=Course;