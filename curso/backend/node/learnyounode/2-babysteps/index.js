let result = 0
const file = process.argv
for(i=2;i<file.length;i++){
    result = result + parseInt(file[i])
}
console.log(result)
