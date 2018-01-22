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
function reduce(){

    var loremIpsum = 'prueba de texto, con ipsum';
    var arrayIpsum = loremIpsum.split("");
    var vowels = "aeiouAEIOU";
    var countVowels = arrayIpsum.reduce(function(acc,current){
        if(vowels.split("").indexOf(current)!==-1){
           return acc+1;
        }else{
            return acc;
        }
    },0);
    return countVowels;
}
reduce();


//////////////////////////////////////EVERY & SOME///////////////////////////////////
// RETURN TRUE FOR ALL OR SOME MONTH WITH MORE THAN 5 LETTER
//////////////////////////////////////EVERY & SOME///////////////////////////////////


function everySome(){
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