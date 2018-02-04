
////////////////////////////////////ARRAY PREFILLED/////////////////////////////////////

array_filled = (num,elm)=>{
    if(typeof num==="number" && typeof elm != "object"){
        let arr = [];
        for(let i = 0;i<num;i++){
            arr.push(elm);
        }
        return arr;
    }else{
        return "You need to put number as first param and string or number as second";
    }
}

////////////////////////////////////AHORCADO/////////////////////////////////////

class Hangman{
    constructor(word,attempt){

        let arrayWord = word.split("");
        let guiones = array_filled(word.length,"_");// reutilizamos la funcion array filled
        let lettersTried = [];


        this.try = (letter)=>{   
                if(word.indexOf(letter)===-1){
                    console.log("no");
                    attempt--;
                    lettersTried.push(letter);
                    console.log(guiones,attempt)
                }else{
                    for(let i=0;i<arrayWord.length;i++){
                        if(word[i]===letter){
                            guiones[i] = letter;
                        } 
                    }
                    console.log(guiones,attempt);
                }       
        }
    }
}

var result = new Hangman("expected",10);
console.log(result);
result.try("e");