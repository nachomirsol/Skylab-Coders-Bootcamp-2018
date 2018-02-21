const http = require("http")
const url = process.argv[2]

http.get(url,res => {

    res.setEncoding("utf-8")
    let data = ""

    res.on("data",chunk =>{
        data += chunk
        console.log(data.split("").length)
    })

    res.on("end",() => {
        console.log(data.split("").length)
    })

    res.on("error",console.error)

}) 