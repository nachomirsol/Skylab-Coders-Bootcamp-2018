# MongoDB

Como instalas MongoDb:
    - Descargar el .tgz de la página oficial.
    - Descomprimirlo.
    - creamos una carpeta db
Poner la ruta de los binarios en la variable PATH:

```Bash

```

### Arrancar servidor MongoDb
En consola arrancamos el servidor, nos colocamos en la carpeta raiz de mongo, la carpeta que nos hemos instalado:
```bash
./bin/mongod --dbpath ./db
```

###Arrancar cliente MongoDb
En consola arrancamos el cliente, nos colocamos en la carpeta raiz de mongo:
```bash
./bin/mongo
```

### Ejecutar MongoDb

Server:

```Bash
$ mongod
```

Cliente(en otro terminal):

```
$ mongo
```

### Comandos Cliente Mongo

Mostrar las db existentes:

```Bash
$ show dbs
```

Crear una base de datos(db):

```Bash
$ use <name-new-db>
```

Cambiar a una db en concreto:

```Bash
$ use <db-existente>    //si no existe te la crea
```

Insertar contenido en una coleccion:

```Bash
$ db.nombreColeccion.insert({marca:'Seat', modelo:'Leon'})
```

Mostrar las colecciones de la db:

```Bash
$ show collections
```

or

```Bash
$ show tables
```

Mostrar el contenido de una colección:

```Bash
$ db.nombreColeccion.find()
```

Eliminar una db:

```Bash
\\primero cambiamos a la db que queremos eliminar con el: $ use <db-name>, luego:
$ db.dropDatabase()
```

Mostrar el número de filas de una coleccion:

```Bash
$ db.nombreColeccion.count()
```

## Data Import / Export

```bash
$ mongoimport --db <database-name> --collection <collection-name> --drop --file <pseudo-json-data-file-path>
```

### From / to a json array file and a local server

```bash
$ mongoimport -d <database-name> -c <collection-name> --drop --jsonArray --file <json-array-file>

$ mongoexport -d <database-name> -c <collection-name> --jsonArray -o <json-array-file>
```

### From / to a json array file and a remote mongo server

```bash
$ mongoimport -h <host>:<port> -d <database-name> -c <collection-name> -u <username> -p <password> --drop --jsonArray --file <json-array-file>

$ mongoexport -h <host>:<port> -d <database-name> -c <collection-name> -u <username> -p <password>  --jsonArray -o <json-array-file>
```

### Mongo Remoto
- Nos registramos en la web https://mlab.com/home
- Nos creamos una nueva base de datos y colecciones para dicha base de datos.
- El programa nos facilitará una url de conexión y puerto que utilizaremos para nuestro proyecto.

### Robomongo
Es un software que nos permite trabajar con mongo de forma visual, sin consola. Podemos conectarnos a bases de datos locales o remotas (mlab)v

### Experimentar Mongo Db
Siguiendo los pasos de esta url: https://docs.mongodb.com/getting-started/shell/import-data/ podemos importarnos una base de datos de restaurante gigante.
Consiste en un fichero json. Para poder importarlo debemos tener arrancado el mongo client y el mongo server. Con robomongo podemos experimentar consultas
una vez importada y creada la nueva base de datos.

## Hints

[What is the “__v” field in MongoDB?](https://stackoverflow.com/questions/12495891/what-is-the-v-field-in-mongodb)

[Cómo relacionar tus modelos en MongoDB](https://carlosazaustre.es/como-relacionar-tus-modelos-en-mongodb/)