# High Order Functions


## map

map creates a new array with the results of the function call over each element of the array.
The map function acts over each element of the array

```javascript
var numbers = [2,3,4,5,6];
numbers.map(function(x){
    return x*2;// applies this operation over each individual array element;
});
//[4,6,8,10,12]

```

## filter

Filter creates a new array with all elements that pases a test of the implemented function.

```javascript
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
months.filter(function(x){
    return x.length <= 3;
});
//["may"]
```

## reduce
Reduce applies a function to an accumulator and to each element of the array in order to reduce it in to a unique value.
This method saves time avoiding the use of loops. 
Reduce executes the function once for each element of the array. It can receive until 4 arguments:(prev,curren,currentIndex,array)
### Tipical reduce cases
#### 1- To sum all the elements of an array

```javascript
var numbers = [2,3,4,5,6];
numbers.reduce(function(accum,value){
    return accum+value;
});
//20
```

#### 2- Flatten array elements

```javascript
var arrayOfThings = ["nacho",34,["lucia",33],"skylab"];
var flattened = arrayOfThings.reduce(function(a, b) {
    return a.concat(b);
}, []);
console.log(flattened);
```

#### 3- Count item numbers on an array, repeated elements

```javascript

var classMates = ["Carlos","Edgar","Mario","Didac","Alexandra","Nacho","Alejandro","Carlos","Carlos","Alejandro","Victor","Robert","Asier","Jaime","Jaime","Pablo","Alexandre"];
classMates.reduce(value,current){

}

```
## every & some

Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.

```
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
```

## Callback
