//////////////////////////////////////MAP///////////////////////////////////
// Months first letter uppercase
//////////////////////////////////////MAP///////////////////////////////////


function map(){
    var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
    var firstUpperCase = months.map(function(x){
        return x[0].toUpperCase()+""+x.split("").slice(1,x.length).join("");
    });
    return firstUpperCase;
}
map();


//////////////////////////////////////FILTER///////////////////////////////////
// Months beginning with j
//////////////////////////////////////FILTER///////////////////////////////////


function filter(){
    var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
    var beginWithJ = months.filter(function(x){
        if(x.indexOf("j")!==-1){
            return x;
        }
    });
    return beginWithJ;
}
filter();

//////////////////////////////////////REDUCE///////////////////////////////////
// Count vowels in text
//////////////////////////////////////REDUCE///////////////////////////////////
function reduce(string){
    var arrayIpsum = string.toLowerCase().split("");
    var vowels = "aeiou";
    var countVowels = arrayIpsum.reduce(function(acc,current){
        if(vowels.indexOf(current)!==-1){// podemos aplicar ternario
           return acc+1;
        }else{
            return acc;
        }
    },0);
    return countVowels;
}
reduce('prueba de texto, con ipsum');


//BETTER SOLUTION


var countVowels;
(function () {
   var regex = /[aáàäèéëeìíïiòóoöúùüu]/g;

   countVowels =function(text){
       return text.split("").reduce(function (vowelsCount, letter) {
          
           if (letter.toLowerCase().match(regex)) {
               return vowelsCount += 1
           }
           return vowelsCount
       }, 0)
   }
})()


//////////////////////////////////////EVERY & SOME///////////////////////////////////
// RETURN TRUE FOR ALL OR SOME MONTH WITH MORE THAN 5 LETTER
//////////////////////////////////////EVERY & SOME///////////////////////////////////


function everySome(){// Convertir en closure
    var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];
    var every = months.every(function(x){
        return x.length >=5;
    });
    
    var some = months.some(function(x){
        return x.length >=5;
    });
    
    if(every===true && some===true){
        return true;
    }else{
        return false;
    }
}
everySome();



//////////////////////////////////////CALLBACK///////////////////////////////////
// Callback function
//////////////////////////////////////CALLBACK///////////////////////////////////