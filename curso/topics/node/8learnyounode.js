const http = require("http")
const url = process.argv[2]
http.get(url,response => {
    let stringData=""
    response.setEncoding("utf-8")

    response.on("data",data => {
        stringData+=data
    })

    response.on("end",() => {
        console.log(stringData.length)
        console.log(stringData)
    })

})