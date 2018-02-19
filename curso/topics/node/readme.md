# Node.js

__Importante:__ [Documentación node](https://nodejs.org/dist/latest-v6.x/docs/api/)

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

__Resources:__
    * [cookie-session](https://github.com/expressjs/cookie-session): paquete para trabajar con cookies personalizadas, no requiere express. Además guarda la sessión data en el servidor.
    * [Json Web Toke](https://jwt.io/): paquete para crear, codificar y verificar tokens.