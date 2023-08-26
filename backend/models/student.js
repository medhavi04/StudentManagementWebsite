const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
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
        default: false
    },
    detailId: {
        type: String 
    }
})

const Student=new mongoose.model("Student",studentSchema);
module.exports=Student;