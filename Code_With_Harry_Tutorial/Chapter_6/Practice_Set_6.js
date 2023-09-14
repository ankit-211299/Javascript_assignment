//Create an array of number and take input from the user to add numbers to this array.

// let arr1 = [];

// console.log("Enter 5 numbers - ");
// for(let i=0;i<5;i++){
//     arr1[i]=prompt("Enter the number -");
// }

// console.log(arr1);

//Keep adding the numbers in the array until 0 is added to the array

// arr2 = [];

// console.log("Enter numbers to stop enter 0 - ");

// let n = Number.parseInt(prompt("Enter the number"));
// do{
//     arr2.push(n);
//     n = Number.parseInt(prompt("Enter the number"));
// }while(n !== 0);

// console.log(arr2);

//Filter for the numbers divisible by 10 from a given array

let arr = [20,12,40,6,5,30,100,101,32];

let div_10 = arr.filter((val) => val%10 !== 0)

console.log(div_10);

//Create an array of square of given numbers

let arr2 = [1,2,3,4,5];
let sq = arr2.map((ele) => ele*ele);

console.log(sq);

//Use reduce to calculate factorial of a given number from an array for first n natural numbers(n being the number whose factorial needs to be calculated)