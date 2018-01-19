function Car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
}

Car.prototype.driving = function(){
    return("my car driving is so great");
}
var miCoche = new Car("Ford","Fiesta","blanco");
console.log(miCoche.color);
console.log(miCoche.driving());
console.log(miCoche);


function Motorbike(brand,model){
    Car.call(this,brand,model);
    this.speed = speed;
}

Motorbike.prototype.riding = function(){
    return("rrrrrrrr");
}

var miMoto = new Motorbike("honda","tmax",80);
console.log(miMoto);
console.log(miMoto.riding());






///////////////////////////////////PRACTICANDO OBJETOS 1 - OBJETOS LITERALES////////////////////////////////////


var user = {
    userName:"Nacho",
    password:"1234",
    mail:"nachomirsol@gmail.com"
};

user.rol="Admin";
user.task = function(){return this.userName}
console.log(user.task());
console.log(user);


///////////////////////////////////PRACTICANDO OBJETOS 2 - OBJETOS FUNCIONES CONSTRUCTORAS////////////////////////////////////


function User(userName,password,mail,rol,sports){
    this.userName = userName;
    this.password = password;
    this.mail = mail;
    this.rol = rol;
    this.sports = sports;
}

User.prototype.givePermision = function(){
    if(this.rol=="admin"){
        console.log("you have special permissions");
    }else{
         console.log("You dont have any permission");
    }
    
}

var nachal = new User("Nachal","1234","nachomirsol@gmail.com","admin",["padel","futbol"]);
var lucia = new User("Lucia","abcd","luciam@hotmail.com","user",["gym","esqui"]);

//console.log(nachal.givePermision());
//console.log(lucia.givePermision());



function SuperAdmin(userName,password,mail,rol,sports,invite){
    User.call(this,userName,password,mail,rol,sports);
    this.invite = invite;
}

SuperAdmin.prototype.inviteUsers = function(){
    return this.invite+" you can invite or add users to the app";
}

var boss = new SuperAdmin("Manu","asdas","manu@barzi.com","super","hockey","yes");
console.log(boss.inviteUsers());


///////////////////////////////////PRACTICANDO OBJETOS 3 - OBJETOS CALL Y BIND////////////////////////////////////


var person = {
    name:"Nacho",
    surname:"Miralles",
    fullName:function(){
      return  "My full name is "+this.name+" "+this.surname;
    }
}

var otherPerson ={
    name:"Lucia",
    surname:"Rodriguez"
}
person.fullName();
person.fullName.call(otherPerson);

///////////////////////////////////ARRAY EXERCISES////////////////////////////////////


function shuffle(arr){
    var temp;
    var arrLength = arr.length;
    var randomNumber = Math.round(Math.random() * (arr.length-1));
    var randomArray = [];
    for(var i=0;i<arrLength-1;i++){
        
        temp=arr[i];
        arr[i]=arr[randomNumber];
        arr[randomNumber]=temp;
    }return arr;
}
shuffle([1,2,3]);

Array.prototype.shuffle = function() {
    var input = this;// hace ref al array creado luego en vez de poner parametro array en funcion
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
 
var tempArray = [ 1, 2, 3, 4]
tempArray.shuffle();
 
// and the result is...
console.log(tempArray); 


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
array_filled(7,"X");


///////////////////////////////////PRACTICANDO OBJETOS 3 - OBJETOS CALL Y BIND////////////////////////////////////


var cocheLiteral = {//creamos objeto de forma literal
    marca:"Renault",
    modelo:"Megane",
    color:"silver",
    ruedas:4,
    resumen:function(){
        return "This is a "+this.color+" "+this.marca+" "+this.modelo+" and it has "+this.ruedas+" wheels";
    }
}
cocheLiteral.run = function(){
    return "rrr";
}
cocheLiteral.run();

var motoLiteral = {//creamos objeto de forma literal
    marca:"Yamaha",
    modelo:"T-Max",
    color:"negra",
    ruedas:2
}

cocheLiteral.resumen.call(motoLiteral);


function CocheConstructor(marca,modelo,color,ruedas){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.ruedas = ruedas;
}
CocheConstructor.prototype.run = function(){
    return "rrrr";
}

var coche = new CocheConstructor("Renault","Megane","Silver",4);
var coche2 = new CocheConstructor("Porsche","Cayenne","blanco",4);
coche2.run();

function MotoConstructor(marca,modelo,color,ruedas,aparca){
    CocheConstructor.call(this,marca,modelo,color,ruedas);
}
