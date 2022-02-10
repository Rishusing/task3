const exp = require('express')

const chalk = require('chalk')

const Student = require('./models/student')
const Teacher = require('./models/teacher')

const app = exp()
const port = 3000
app.use(exp.json())

app.get('/', (req, res) => {
    res.send({ msg: 'Welcome' });
})

app.post('/student', async (req, res) => {
    const student = new Student(req.body)
    try {
        await student.save()
        res.status(201).send({
            'msg': 'student data inserted successfully'
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/teacher', async (req, res) => {
    const teacher = new Teacher(req.body)
    try {
        await teacher.save()
        res.status(201).send({
            'msg': 'teacher data inserted successfully'
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/api/upcloud/users/', async (req, res) => {
    try {
        const student = await Student.find().select('name')
        
        const teacher = await Teacher.find().select('name')
        console.log(chalk.blueBright.underline("STUDENTS NAME :)"));
        student.forEach((x, i) => console.log(i+1 + ")"+chalk.magentaBright(x.name)));

        console.log(chalk.blueBright.underline("TEACHERS NAME :)"));
        teacher.forEach((x, i) => console.log(i + 1 + ")" +chalk.magentaBright(x.name)));
        
        res.status(200).send(student);
    } catch (e) {
        res.status(404).send();
    }
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})