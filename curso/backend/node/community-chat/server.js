const net = require("net")
const port = process.argv[2]
const server = net.createServer(socket =>{// socket es un objeto aunque podemos llamarle como queramos,connection, es la capa de transporte
    socket.on("data", data => {
        console.log(`${socket.remoteAddress}:${socket.remotePort}->${data.toString}`)
        socket.write("OK man")
    })
    socket.on("error",console.error)
})


//Este código se utiliza para conectarse a un servidor montado por alguien


server.listen(port, () => console.log(`chat running on port ${port}`) )