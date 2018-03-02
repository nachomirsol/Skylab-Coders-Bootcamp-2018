require('dotenv').config()
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()



MongoClient.connect('mongodb://localhost:27017/bootcamp', (err,connection) => {
    if(err) throw Error

    const db = connection.db('bootcamp')// usame la base de datos bootcamp


    app.get('/',(req,res) => {
        const query = req.query.q || req.query.query || ''
        const regex = new RegExp(query,'i')

        db.collection('staff').find({name:regex}).toArray((err,data) => {
            if(err) throw err
    
            res.json(data)
            //console.log(res)
    
            //database.close()
        })
    })



    const port = process.env.PORT
    app.listen(port, ()=> console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {// interrumpe el proceso
        console.log('stopping server')
        connection.close()
        process.exit()//cerramos el proceso
    })

})

