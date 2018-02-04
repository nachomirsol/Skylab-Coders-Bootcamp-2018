#ECMASCRIPT 6 (ES6
Ecma Script 6 is a new version of javascript with new methods and functions in order to improve the code, making it much more readeble.
We can see most of new features at : http://es6-features.org/#Constants

## Some important changes:

### Let and const
Instead of var variables, we have const and let variables. We will use let if a variable is up to be changed, and const if the variable is not
going to be changed, for example pi number π (pi) is a const because it has the same value everywhere.

```javascript
let count = 0;
const piNumber = 3.14

```

### Arrow functions
A new important changes is about the way of creating functions in ES6, now we have what we call arrow functions. 

```javascript
// functions in ES5
function sum(a,b){
    return a+b
}

// functions in ES6
(a,b)=> {return a+b} // keys are not necessary if its just single line
() => {console.log(“hellooo”)}

```
In es6 we dont need the name of the function, we can keep it in a variable.
With arrow functions there is no need to bind, they do it automatically


```javascript
//es5
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

//es6

Var a = {
	name:”skylab”,
	arr:[1,2,3],
	print:function(){
		//var self = this // o usamos bind
		this.arr.forEach(v => console.log(this.name+v))
	}
}

```

### Template strings
Template strings lets us to separate layers, logic and rendering. So we can embed javascript expressions inside strings.

```javascript

var arr = [ 'la', 'donna', 'e', 'mobile' ];
 
console.info( `My chain joined: ${ arr.join( ' ' ) }` );
// My chain joined: la donna e mobile


// Methods
var str = 'la donna e mobile';
 
console.info( `Uppercase: ${ str.toUpperCase() }` );
// Uppercase: LA DONNA E MOBILE

//math operations
ar val1 = 100,
    val2 = 200;
 
console.info( `The sum: ${ val1 + val2 }` ); // 300

```

### Spread operator
The spread operator lets us to concat different elements, like arrays

```javascript

var arr = [1,2,3];
var arr2 = [4,5,...arr];
console.log(arr2);// [4,5,1,2,3]

```

