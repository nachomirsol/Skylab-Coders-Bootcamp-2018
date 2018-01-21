function isArray(arr){
    
return Array.isArray(arr);
    
}
console.log("should return true "+isArray([]));
console.log("should return true "+isArray(2));
console.log("should return true "+isArray("string"));
console.log("should return true "+isArray({}));

function isArray(arr){
    return arr.instanceof Array;
}

function isArray(x){
    
var dataType = ["number","string","undefined","boolean","null"];
    for(var i=0;i<dataType.length;i++){
        if(typeof x===dataType[i]){
            return false;
        }else{
            return true;
        }
    }
        
}
    console.log(isArray(2));

//////////////////////////////////////////
// Join Elements
 //////////////////////////////////////////

 function joinElements(arr){
    return arr.join(",");
}
console.log(joinElements(["John","George","Ringo","Paul"]));

//////////////////////////////////////////
// Array Clone
//////////////////////////////////////////

function array_clone(arr){
    var result = arr.slice(0,arr.length);
    //sobraria con arr.slice()
    return result;
}
array_clone([1,2,3,4,6]);

//////////////////////////////////////////
// Find Differences
//////////////////////////////////////////

function findDifferences(arr1,arr2){

}


//////////////////////////////////////////
// Sum and Product,
//////////////////////////////////////////
function sumArray(arr){
    var sum=0;
    var product = 1;
    
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
        product = product*arr[i];
    }
    return sum;
    return product;
}
sumArray([1,3,4]);
// we can test it also with reduce

//////////////////////////////////////////
// Add Items
//////////////////////////////////////////
function addItems(arr){
var blankArr=[];
blankArr.push(arr);
console.log(blankArr);
}
addItems([2,3,4]);

//////////////////////////////////////////
// Generate Array Length
//////////////////////////////////////////
function generateArrayLength(number1,number2){
    var arr = [];
    for(var i=number1;i<=number2;i++){
        arr.push(i);
    
    }console.log(arr);
}
generateArrayLength(1,9);

//////////////////////////////////////////
// Get the last element of an array
//////////////////////////////////////////
function last(array, n) {
    if (array == null){
        return false;
    }
    if (n == null){
        return array[array.length - 1];
    }else{
        return array.slice(Math.max(array.length - n, 0));  
    }
}
console.log(last([2,4,5,7],2));
//review



//////////////////////////////////////////
//sort items
//////////////////////////////////////////
function sortItems(arr){
    var array = arr.sort();
    return array;
}
console.log(sortItems([1,3,2,8,4,7]));

//////////////////////////////////////////
//get random item in array
//////////////////////////////////////////
function randArr(arr){

}
randArr([3,5,6,7]);

//////////////////////////////////////////
//find duplicates
//////////////////////////////////////////
function findDuplicates(arr){
    var aux=[];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                aux.push(arr[j]);
            }
        }
    }return(aux)
}
findDuplicates([2,4,5,8,5,3,2]);

//////////////////////////////////////////
//merge arrays
//////////////////////////////////////////
function mergeArrays(array1,array2){
    var mergedArray = array1.concat(array2);
    var countDuplicated=0;
    for(var i=0;i<mergedArray.length;i++){
        for(var j=i+1;j<mergedArray.length;j++){
            if(mergedArray[i]==mergedArray[j]){
                countDuplicated++;
                mergedArray.splice(mergedArray.indexOf(mergedArray[i]),countDuplicated);
            }
        }return(mergedArray);
    }
    
}
mergeArrays(["apple","banana","pear","strawberry","grape"],["banana","pineapple","lemon"]);

//////////////////////////////////////////
//separate even
//////////////////////////////////////////
function separateEven(num){
    var arrNum = num.split("");
    for(var i=0;i<arrNum.length;i++){
        
            if(Number(arrNum[i])%2==1 && Number(arrNum[i+1])%2==1){
                arrNum[i]+="-";
            }
    }
    return(arrNum.join(""));
}
separateEven("123456479413");


//////////////////////////////////////////
//most frequented item
//////////////////////////////////////////
function mostFrequentedItem(arr){
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
}
mostFrequentedItem([1,2,3,3,5,6,7,7,7,8,9]);
//////////////////////////////////////////
//move element
//////////////////////////////////////////
function moveElement(arr,pos1,pos2){
    var temp = arr[pos1];
    arr[pos1]=arr[pos2];
    arr[pos2]=temp;
    console.log(arr);
}
moveElement([10,12,14,1],0,2);


//////////////////////////////////////////
//swap case
//////////////////////////////////////////
function swapCase(str){
    var arr = str.split("");
    for(var i=0;i<arr.length;i++){
        if(arr[i]===arr[i].toUpperCase()){
            arr[i]=arr[i].toLowerCase();
        }else if(arr[i]===arr[i].toLowerCase()){
            arr[i]=arr[i].toUpperCase();
        }

    }console.log(arr.join(""));
   
}
swapCase("The dog is awsome");

//////////////////////////////////////////
//print array elements
//////////////////////////////////////////
function printArray(){
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for(var i=0;i<a.length;i++){
        console.log("row"+i+": "+a[i]);
    }
}
printArray();

//////////////////////////////////////////
//array filled
//////////////////////////////////////////
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


//////////////////////////////////////////
//sum squares
//////////////////////////////////////////
function sumSquares(num){
    var num1=num;
    var num2=num;
    return((num1*num2)+(num1*num2));
}
sumSquares(3);

//////////////////////////////////////////
//remove duplicate
//////////////////////////////////////////

function removeDuplicates(arr){
    var array = []
    for(var i = 0;i < arr.length; i++){
        if(array.indexOf(arr[i]) == -1){
            array.push(arr[i]);
        }
    }
    return array;
}

removeDuplicates([1,2,2,3,3,4,5,6,7,7]);


//////////////////////////////////////////
//show choices
//////////////////////////////////////////
function showChoices(){
   var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
   var o = ["st","nd","rd","th"];

   for(var i=1;i<color.length;i++){
       console.log(i+": "+i+""+o[i]+" is "+color[i]);
   }

}
showChoices();

//////////////////////////////////////////
//show leap years
//////////////////////////////////////////


//////////////////////////////////////////
//shuffle array
//////////////////////////////////////////
Array.prototype.shuffleRandom = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
 
var tempArray = [ 1, 2, 3, 4]
tempArray.shuffleRandom();
 
// and the result is...
console.log(tempArray); 


//////////////////////////////////////////
//generate Array steps
//////////////////////////////////////////
function generateSteps(n1,n2){
    var arr = [];
    for(var i=n1;i<n2;i++){
        arr.push(i);
    }
    return arr;
}
console.log(generateSteps(1,5));


//////////////////////////////////////////
//flatten array
//////////////////////////////////////////



//////////////////////////////////////////
//Union array
//////////////////////////////////////////


function unionArray(arr1,arr2){
    var arrUnion = arr1.concat(arr2);
    console.log(arrUnion);
}
unionArray([1,2,3,4],["a","b","c"]);


//////////////////////////////////////////
//Remove falsy
//////////////////////////////////////////


function removeFalsy(arr){
    
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i]==="null" || typeof arr[i]==="boolean" || typeof arr[i]==="undefined" || typeof arr[i]==="object"){
            arr.splice(i,1);
        }
    }
    return arr;
}

removeFalsy(["nacho",undefined,45,0,null,NaN,"crack",15]);// review


//////////////////////////////////////////
//Return first element of an array
//////////////////////////////////////////


function firstElement(arr,n){
    if(arr==null){
        return void 0;
    }
    if(n==null){
        return arr[0];
    }
    if(n<0){
        return [];
        return arr.slice(0, n);
    }
}
console.log(firstElement([7, 9, 0, -2])); 
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));


//////////////////////////////////////////
//Sort objects title
//////////////////////////////////////////
function sortObjectsTitle(){
    var newLibrary = [];
    var library = [ 
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

}
sortObjectsTitle();