## Full Stack Task App

La aplicación consiste en hacer un crud de usuarios en una base de datos remota, para ello distinguiremos 3 directorios principales:
- users-app-client: Es la app en react, sin diseño, únicamente hacemos llamadas a la api-client y mostramos resultado del crud en pantalla

- users-api-client: Es la api de cliente, su función será la de llamar a la api server para que le facilite los datos solicitados. Utilizamos 
request para realizar las peticiones (axios,request,fetch)

- users-api-server: Es la api de servidor y por tanto manejará toda la lógica de interacción con la base de datos.

Cabe destacar la reestructuración y la separación por capas de la aplicación. Se ha utilizado módulos node npm para exportar paquetes.
Por ejemplo la api-client la hemos exportado e importado con npm i -s users-api-client