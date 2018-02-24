const isHappy = true;

// first of all we define the promise
const p1 = new Promise((resolve,reject)=>{
    if(isHappy){
        var phone = {
            model:"Samsung",
            color:"black",
            price:600
        };
        resolve(phone);// if behaviour is good resolve gets in action
    }else{
        var reason = new Error("Your behaviuor was not correct");
        reject(reason);// if behaviour is bad reject comes in action
    }
});

const p2 = function(phone){
    const message = "Hey friend, i have a new "+phone.color+" "+phone.model+" of "+phone.price+" €";
    return Promise.resolve(message);
}


//now we can consume or use the promise
p1
.then(p2)
.then((res)=>console.log(res))
.catch((error)=>console.log(error.message))