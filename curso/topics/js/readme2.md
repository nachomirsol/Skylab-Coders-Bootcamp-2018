# JAVASCRIPT: Advanced Concepts

### For in

```Javascript
var arr = ['a','b','c','d','e'];

for(item in arr){
    console.log(item)   //this print: 0 1 2 3 4 
}
```

### For of

```Javascript
var arr = ['a','b','c','d','e'];

for(item of arr){
    console.log(item)   //this print: a b c d e 
}
```

### Prototype

All JavaScript objects inherit the properties and methods from their prototype. 

If you create a new object type and want to make a function or property for every new object from this type, include your new function or property on prototype.

**Note**: Also, you can add a function or property in the prototype of a existing object, like Array, String, ... This is know like **polyfil**.

Example prototype:

```Javascript
function Animal(specie,genre)
{
    this.specie = specie;
    this.genre = genre;
}

Animal.prototype.sleep = function(){return 'Im sleeping';}; //this function it's common for all Animal instances.
```

Example polyfil:

```Javascript
Array.prototype.clone = function() { // provides a new function to arrays
    return this.slice(0);}; // creates a copy of the array
```

##### Herency with prototype:

With prototype we can inherits functions and properties from other objects.

Example:


```Javascript
function Human(genre) {
     Animal.call(this, 'human', genre);
 }
 
 Human.prototype = new Animal(); //Human inherits properties and functions from Animal, so Human contains now a sleep() function
```

[More Info](https://www.w3schools.com/js/js_object_prototypes.asp)

### Ternary operator

The ternary operator "?:" return one of the two posible expression, depending on a condition.

##### Syntax:

```Javascript
condition ? expression1 : expression2
```

##### Parameters:

* Condition: any boolean expresion.

* Expresion1: expresion returned if condition is true.

* Expresion2: expresion returned if condition is false.

Example:

```Javascript
var a = 7; var b = 3;

a>=b ? a : b; //this return a

var a = 7; var b = 9;

a>=b ? a : b; //now return b
```

[More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### RegExp

A regular expression is an object that describes a pattern of characters.

* [More Info](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

* [Web to translate RegExp](https://regex101.com)

### Hoisting

Javascript allow to declare a var after using a var.

Example:

```Javascript
function example()
{
    x = 5;
    console.log(x);
    var x; //makes the var "x" to a local var
}
```

[More Info](https://www.w3schools.com/js/js_hoisting.asp)

### call()

The call() function calls a function with a given *this* value and arguments provided individually.

Example:

```Javascript
function salute(name, name2) {
    console.log(this.hello + ' ' + name + ', ' + name2);
}

var english = {
    hello: 'hello'
};
 
var german = {
    hello: 'hallo'
};
 
salute.call(english, 'ana', 'max'); //print: hello ana, max
salute.call(german, 'ana', 'max');  //print: hallo ana, max
```

[More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

## Higher order functions

The higher order function is a function that takes one or more functions as arguments or return a function as result.

### map()

The map() function return a new array with the results of calling a function for every array element.

Example:

```Javascript
var arr = [1,2,3,4];

var arrMaped = arr.map(function(element){return element * 2;});

// arrMap contain: [2,4,6,8]
```

[More Info](https://www.w3schools.com/jsref/jsref_map.asp
)

### forEach()

The forEach() function calls a provided function once for each element in an array, in order.

Example:

```Javascript
var arr = [1,2,3,4];

arr.forEach(function(element){console.log('Element: ' + element);});

//This example print by console:
//Element: 1
//Element: 2
//Element: 3
//Element: 4
```

[More Info](https://www.w3schools.com/JSREF/jsref_forEach.asp)

### filter()

The filter() function return a new array filled with all array elements that pass a test (provided as a function).

Example:

```Javascript
var arr = [1,3,6,8,9];

var arrFiltered = arr.filter(function(element){return element>5;});

// arrFiltered contain: [6,8,9]
```

[More Info](https://www.w3schools.com/jsref/jsref_filter.asp)

### reduce()

The reduce() function reduces the array to a single value.

Example:

```Javascript
var arr = [5,1,1,5];

var sumaElementValue = arr.reduce(function(accum,element){return accum + element;});

// sumaElementValue is: 12
```

Another example:

```Javascript
var arr = [5,1,1,5];

var mulElementValue = arr.reduce(function(accum,element){return accum * element;});

// mulElementValue is: 25
```

[More Info](https://www.w3schools.com/jsref/jsref_reduce.asp)

### every()

The every() function checks if all elements in an array pass a test (provided as a function).

Example:

```Javascript
var arr1 = [2,4,6,8];
var arr2 = [2,4,6,9];

var boolTest1 = arr1.every(function(element){return element % 2 === 0;});
var boolTest2 = arr2.every(function(element){return element % 2 === 0;});

// boolTest1 is true because all the elements are even
// boolTest2 is false because the last element is uneven
```

[More Info](https://www.w3schools.com/jsref/jsref_every.asp)

### some()

The some() function check if at least one element pass a test (provided as a function).

```Javascript
var arr = [1,3,6,9];

var boolTest = arr.some(function(element){return element % 2 === 0;});

// boolTest is true because the third element is even
```

[More Info](https://www.w3schools.com/jsref/jsref_some.asp)

### Callback function

A callback function is executed after the current effect is 100% finished.

Example:

```Javascript
function sum(a,b,callback)
{
    return callback(a+b);
}

sum(2,3, function(result) {return result*10});
```


Another example: The example below has a callback parameter that is a function that will be executed after the hide effect is completed

```Javascript
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```