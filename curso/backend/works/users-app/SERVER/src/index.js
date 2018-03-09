require('dotenv').config()

const express = require('express')
const bodyparser = require('body-parser')
const router = express.Router()
const app = express()

const users = []

app.use('/api', router)

const jsonBodyParser = bodyparser.json()

router.get('/list', (req, res)=>{
    res.json(ok('todo bien', users.map((({id,name})=>({id,name})))))
})

router.post('/create',jsonBodyParser, (req, res)=>{
    const {name, password} = req.body
    if(!name || !password)
        return res.json(ko('no has introducido username o password'))
    
    const id = new Date().getTime().toString()
    users.push({id:id, name, password})
    res.json(ok('Todo bien'))  
})

router.put('/update/:id',jsonBodyParser, (req, res)=>{
    const {id} =req.params
    const {name, password, newPassword} = req.body

    console.log(name, password, newPassword, id)

    const user = users.find(user=>user.id == id)

    if(!user)
        return res.json(ko('Error al actualizar!', 'El usuario no existe'))

    if(user.password != password)
        return res.json(ko('Error al actualizar!', 'El usuario o constraseña no son correctos'))

    user.name = name
    user.password = newPassword
    res.json(ok('el usuario ha sido modificado')) 
})

router.delete('/delete/:id', jsonBodyParser, (req, res)=>{
    const {id} = req.params
    const {name, password} = req.body

    const index = users.findIndex(user => user.id == id)

    if(index < 0)
        return res.json(ko('Error al eliminar el usuario', 'El ususario no existe'))
    
    if(users[index].password != password || users[index].name != name)
        return res.json(ko('Error al eliminar el usuario', 'El usuario o constraseña no son correctos'))

    users.splice(index,1)
    res.json(ok('el usuario se ha eliminado correctamente'))
})

function ok(message, item) {
    const res = { status: 'OK', message }
    if (item) res.item = item
    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }
    if (error) res.error = error
    return res
}

const port = process.env.PORT

app.listen(port, ()=> console.log(`open server in port ${port}`))