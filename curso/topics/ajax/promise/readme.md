#Promises

Promises in javascript are, in an easy way, objects that returns a result when an asyncronous operation has finished.
When creating promises we have 2 methods:
1- Resolve: This method will execute if the result of the operation is ok
2- Reject: This method will execute if the result of the operation is not ok.

When consuming promises, we have 2 methods
1- Then: If resolve status is on, it will pass by then method, that will execute a code
2- Catch: If reject status is on, it will pass by catch method, that will execute a code

Promises can be chained in order to obtain different tasks. We can use then at our convenience depending on if we
mind the order of execution or not.

```javascript
promise
.then(response => console.log(....))
.then(response => console.log(....))
.catch(response => console.error(....))

```

A good example for promise, the mother that promise a child that she will buy him a phone depending on hes behaviour.

```javascript
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

```

