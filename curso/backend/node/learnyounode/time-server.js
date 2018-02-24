//const http = require("http")
const net = require("net") // para funcionalidades de red server
const server = net.createServer(socket => {

    const date = new Date()
    const formattedDate = `${date.getFullYear()}-${warrant2Digits(date.getMonth() + 1)}-${warrant2Digits(date.getDate())} ${warrant2Digits(date.getHours())}:${warrant2Digits(date.getMinutes())}\n`
    
    socket.on('close', () => console.log('closing socket'))
    
    //socket.write(formattedDate)
    console.log(formattedDate)

    socket.end(formattedDate)
})

const port = process.argv[2]
server.listen(port, () => console.log(`server is listening at port ${port}`))