const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }, 
    dp: {
        data: Buffer,
        contentType: String
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    father: {
        type: String
    },
    courses: {
        type: Array,
        default:[]
    }
})

const studentDetails=new mongoose.model("Student Details",userSchema);
module.exports= studentDetails;