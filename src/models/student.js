const mongoose = require('mongoose')
const conn = require('../db/mongoose')

const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    regitrationNumber: {
        type: Number,
        required: true
    }
})


const Student = conn.student.model('Student', studentSchema)

module.exports = Student
