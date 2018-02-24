const http = require("http")
//const bl = require("bl")
const concatStream = require("concat-stream")
const url = process.argv[2]

http.get(url, response => {
    response.SetEncoding("utf-8")

    response.pipe(concatStream(data => {
        console.log('res.pipe -> on data')
        console.log(data.split("").length)
    }))

    response.on("error",console.error)
})

