# ES 6

ECMAScript 6 (ES6) is the version 6 of Javascript. Introduces important changes, like _Arrow function_, _let_ and _const_ variables, and more.

## Index concepts:

1. [Arrow Function](#Arrow-function)
2. [Let and Const](#Let-and-Const)
3. [Template strings](#Template-Strings)
4. [Enhanced object properties](#Enhanced-object-properties)
5. [Rest Operator](#Rest-operator)
6. [Spread Operator](#Spread-operator)
7. [Destructuring assignment](#Destructuring-assignment)
8. [Set](#Set)
9. [Map](#Map)
10. [Promise](#Promise)
11. [Classes](#Classes)

### Arrow function

ES6 introduces the _Arrow function_ in order to write cleanest code.

##### Syntax:

Declare Arrow function:

```ES6
let suma = () => {return 1+1}     //no parameter
let suma = x => {return x+1}      //one parameter
let suma =(x,y) => {return x+y}   //two or more parameters
```

Return vars in Arrow function:

```ES6
let suma = () => 1+1           //function without 'return' but returns 1+1
let suma = () => {return 1+1}  //if i put '{' then put return too
```

How to define parameter in a function if the parameter is undefined:

```ES6
let suma = (x=1) => x+2     
suma()  //returns 3
suma(3) //returns 5
```

### Let and Const

ES6 introduces _let_ and _const_ like a new variable type. 
* Const: is a  constant, is inmutable.
* Let: his scope is local.

### Template Strings (Strings with ` `)

Template Strings use back-ticks (``) rather than the single or double quotes we're used to with regular strings.

Example:

```ES6
let string = `Hello World`
```

Concat var with _template string_:

```ES6
let name = 'Agust'
let age = 32

let string = `Hi, my name is ${name} and i has ${age} years old`
```

### Enhanced object properties

In ES6, the objects are defined in a simpler way:

```ES6
let x = 1
let y = 2

//Initialize object in ES5:
let obj1 ={
    x:x,
    y:y,
    f: function(){}
}

//Initialize object in ES6:
let obj2 ={
    x,
    y,
    f(){}
}

//obj1 and obj2 have the same properties.
```

### Rest operator

The _Rest operator_ is like _arguments_ but instead of taking all parameters, it only takes the undefined ones.

##### Syntax:

```ES6
...nameParameter
```

Example:

```ES6
example(1,2,3,4,5);

function example(a,b,...data,c){
    console.log(data)               //this print: [3,4,5]
}
```

### Spread operator

Pass the array elements to a functión, divides each element in a diferent parameter.

Example:

```ES6
const arr = [1,2,3,4];

function sum(a,b,c,d){ 
    return a+b+c+d;
}

sum(...arr)         //this return: 10
                    //in the function: a=1,b=2,c=3,d=4
```

### Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

##### Syntax:

Simple examples:

```ES6
let list = [1,2,3,4]
let [a,b,c,d] = [1,2,3,4]
console.log(c)              //this print: 3
```

```ES6
let all = ['ax', 'why', 'zet'];
let [,,z] = all;

console.log(z)          //this print: zet
```

Rest Operator example:

```ES6
let list = [1,2,3,4]
let [a,b,...rest] = list
console.log(rest)           //this print: [3,4]
```

Define new var with object value:

```ES6
let p = {
    a:1,
    b:{
        x:2,
        y:3
    }
}
let {a:v, b:w} = p

console.log(v)      //this print: 1
console.log(w)      //this print: {x:2,y:3}

typeof v            //this print: "number"
typeof w            //this print: "object"
```

### Set

Is a new __data structure__ for handling collections. Store unique values of any type, whether primitive values or object references.

##### Syntax:

```ES6
let s = new Set()

s.add('hello').add('crazy').add('world')

console.log(s.size)              //this print: 2

console.log(s.has('crazy'))     //this print: true

s.delete('crazy')               //remove crazy from s

console.log(s.has('crazy'))     //now, this print: false

s.clear()                       //remove all elements

console.log(s.size)             //this print: 0
```

### Map

Is a new __data structure__ for handling collections. Simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value. 

__Important__: A good use for map is to translate strings

##### Syntax:

```ES6
let m = new Map()

m.set('title-en','Hello world')
m.set('title-es','Hola mundo')
m.set('title-it','Ciao mondo')

m.set('description-en','This is my web')
m.set('description-es','Esta es mi web')
m.set('description-it','Bla bla bla web')

lang = 'es'

$('h1').text(m.get('title-' + lang))
$('p').text(m.get('description-' + lang))
```


### Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

##### Syntax:

Define promise:

```ES6
var myPromise = new Promise((resolve,reject)=>{
        if(true)
            resolve('Correct!')
        if(false)
            reject('Incorrect!')
    })
```

Use promise:

```ES6
myPromise.then(
    (result)=>{
        console.log(result)        //this print: Correct!
    })
    .catch(
        (reason)=>{
            console.log(reason)    //this print: Incorrect!
        })
```

### Classes

ES6 classes provide a much simpler and clearer syntax to create objects and deal with inheritance.

##### Syntax:

Example, declare a _class_:

```ES6

class Vehicle{
    constructor(type, wheels,brand){
        this.type = type
        this.wheels = wheels
        this.brand = brand
    }
    getType(){
        return this.type
    }
    getWheels(){
        return this.wheels
    }
}
```

Example, declare class with herency:

```ES6
class Car extends Vehicle{          //herency
    constructor(brand){
        super('car',4,brand)
    }
    getBrand(){
        return this.brand
    }
}

const carFord = new Car('ford')
```

##### Static Methods:

The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.

```ES6
static methodName{

}
```

