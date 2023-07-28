// Sayantan
// Input and array and convert it into Array like objects
// Example:
// Input : ['I', 'am', 'array-like']
// output : {0: 'I', 1: 'am', 2: 'array-like'}

var arr = [ 1, 2, "Ankit", 50, 90 ];
console.log(arr);

var obj={};
for(var i in arr){

    obj[i]=arr[i];
}
console.log("Object_1 =",obj);


//noraml function
var obj2={};
arr.forEach(myFunction);

function myFunction(item, index){
    // console.log(item);
    obj2[index] = item;
}

console.log("Object_2 = ",obj2);


//using arrow_function
var obj3 = {};
arr.forEach((item,index) => {
    obj3[index] = item;
});

console.log("Object_3 =",obj3);