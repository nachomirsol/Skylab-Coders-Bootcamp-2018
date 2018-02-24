const fs = require("fs")
const {transform} = require("stream")
const from = process.argv[2]
const upperCase = new Transform({
    
    transform(chunk,encoding,proceed){
        this.push(chunk.toString().toUpperCase())
        proceed()
    }
})
process.stdin.pipe(upperCase).pipe(process.stdout)//standard input stdin, consola de entrada and standard output stdout