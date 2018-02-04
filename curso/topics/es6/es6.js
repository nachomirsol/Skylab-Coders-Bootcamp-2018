//const a = 1 , evita reemplazo de variable, queda como constante. No puedo cambiar la variable. Salvo que esté en otro scope {}
//let a = 1 , equivalente a var, si que permite cambiar el valor de las variables. Pero sólo funciona dentro del scope. Ejemplo for.

//defineProperty para hacer un const en ES5.

//Arrow functions
//No tienen nombre
function greet(x){
	console.log(“helloooooo”)
}	

// formas de formar las funciones en ES6
() => {console.log(“hellooo”)}	//podemos prescindir de las llaves si es sólo una linea
() => console.log(“hellooo”)
() => 1     //si es una sola linea no hace falta return

//Hacen el bind de forma automática, no tenemos que bindear manualmente.

//En el ejemplo el this dentro de un h order function apunta a window en ES5
Var a = {
	name:”skylab”,
	arr:[1,2,3],
	print:function(){
		//var self = this // o usamos bind
		this.arr.forEach(function(v){
			console.log(this.name+v)
		}.bind(this))
	}
}

//Con arrow function no hace falta ni bindear ni nada para que this apunte al objeto.
Var a = {
	name:”skylab”,
	arr:[1,2,3],
	print:function(){
		//var self = this // o usamos bind
		this.arr.forEach(v => console.log(this.name+v))
	}
}
// No hay que sobreutilizarlo.

//Arrow function con parámetros
function sum(a,b,c){
    b=b||1;
    c=c||1;
}
sum(1);

function sum(a=1,b=1,c=1){
return a+b+c;
}
sum(1);

//Template strings
function sum(a=1,b=1,c=1){
    return `a = ${a}, b= ${b}, c=${c}`;
    }
    sum(1);


//object literals, enhanced object literals
a=1, b= 2, c=3
o = {a,b,c}


// crear propiedades complejas
let o = {}
function fun(){
    return "hello world";
}

o["a"+fun()]=1

let o1 = {
    [" a"+fun()]:1
}


///////////////////////////////////////////////////// Destructuring, forma rápida para coger valores de un array, destructuring assigment
var arr = [1,2,3];
[a,b,c] = arr;

var obj = {a:1, b:2, c:3}
var{a,b}=o

/////////////////////////////////////////////////////spread operator
var arr = [1,2,3];
var arr2 = [4,5,...arr]; // te mete el array anterior en este array

///////////////////////////////////////////////////// En objetos
var o = {...arr}
var o = {a:1,b:2}
var p = {c:3,...o}

///////////////////////////////////////////////////// rest operator

function fun(a,b,...c){// la c la convierte en array
    console.log(a,b,c);
}
fun(1,2,3,4,5,6);


///////////////////////////////////////////////////// SET, conjunto de datos, es iterable, para almacenar datos, en vez de usar arrays
var s = new Set();
s.add("hello").add("world");
s.size


///////////////////////////////////////////////////// MAP
var m = new Map();
m.set("x",1);
m.set("y",2);
m.get("x");


///////////////////////////////////////////////////// CLASSES

function Animal(name){this.name = name}
Animal.prototype.eat = function(){
    return "ñam ñam";
}
var cat = new Animal("minino");

function Cat(name){
    Animal.call(this,name);
}
Cat.prototype = New Animal();


class Animal {
    constructor(name){this.name=name},
    eat(){return "ñam ñam...v"}
}

class Cat extends Animal{
    constructor(name){super(name)}
    meou(){return "meow..."}
}
// uso proto para ver de donde viene