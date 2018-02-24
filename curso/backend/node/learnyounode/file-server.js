const http = require("http")
const fs = require("fs")
const server = http.createServer(request,response => {

    fs.createReadStream(file).pipe(response)
})
const port = process.argv[2]
const file = process.argv[3]
server.listen(port,() => `Server is listening at port ${port}`)