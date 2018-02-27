# EXPRESS
Entorno de ejecución de node o módulo  que te facilita la transición de datos entre cliente y servidor. Permite crear un servidor http web de manera rápida.
client => React => NODE JS Server => ExpressJS => MongoDB
Img de powepoint

Como instalar Express:

```Bash
$ npm install -g express
```

Como importar Express:

```Javascript
import express = require('express')
const express = require("express")
```

Arrancar servidor:

```Javascript
const app = express()
```
### Work flow
Mediante un entorno de cliente (formulario HTML, POSTMAN...) realizaremos una request al servidor por url con req.params/req.body , que estará a la escucha a través de un puerto.
Le pasaremos al servidor desde cliente el cuerpo o contenido (req.body), el servidor lo procesa y devuelve una response o res (res.send, res.json...)

### Public & Private

En nuestra web, tendremos información que será pública y otra que sera privada, para ello podemos servir el contenido publico y privado de diferentes formas.

Ejemplo contenido público:

```Javascript
const express = require('express')
const app = express()

app.use(express.static('<folder_name>'))
```

Ejemplo contenido privado:

```Javascript
const express = require('express')
const path = require('path')
const app = express()

app.get('/culquiercosa',(req,res)=>{
    app.sendFile(path.join(__dirname, '/loquesea.html'))
    })
```

### Redirecciones, métodos de envío

Como redirigir a un html mediante rutas url's:

```Javascript
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/helloworld',(req,res)=>{     
    res.redirect('/404.html')    
})
```
En el ejemplo anterior, si alguien accede a la url www.loquesea.com/helloworld le redirigirá a 404.html, al haber definido el "app.use(express.static('public'))", el refirect buscará directamente el 404.html en la carpeta public.

### GET

Para leer información de la url, tenemos 2 formas; query y params, la diferencia esta en la forma de pasarle los datos en la url. 

Ejemplo query:

```Javascript
app.get('/country',(req,res)=>{
    const id = parseInt(req.query.id) // de esta forma cogeriamos el valor del id de una url tal que así: http://www.loquesea.com/contry?id=3
    })
```

Ejemplo params:

```Javascript
app.get('/country/:id',(req,res)=>{
    const id = parseInt(req.params.id) // de esta forma cogeriamos el valor del id de una url tal que así: http://www.loquesea.com/contry/3
    })
```

### POST

Express utiliza un modulo llamado body-parser para el tratamiendo de Post's, para utilizarlo primero hay que instalar el paquete:

```Bash
$ npm install body-parses
```

Una vez instalado lo importamos en nuestro código:

```Javascript
const bodyParser = require('body-parser')
```

Y añadimos el plugin al express mediante el use():

```Javascript
const express = require(express)
const app = express()

app.use(bodyParser.urlencoded({extended:false}))       
app.use(bodyParser.json())      //este no es necesario si no se tratan jason's
```

Ahora, express ya interpretaria una instrucción pasada mediante post y obtenida con req.body:

```Javascript
app.post('/ruta',(req,res)=>{               //notese que se usa el .post
        res.send(JSON.stringify(req.body))
    })
```

### Router

Router sirve para realizar las llamadas post, get, put y delete, a las rutas sin tener que definirlas cada vez como en los ejemplos anteriores.

Creamos el router:

```Javascript
const router = express.Router()
```

Le pasamos el router a Express:

```Javascript
app.use('/api',router)
```

Las llamadas con router se harian así:

```Javascript
router.route('/ruta')
    .get((req,res)=>{bla bla bla}) // para leer por url, utilizado en el read del CRUD

    .post((req,res)=>{bla bla bla}) // para envio de información, privado, el Create del CRUD

    .put((req,res)=>{bla bla bla}) // Para actualizar información, el Update del CRUD

    .delete((req,res)=>{bla bla bla}) // 
```

### Variables de entorno
Podemos crear en un fichero aparte variables de entorno para luego importarlas a nuestro archivo. Esto sería de mucha utilidad si queremos guardar numerosas rutas, urls u otra información que pueda repetirse. .env

__Resources:__
    * [.env or dotenv](https://www.npmjs.com/package/dotenv): paquete para utilizar variables de entorno.
    * [express-session](https://github.com/expressjs/session): paquete para trabajar con sesiones en express.
    * [session-file-store](https://www.npmjs.com/package/session-file-store): paquete para almacenar las sesiones en espress. Se usa junto a "express-session"

