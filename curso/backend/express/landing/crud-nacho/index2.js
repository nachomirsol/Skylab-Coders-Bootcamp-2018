require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const users = []

app.get('/api/users', (req, res) => res.json(ok('Users listing succeeded.', users.map(({ username }) => ({ username })))))

const jsonBodyParser = bodyParser.json()



app.post('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User registration failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (alreadyExists) return res.json(ko('User registration failed.', 'Username already exists.'))

    users.push({ username, password })

    res.json(ok('User registration succeeded.'))
})



app.get('api/retrieveusers/:username', (req, res) => {
    //const id = req.params.id
    //const id = req.params
    const {params:{username}} = req
    let user
    //filter recorreria todo aunque lo encontrara
    for(let i=0; i<users.length; i++){
       const _user = users[i]

        if(user.username === username){
            user = _user
            break
        }

        if(user){           
            res.json(ok("user retrieval succeed",user ))

        }else{
            res.json(ko("User retrieval failed", "Username does not exist"))
        }
        
    }

    if(user)
})


app.put('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User update failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (!alreadyExists) return res.json(ko('User update failed.', 'Username does not exists.'))

    const index = users.findIndex(user => user.username === username)
   
    users[index].password = password

    res.json(ok('User update succeeded'))
})



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

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))