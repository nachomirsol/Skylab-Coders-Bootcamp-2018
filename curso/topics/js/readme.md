# Javascript Objects

## Objects
Objects can store info, they are containers of info as the arrays, but there are composed by properties(key:values) and methods(functions()).

There are 3 main ways to create objects:
    1- Literal notation: {}
    2- Constructor functions: instances.
    3- Creating functions that contain other objects

### 1- Object literal notation
```javascript

var user = {
    id:1,
    userName: "Nacho",
    password: "1234",
    mail:"nachomirsol@gmail.com",
    rol: function(){
        return "You have user permissions";
    }
}
// You can put all objects properties and methods inside {} but you can also add more after like this
user.status = "online";
user.play = function(){
    return this.userName+" now you are playing";
}
//you can show the value of an object by doing
user.play(); //in case of accesing method
user.userName // in case of property

```
Using this inside a property points to window object
Using this inside a method points to our object

### 2- Object constructor function
This case you can make a constructor function with properties and methods as function parameters with a "this". Then you can create instances
of that object function with "new", new User();
it is highly recommended to create properties inside the constructor function and methods outside because of memory.
Parameters of the constructor function are not obligatory.

```javascript

function User(id,userName,password,mail,rol){
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.mail = mail;
}

 // You can add accessible methods by using prototype
 User.prototype.play = function(){
     return this.userName+" now you are playing";
 }

// To show the values you first need to create instances of the object constructor function
var nacho = new User(1,"Nacho","1234","nachomirsol@gmail.com","User");
console.log(nacho)
```
You dont need the parameters in the constructor function, you can create like this way:

```javascript

function Customer(){
    this.name;
    this.date;
    this.address;
}// now we have an empty constructor function

//first we create the object instance and then we add properties
var customer = new Customer(); 
customer.name="Nachal";
customer.date="16-05-1983";
customer.address = "Calle la lloma";
customer.name;

```
To access a method in constructor functions we need to create it with prototype in order to access the instances.
We show the Object by calling the instance.

#### private and public properties and methods(members)
We can create public and private members inside the constructor function.

1- Public members

Using this inside constructor function or prototype with object after constructor function:
```javascript
function Customer(name,date,address){
    this.name = name;
    this.date = date;
    this.address = address;

}
Customer.prototype.greeting = function(){
       return ( "Hi "+this.name+" how you doing");
}
var customer = new Customer("Nacho","16-05-1983","calle la lloma");
customer.greeting();

```
2- Private members
Using var instead of this, like for example:
```Javascript

function Customer(name,date,address){
    var name;
    var date;
    var address;
    var greeting = function(){
        return "Hi man";
    }
}
var customer = new Customer("Nacho","16-05-1983","calle la lloma");
customer.name;

```
#### CONCLUSIONS
If we want accessible methods we should use prototype function.
If we want accessible properties we should use this.x = x inside constructor
we can create methods inside constructor by using this.greeting = function(){}
or outside a function using prototype.


##### Inside constructor function
inside constructor function, a method can be used like this:
this.greeting = function(){}
Customer.prototype.greeting = function(){}

##### Outside a constructor function
Outside a constructor function a method can be added or used like this:
Customer.prototype.greeting = function(){}

## Advanced Javascript concepts

### Prototype
Every function has a prototype property that contains an object. Prototype is like a matrix that lets the object to inherit everything. 
Its also an object that contains predefined functions.

Prototype functions are accesible so if we want to create an object with private methods we wont use prototype.
"Al crear objetos usando una función como constructor, estos objetos adquieren un enlace secreto(_proto_) que apunta al prototipo
de esta función constructora, lo que les permite acceder a sus propiedades y métodos como si fueran propios."
So far, we've talked about objects as simple pairs of keys and values. In fact, JavaScript objects also have one additional attribute: 
a pointer to another object. We call this pointer the object's prototype.


### Polyfill
We can create and implement, change or extension of our own predefined functions and use them by doing polyfill. For example we can create an array random
shuffle polyfill in order to use it when you need it. You can also change behavior of predefined functions, for example foreach.

 ```javascript

Array.prototype.preFilled(num,elm){
    if(typeof num==="number" && typeof elm != "object"){
        var arr = [];
        for(var i = 0;i<num;i++){
            arr.push(elm);
        }
        return arr;
    }else{
        return "You need to put number as first param and string or number as second";
    }
}

```

### Scope (alcance de una variable)
Scope can be global (accessible outside or inside the function) or local(accesible only inside function)

### Closures (functions inside functions)

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object,however, even though it can call the outer function’s parameters directly.

This is a good practice if we dont want to load everything each time we invoque function.
Inside a function inside a method of an object we may want to point a this to the object. We can use a call or self=this outside the closure function to access.

```javascript
var user = {
    id:1,
    name:"Nacho",
    email:"nachomirsol@gmail.com",
    password:"1234asdf",
    createLeague:function create(){//closure
        var surname = "Miralles";
        var self = this;// sin esto no podríamos acceder a this.name 
        function completeName(){
            
            return self.name+" "+surname+" has created a league";
        }
        return completeName();
    }
};

user.createLeague();
```

Main applications:

1. Execute retarded functions(setTimeOut or setInterval)
2. Access from private to public members
```javascript

function Constructor(msjPrivado, msjPublico) {
 
     var propiedadPrivada = msjPrivado;
     this.propiedadPublica = msjPublico;
 
     var that = this; 
    /*
       La variable 'that' será guardada en el closure para ser 
       utilizada en su momento por la función metodoPrivado()
    */
 
     var metodoPrivado = function () {
         alert(propiedadPrivada);
         alert(that.propiedadPublica);
     };
 
     this.metodoPublico = function () {
          metodoPrivado();
     };
}
 
 
var obj = new Constructor("mensaje privado", "mensaje público");
obj.metodoPublico(); 

```

Closures Rules and Side Effects:

1. Closures have access to the outer function’s variable even after the outer function returns.
```javascript
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
​
​var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.​
​
​// The closure (lastName) is called here after the outer function has returned above​
​// Yet, the closure still has access to the outer function's variables and parameter​
mjName ("Jackson"); // This celebrity is Michael Jackson 
```
2. Closures store references to the outer function’s variables; they do not store the actual value.  Closures get more interesting when the value of the outer function’s variable changes before the closure is called.
```javascript
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
​
}
​
​var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
mjID.getID(); // 999​
mjID.setID(567); // Changes the outer function's variable​
mjID.getID(); // 567: It returns the updated celebrityId variable 
```

3. Closures Gone Awry. Because closures have access to the updated values of the outer function’s variables, they can also lead to bugs when the outer function’s variable changes with a for loop. Thus:
```javascript
// This example is explained in detail below (just after this code box).​
​function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}
​
​var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
​
​var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
​
​var stalloneID = createIdForActionCelebs [0];  console.log(stalloneID.id()); // 103
```

```javascript

function showName (firstName, lastName) {
​var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
​function makeFullName () {      
​return nameIntro + firstName + " " + lastName;  
}
​
​return makeFullName ();
}
​
showName ("Michael", "Jackson"); // Your name is Michael Jackson 

```
Otro ejemplo:

```javascript

var countVowels;
(function () {
   var regex = /[aáàäèéëeìíïiòóoöúùüu]/g;

   countVowels =function(text){// this function is accessing to outside variable regex so that when we invoque it, regex does not have to load each time
       return text.split("").reduce(function (vowelsCount, letter) {
          
           if (letter.toLowerCase().match(regex)) {
               return vowelsCount += 1
           }
           return vowelsCount
       }, 0)
   }
})()

```



### Callback

We talk about Callback when you pass a function as a parameter so that the function you passed executes our param.
pasar una función como parámetro para que dicha función se encargue de ejecutar nuestro parámetro.

```javascript

function hagoAlgo(callback) {
    callback();
}

hagoAlgo(function(){
    console.log('Hola Anexsoft !!');
});

```

### Self-executing anonimous function

Self executing functions are functions that executes automatically without invoque them
```javascript

(function() {
	alert('Hello World');
})();// ()brackets is what allows the function to execute

```

Lets see another example:

```javascript
(function() {
	var Person = {
		sayHello: function() {
			alert('Hello World');
		}
	}

	Person.sayHello();//What is going to execute
})();

```

### this

This es una propiedad del contexto de ejecución. El valor del this en el código global es siempre el Objeto Global.
This dentro de la propiedad de un objeto apunta al objeto global, en cambio this dentro del método de un objeto apunta al objeto en cuestión.
Comportamiento del this:

#### 1- This en una función global
En una función que está a nivel de programa, el valor del this corresponde al objeto globar.

 ```javascript
 function f1(){
     return this;
 }
 //f1()=== window , global object

```
 #### 2-This en un método de un objeto

 Cuando una función es llamada como método de un objeto, su this se corresponde con el objeto sobre el que se la llama.
 Independientemente de cómo se define el método, dentro del objeto o fuera
 
 ```javascript
 var o = {
     prop:37,
     f:function(){
         return this.prop;
     }
 };
 //o.f()=>37
```

 #### 3-This en un método de un prototipo

 Si el método pertenece a un objeto que está en la cadena de prototipos, su this también se corresponderá con el objeto sobre el que se le llama.

 ```javascript

var Class = function (){}
Class.prototype.f = function(){return this.a + this.b};

var oInstance = new Class();
oInstance.a = 1;
oInstance.b = 4;

//oInstance.f()=> 5
```

#### 4-This en una función constructora

Si se utiliza como constructor (con new), su this apuntará al nuevo objeto creado, es decir, a la instancia.

```javascript

function Hero(name){
    this.name = name;
    this.occupation = "ninja";
    this.whoAreYou = function(){
        return "i am "+this.name+" and i am a "+this.occupation;
    }
}

var h1 = new Hero("Donatello");
var h2 = new Hero("Leonardo");
h1.whoAreYou();//"i am Donatello and i am a ninja"
h2.whoAreYou();//"i am Leonardo and i am a ninja"
h1.occupation = "Turtle ninja Super Hero";
h1.whoAreYou(); // "I am Donatello and i am a turtle ninja Super Hero"
```

### Call and Apply

Si en la llamada a la función utilizamos call o apply, podemos asociar this a un objeto determinado que pasaremos como parametro.
En otras palabras, utilizando call o apply podemos conseguir que this apunte al objeto que le digamos.

```javascript

var user = {
    id:1,
    userName: "Nacho",
    password: "1234",
    mail:"nachomirsol@gmail.com",
    rol: function(){
        return this.userName+" have user permissions";
    }
}

var admin = {
    id:1,
    userName: "Lucia",
    password: "1234",
    mail:"nachomirsol@gmail.com",
}

user.rol.call(admin); // => Lucia have user permissions

function add(c,d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3}
add.call(o,5,7)// parameters are passed as arguments in the function call, first parameter, the object to use as this, the rest, other params

//in apply the first parameter is the object to use as this, second is an array
add.apply(o,[5,7]);
```

### Bind

Bind puede utilizarse para asociarle de forma permanente como this el objeto que queramos a una función.
```javascript
var alice = {
    name:"alice"
}

var eve = {
    name: "eve",
    talk: function(greeting){
        return (greeting + ", my name is "+this.name);
    }.bind(alice)// bound to alice
}

eve.talk("Hello") // => hello, my name is alice
eve.talk.call({name:"paco"},"HOLA")// => HOLA, my name is alice

```
### For in...for of

## High Order Functions


### map

map creates a new array with the results of the function call over each element of the array.
The map function acts over each element of the array. With map function we modify each element
of the array in the same way.

```javascript
var numbers = [2,3,4,5,6];
numbers.map(function(x){
    return x*2;// applies this operation over each individual array element;
});
//[4,6,8,10,12]

```

### filter

Filter creates a new array with all elements that pases a test of the implemented function.

```javascript

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
months.filter(function(x){
    return x.length <= 3;
});
//["may"]
```


##Other concepts

### Kata, koan, kojo

### JSDoc

SEE http://usejsdoc.org

- JSDoc 3 es una API para generar documentación en Javascript.
- Se puede descargar como un paquete de nmp para el entorno de ejecución node.js.
- Se añaden comentarios directamente sobre el código comenzando con /**
- Se pueden usar tags para dar más información, por ejemplo @constructor, @param,... (http://usejsdoc.org/#JSDoc3_Tag_Dictionary)
- Una vez que el código está comentado de esta forma, se puede generar la documentación en HTML ejecutando comandos específicos (se almacenan en la carpeta out/ del directorio de trabajo).
- La documentación se genera con una plantilla y configuración por defecto, modificable y extensible de acuerdo a nuestras necesidades.
Un ejemplo de código:


Links
GitHub Repo https://github.com/jsdoc3/jsdoc
Documentación: http://usejsdoc.org/

Tutoriales
https://github.com/dwyl/learn-jsdoc