require("dotenv").config()
const taskLogic = require("./taskLogic")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()


app.post('/api/create/task',jsonBodyParser,(req,res) => {

    try{
       const newTask = taskLogic.create(req.body.text)
       res.send(newTask)
    }
    catch(err){
        res.json(err.message)
    }

})


app.get('/api/show/tasks', (req,res) => {

    try{
        res.json(taskLogic.listTodo())

    }catch(err){
        res.json(err.message)
    }

})


app.put('/api/done/task/:id', (req,res) => {
    const id = req.params.id
    
    try{
        res.json(taskLogic.markDone(id))
    }catch(err){
        res.json(err.message)
    }

})


app.delete('/api/delete/task/:id',(req,res) => {

    const id = req.params.id

    try{
        res.json(taskLogic.remove(id))
    }catch(err){
        res.json(err.message)
    }
})



app.delete('api/deleteall/tasks', (req,res) => {

        taskLogic.removeAll()

})



app.get('/api/listdone/tasks', (req,res) => {

    res.json(taskLogic.listDone())

})


app.put('/api/update/task/:id',jsonBodyParser, (req,res) => {
    const id = req.params.id
    const text = req.body.text

    try{
        res.json(taskLogic.update(id,text))
    }catch(err){
        res.json(err.message)
    }


})

const port = process.env.PORT
app.listen(port, ()=> console.log(`Server running at port ${port}`))



//comunicacion json entre cliente y servidor
//comunicacion http entre navegador y cliente form

//navegador/servidor web / servidor API