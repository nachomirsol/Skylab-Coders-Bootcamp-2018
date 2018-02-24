
var companeros = ["Carlos","Edgar","Mario","Didac","Alexandra","Nacho","Alejandro","Carlos","Carlos","Alejandro","Victor","Robert","Asier","Jaime","Jaime","Pablo","Alexandre"];


function reducer(accumulator, value) {
    if (accumulator[value]) {
      accumulator[value] = accumulator[value] + 1;
    } else {
      accumulator[value] = 1;
    }// accumulator[value] nos da acceso al nombre de la propiedad a ver si existe. El acumulador es {}
    // RULE 1: Always return the accumulator!!
    return accumulator;
  }
  
  // RULE 1: Always pass an initial value of the accumulator !!
  var arrayComps = companeros.reduce(reducer, {});
  
  var arrayComps = data.reduce(reducer);
  
  console.log(arrayComps);

  // accumulator es el objeto entero generado con {} 



  var fruits = ['apple', 'orange', 'grape', 'apple'].reduce(function(fruitsCount, currentFruit){
    if(typeof fruitsCount[currentFruit] !== "undefined"){
      fruitsCount[currentFruit]++; 
      return fruitsCount;
    } else {
        fruitsCount[currentFruit]=1; 
        return fruitsCount;
    }
}, {});

var fruitsArray = [];
for(var x in fruits){
    fruitsArray.push(x + ": " + fruits[x]);
}

console.log(fruitsArray);

