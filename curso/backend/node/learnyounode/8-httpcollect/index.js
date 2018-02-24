const http = require("http")
const url = process.argv[2]

http.get(url, res => {

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

/*
  Escribe un programa que realice una petición HTTP GET a una URL provista
  como primer argumento del programa. Almacena todos los datos recibidos del
  servidor, es decir no sólo el primer evento "data", y luego escribe a
  consola dos líneas:

   » En la primera escribe la cantidad de caracteres recibidos.
   » En la segunda escribe la totalidad de caracteres recibidos (todo el
     string).
     1) Almacenar los datos de todos los eventos "data" para luego agregarlos
  los resultados antes de imprimirlos por consola. Puedes usar el evento
  "end" para saber cuando terminas de recibir datos.

  2) Usa un paquete de terceros para evitar los problemas de almacenar el
  stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer
  List) o concat-stream.

*/