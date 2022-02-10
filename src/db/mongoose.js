const mongoose = require('mongoose')

mongoose.teacher=mongoose.createConnection('mongodb://localhost:27017/teacher', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.student = mongoose.createConnection('mongodb://localhost:27017/student', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log("Connected to both database")

module.exports = mongoose;