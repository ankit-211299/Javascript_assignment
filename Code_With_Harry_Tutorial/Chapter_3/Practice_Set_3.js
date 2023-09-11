//Write a code to print the marks of a student in an object using for loop obj = {harry : 98, rohan : 70, akash : 7}

const obj = {
    "harry" : 98,
    "rohan" : 70,
    "akash" : 7
}

for(let i=0;i<Object.keys(obj).length;i++){
    console.log(obj[Object.keys(obj)[i]]);
}
console.log("Using for in loop");

//Write the code in Q1 using for in loop
for(var names in obj){
    console.log(obj[names]);
}

//Write a code to print "Try Again" until the user enters the correct number

// var n = prompt("Enter the number - ");
// while(n!=3){
//     n = prompt("Enter the number again - ");
// }

// console.log("Walla!! You found it.");



//Write a code to find the mean of 5 numbers

var sum=0;
for(let i=0; i<5; i++){
    let m = Number.parseInt(prompt("Enter "+(i+1)+ "number = "));
    sum+=m;
}
console.log(sum/5);