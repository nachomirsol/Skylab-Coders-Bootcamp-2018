//we define constructor function
function Person(firstName,lastName,age,gender,interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

var hombre = new Person("Nacho","Miralles",34,"male",["arch","music","videogames"]);
var mujer= new Person("Lucia","Rodriguez",33,"female",["deco","travel","walk"]);

//we add the method to the constructor function

Person.prototype.greeting=function(){
    return "Hi! I´m "+this.firstName;
}
Person.prototype.farewell = function(){
    return this.firstName+" has left the buildin"
}
Person.prototype.bio = function(){
    if(this.gender=="male"){
        return this.firstName+" "+this.lastName+" is "+this.age+" years old and is interested in "+this.interests;
    }else{
        return this.firstName+" "+this.lastName+" is "+this.age+" years old and is interested in "+this.interests;}
}

//We create an instance for the constructor class

//we show result

mujer.bio();

// en el molde se meten las propiedades
// en el prototipo las funciones



////////////////////////////////////////student////////////////////////////////
function Student(firstName,lastName,age,gender,interests){
    Person.call(this,firstName,lastName,age,gender,interests);
}

Student.prototype.greeting=function(){
    return "Hi! I´m "+this.firstName;
}

var mercedes = new Student("Mercedes","Soler",73,"female",["walk","decoration"]);
console.log(mercedes.greeting());


////////////////////////////////////////teacher////////////////////////////////


function Teacher(firstName,lastName,age,gender,interests,subject){
    Person.call(this,firstName,lastName,age,gender,interests);
    this.subject=subject;
}

Teacher.prototype.greeting = function(){
    return "hi "+"my name is "+this.firstName+" and i lteach "+this.subject;
}
var manuel = new Teacher("Manuel","Barzi","40","male",["teach","java"],"javascript");
console.log(manuel.greeting());



///////////////////////////////////////////////////////////////////////////

function Box(secret,password){
    var secret = secret;
    var password = password;
}


this.getSecret = function(_password){
    if(password==_password) return secret;
}
var secretBox = new Box("this is my secet","1234");




// creamos una caja con un secreto y un password no accesible

function Box(secret,password){

    this.getSecret = function(_password){// se aplica sobre una instancia no como un prototype,son métodos propios de la instancia
   //tiene una foto de lo que tiene el scope grande, compara el parámetro de la función con el parámetro de la función invocada
        if(password==_password) return secret;
    }

    this.setSecret = function(_secret,_password){
        if(password===_password){
            secret=_secret;
        }
    }
}
var secretBox = new Box("this is my secret","1234");
console.log(secretBox.getSecret("asw"));










////////////////////////////////////AHORCADO/////////////////////////////////////

////////////////////////////////////AHORCADO/////////////////////////////////////
function Hangman(word,attempt){

    arrayWord = word.split("");
    function array_filled(num,elm){
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

    var guiones = array_filled(word.length,"_");// reutilizamos la funcion array filled
    var lettersTried = [];

    this.try = function(letter){
       
            if(word.indexOf(letter)===-1){
                console.log("no");
                attempt--;
                lettersTried.push(letter);
                console.log(guiones,attempt)
            }else{
                for(var i=0;i<arrayWord.length;i++){
                    if(word[i]===letter){
                        guiones[i] = letter;
                    } 
                }
                console.log(guiones,attempt);
            }       
    }
}

var result = new Hangman("expected",10);
result.try("e");

////////////////////////////////////DETECTAR IF A CHAR IS A NUMBER/////////////////////////////////////

function hasNumber(myString) {
    return /\d/.test(myString);
  }
  hasNumber(3);

  

function hasNumber(myString){
    if(!isNaN(myString)===true && myString!=null && myString!= undefined){
        return("de pm macho");
    }else{
        return ("buuuuuu");
    }
}
hasNumber("#");
////////////////////////////////////DETECTAR IF A CHAR IS A STRING/////////////////////////////////////

