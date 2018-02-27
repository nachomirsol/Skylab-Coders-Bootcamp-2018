#PUG
Pug es un motor server side rendering utilizado para visualizar contenido HTML del lado del servidor. Podemos conectarlo con un archivo javascrpit y pasarle variables gracias a expres. Podemos utilizarlo para crear formularios en html y mandar la información a nuestro index.js par trabajar con los endpoints o rutas

###Instalar pug
```$
npm install --save pug
```
###Inicializar / configurar
```javascript
const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
```

### Renderizar una página
Conectar pug con javascript es muy sencillo, podemos capturar la información con #{}
Mostrar el index.pug en el directorio raiz, ejemplo básico:

```pug
app.get('/',(req,res) => {
   res.render("index")
})
```

__homepage.pug:__

```pug
html
    body
        h1 Hello World!
        p Hi there, #{user.username}!
```

__app.js:__

```js
router.get("/", (req, res) => {
    res.render("homepage", {
        user: req.user
    });
});
```
###Conversor html to pug
El motor jade, ahora llamado pug permite convertir html a pug. html to pug

###Condicionales
https://pugjs.org/language/conditionals

###iteraciones
https://pujs.org/language/iteration.html