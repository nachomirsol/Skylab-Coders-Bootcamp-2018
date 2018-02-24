const http = require('http')
const concatStream = require('concat-stream')

function logContentsFromUrlsInOrder(urls) { // COOL! rest operator
    if(urls.length)
        http.get((urls = urls.slice()).shift(), res => {
            res.setEncoding('utf-8')

            res.pipe(concatStream(data => {
                console.log(data)

                logContentsFromUrlsInOrder(urls) // COOL! spread operator
            }))

            res.on('error', console.error)
        })
}

module.exports = logContentsFromUrlsInOrder
/*
Este ejercicio es similar al anterior puesto que debes usar http.get().
  Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.

  Tu programa deberá imprimir el contenido de cada una de las URLs en
  consola en el mismo orden que fueron recibidos los argumentos. No deberás
  imprimir el largo, solo el contenido como String, pero debes respetar el
  orden de llegada de los argumentos.

    Como las llamadas a las URLs son asíncronas, es probable que no recibas
  las respuestas en orden por lo que no puedes imprimir las respuestas a
  medida que llegan.

  Tendrás que encolar los resultados y mantener un contador de cuántas
  peticiones han sido recibidas de modo que al llegar al final puedas
  imprimir los resultados.

*/