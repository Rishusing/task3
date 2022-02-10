const mongoose = require('mongoose')
const conn = require('../db/mongoose')

const teacherSchema = new mongoose.Schema({
    idNumber: {
        type: Number,
        required: true
    } ,
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


const Teacher = conn.teacher.model('Teacher', teacherSchema)

module.exports = Teacher
