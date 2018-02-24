/* 
Objetivo
Hacer un CRUD con POSTMAN como frontend, de manera que podamos introducir a través de POSTMAN un JSON con usuarios(username y password)
Si la petición es correcta devolveremos un mensaje tipo success y un estado tipo ok o ko
*/

//importamos el dotenv para poder utilizar variables de entorno enviroment vars
require('dotenv').config()


//importamos el express
const express = require("express")

// Ejecutamos el express
const app = express()

// para parsear el cuerpo del mensaje y poder mostrarlo en pantañña
const bodyParser = require("body-parser")
const jsonBodyParser = bodyParser.json()

const users = []

// Es recomendable construir las api por url git retrieve
/**************************************************************** CREATE USERS **************************************************************************** */
// Primero realizamos la primera request desde cliente, la de create, enviamos una request req.body al servidor y el servidor nos devuelve una response
/**************************************************************** CREATE USERS **************************************************************************** */

app.post("/api/createusers", jsonBodyParser, (req,res) => {
    //comprobamos desde post que funciona
    //res.send("ok")
    //req.body envia todo el cuerpo que le mandamos por cliente postman o formulario al servidor
    const user = req.body
    console.log(user)//Nos devuelve lo que le enviamos al servidor desde el cliente
    
    const ifExist = users.some(element => element.username === user.username)
    if(ifExist===false){
        users.push(user)
    }
//puede usarse res.json en vez de res.send
    res.send({
        status: "OK",
        data: users, 
        message:"Successfully logged" 
    })
    
})


/**************************************************************** READ OR LIST USERS **************************************************************************** */

/**************************************************************** READE OR LIST USERS **************************************************************************** */


app.get("/api/readusers",(req,res) => {
    //comprobamos desde post que funciona
    //res.send("ok")
    const readUsers = users.map(element => element.username)
    console.log(readUsers)
    res.send({
        status: "OK",
        data: readUsers,
        message: "Successfully readed"
    })

})


/**************************************************************** UPDATE USERS **************************************************************************** */
//para actualizar un usuario primero tendriamos que hacer un get para recuperar el dato que queremos actualizar y luego el put
/**************************************************************** UPDATE USERS **************************************************************************** */


app.put('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User update failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (!alreadyExists) return res.json(ko('User update failed.', 'Username does not exists.'))

    const index = users.findIndex(user => user.username === username)
   
    users[index].password = password

    res.json(ok('User update succeeded'))
})


/**************************************************************** DELETE USERS **************************************************************************** */
//para actualizar un usuario primero tendriamos que hacer un get para recuperar el dato que queremos actualizar y luego el put
/**************************************************************** DELETE USERS **************************************************************************** */


app.delete('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User deletion failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (!alreadyExists) return res.json(ko('User deletion failed.', 'Username does not exists.'))

    const index = users.findIndex(user => user.username === username)
   
    users.splice(index, 1)

    res.json(ok('User deletion succeeded'))
})


function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}



var port = process.env.PORT

app.listen(port, () => console.log(`running app in port ${port}`))


