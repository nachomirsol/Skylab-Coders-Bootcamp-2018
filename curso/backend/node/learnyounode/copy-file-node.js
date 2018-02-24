
const fs = require("fs")

const origin = process.argv[2]
const target = process.argv[3]

fs.createReadStream("copy-file-node.js").pipe(fs.createWriteStream("copied-file-node.js"))
//createReadStream devuelve un objeto

/*fs.readFile(origin,(err,data) => {
    if(err) throw err
    if(target){
        fs.writeFile(target,data,(err) => {
            if(err) throw err
        })
    }else{
        throw "no copy to destination"
    }
})*/