require("dotenv").config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const tasks = []

app.post('/api/create/task',jsonBodyParser,(req,res) => {
    const task = {
        id: new Date().getTime().toString(),
        text:req.body.text,
        done:false
    }

    tasks.push(task)
    if(!task.text ){
        res.send("You must create a task")
    }
    res.json(task)

})


app.get('/api/show/tasks', (req,res) => {
    res.json(tasks)
})


app.put('/api/done/task/:id', (req,res) => {
    const id = req.params.id
    const index = tasks.findIndex((taskelement) => taskelement.id === id)


    tasks[index].done = true
    res.json(tasks[index])

})


app.delete('/api/delete/task/:id',(req,res) => {
    const id = req.params.id
    const index = tasks.findIndex((taskElement) => taskElement.id === id)
    tasks.splice(index,1)

    res.json(tasks)
})



app.delete('api/deleteall/tasks', (req,res) => {
    tasks.splice(0,tasks.length)
    res.json(tasks)
})



app.get('/api/listdone/tasks', (req,res) => {
    const done = tasks.filter(element => element.done===true)
    res.json(done)
})


app.put('/api/update/task/:id',jsonBodyParser, (req,res) => {
    const id = req.params.id
    const text = req.body.text

    const index = tasks.findIndex(element => element.id === id)
    tasks[index].text=text
    res.json(tasks[index])

})

const port = process.env.PORT
app.listen(port, ()=> console.log(`Server running at port ${port}`))