# Node.js

__Importante:__ [Documentación node](https://nodejs.org/dist/latest-v6.x/docs/api/)

### NODE CONCEPTS
Node es un entorno de ejecución, intérprete de javascript del lado del servidor que utiliza el motor V8 de google.

### BUFFER
Es un almacen temporal para un paquete de datos que se transfieren de un lugar a otro. Cuando el buffer se llena, se pasan los datos

### PIPEs
Los pipes en node se utilizan para pasar el resultado de una función a la siguiente. Combinando los pipes con streams podemos conectar paquetes de código, manipular los datos de una forma específica y pasarlo a la sigueinte pieza de código.

Quiero listar directorios que tengan la palabra array, por ejemplo. Podemos filtrar, filtrar búsquedas.
ls -l node_modules/ | grep array
$ grep node_modules -r -e buffer | grep state
grep buscame en la carpeta de forma recursiva la expresión que contenga x

### STREAMS
Los streams son paquetes de datos como lo son los arrays y los strings pero que no ocupan espacio en memoria. A diferencia de un array, tu no sabes la longitud de este flujo de datos, puede ser indefinido. El concepto de stream hace referencia a cuando podemos mostrar paquetes de datos antes de recibir el conjunto entero de los mismos, es decir, no tenemos todo el paquete de datos en memoria y luego lo consumimos. Los streams pueden ser readable o writtable.

### SOCKET
Un socket es un canal de comunicación abierto entre cliente y servidor para poder establecer una comunicación 

Como acceder a la console de Node desde la consola:

```bash
$ node
```

Como ejecutar un script con node desde la consola:

```bash
$ node <file-name>
```

### Crear nuevo proyecto node

Para crear un proyecto vacio, ir al directorio donde se desea albergar el proyecto y escribir:

```bash
$ npm init      //esto inicia la creación de un .jason donde irá pidiendo datos
```

Para crearlo de forma rápida sin introducir manualmente los datos del .jason:

```bash
$ npm init --yes
```

### Debugar en Node

Como debugar en node desde la consola:

```bash
$ node debug <file-name>
```

Como colocar un breakpoint en una linea del código, cuando estás debugando:

```bash
$ sb(3) //el 3 es el número de la linea donde se quiere el breakpoint
```

Como ejecutar el código y que se pare en el breakpoint:

```bash
$ cont //volver a poner cont para que se siga ejecutando el código
```

Como ver el valor de una variable:

```bash
$ exec <nombre-var>
```

Como inspeccionar el código linea a linea desde el principio:

```bash
$ node --inspect --debug-brk <name-file> // esto arroja un enlace que hay que copiar en Chrome
```

### Devtool

Como instalar la herramienta devtool para debugar mejor en consola:

```bash
$ sudo npm install -g devtool
```

Utilizar devtool en un archivo en concreto:

```bash
$ devtool --break <name-file> 
```
command+r para debugar, refresca
### Global y Process

Global: es donde se almacena todo en node. Para ver global en Node:

```bash
$ global //dentro de la consola node
```

Process: referente al processo en ejecución. Para ver process en Node:

```bash
$ process //dentro de la consola node
```

### Módulos de Node

Node esta compuesto por módulos y cada uno de ellos contiene funciones. Estos módulos se pueden importar mediante require('modulo'), ejemplos de módulos:
- __File System__ (require('fs')): se utiliza para el tratamiento de ficheros y directorios.
- __Http__ (require('http')): se utiliza para crear servidores y para conectarse a otras webs.

### File System

Para utilizar File System en Node, hay que importarlo de la siguiente manera :

```Javascript
const fs = require('fs') //hasta que js soporte el import, Ecma Script 6 utiliza require para importar
```


### Exportar e Importar

Como __exportar__ una función en node:

```Javascript
module.exports = <nombre-función>
```

Ejemplo:

```Javascript

function suma(a,b){
    return a+b
}

module.exports = suma
```


Como __importar__ una función en node:

```Javascript
const <nombre-var> = require('ruta/<nombre-función>')
```

Ejemplo:

```Javascript
const suma = require('./suma')
```


### node modules
npm i bl generará node_modules

__Resources:__
    * [cookie-session](https://github.com/expressjs/cookie-session): paquete para trabajar con cookies personalizadas, no requiere express. Además guarda la sessión data en el servidor.
    * [Json Web Toke](https://jwt.io/): paquete para crear, codificar y verificar tokens.