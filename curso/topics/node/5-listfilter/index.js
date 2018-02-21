const fs = require("fs")// incluimos fs para trabajar con archivos
const path = require("path") // incluimos path para el uso de extname, nombre de la extension
const folder = process.argv[2] // le pasamos nombre del archivo
const ext = process.argv[3] // le pasamos nombre de la extension

fs.readdir(folder,(err,files) =>{// metodo readdir devuelve un objeto que podemos tratar, le pasamos el archivo y un handler en el callback
    if(err) throw err
    const filtered = files.filter(file => {
        return path.extname(file) === `.${ext}`
    })
    filtered.forEach(file => console.log(file))
})