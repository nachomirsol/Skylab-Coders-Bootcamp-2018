#Javascript Objects

##Objects
Objects can store info, they are containers of info as the arrays, but there are composed by properties(key:values) and methods(functions()).

There are 3 main ways to create objects:
    1- Literal notation: {}
    2- Constructor functions: instances.
    3- Creating functions that contain other objects

### Object literal notation
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

### Object constructor function
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

####private and public properties and methods(members)
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
####CONCLUSIONS
If we want accessible methods we should use prototype after the function

#####Inside constructor function
inside constructor function, a method can be used like this:
this.greeting = function(){}
Customer.prototype.greeting = function(){}

#####Outside a constructor function
Outside a constructor function a method can be added or used like this:
Customer.prototype.greeting = function(){}


### Prototype
Every function has a prototype property that contains an object. Prototype is like a matrix that lets the object
to inherit everything. Its also an object that contains predefined functions.
Prototype functions are accesible so if we want to create an object with private methods we wont use prototype.
"Al crear objetos usando una función como constructor, estos objetos adquieren un enlace secreto(_proto_) que apunta al prototipo
de esta función constructora, lo que les permite acceder a sus propiedades y métodos como si fueran propios."
So far, we've talked about objects as simple pairs of keys and values. In fact, JavaScript objects also have one additional attribute: 
a pointer to another object. We call this pointer the object's prototype.


### Polyfill
We can create and implement our own predefined functions and use them by doing polyfill. For example we can create an array random
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