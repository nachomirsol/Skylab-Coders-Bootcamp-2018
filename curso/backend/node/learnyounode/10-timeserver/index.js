const net = require("net")// para conexiones TCP de cliente a servidor
const port = process.argv[2] //puerto que indicaremos por consola para la creación del servidor
const server = net.createServer(socket => {// creamos el servidor abriendo un canal de comunicación (client-server) mediante el socket
    const date = new Date()// Estos son los datos que nos va a pasar el servidor cuando nos conectemos
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${(date.getDate())} ${(date.getHours())}:${(date.getMinutes())}\n`

    socket.on("close", ()  => {
        console.log("closing socket...")
    })

    socket.end(formattedDate)
})

server.listen(port, () => console.log(`Listening to the port ${port}`))