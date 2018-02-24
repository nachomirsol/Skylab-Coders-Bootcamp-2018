const fs = require("fs")
const file = process.argv[2]
const readFile = fs.readFileSync(file,"utf-8")
const result = (readFile.split('\n').length)-1
console.log(result)