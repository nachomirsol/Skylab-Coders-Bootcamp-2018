var fs = require("fs");
var fileName = process.argv[2];
/*fs.readFile(fileName,(err,data)=>{
console.log(data.toString().split('\n').length - 1)
})*/

function readFile(path,encoding){
    return new promise((resolve,reject) => {
        fs.readFile(path,"utf-8",(err,data) => {
            if(err) return reject(err)

            resolve(data)
        })
    })
}
readFile(path,"utf-8")
.then(console.log)
.catch(console.log)

console.log("hello world")