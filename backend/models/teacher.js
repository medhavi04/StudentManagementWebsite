const mongoose=require('mongoose');
const teacherSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: true
    },
    courses: {
        type: Array,
        default:[]
    }
})

const Teacher=new mongoose.model("Teacher",teacherSchema);
module.exports=Teacher;