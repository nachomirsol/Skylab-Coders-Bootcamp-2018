function isObject(input){
    if(typeof input=="object"){
        return true;
    }else{
        return false;
    }
}

var myCar = {
    brand:"Seat",
    model:"Leon",
    color:"grey",
    comment:function hiCar(){
        return("my "+myCar.color+" "+myCar.brand+" "+myCar.model+" is great");
    }
}
console.log(myCar.comment());