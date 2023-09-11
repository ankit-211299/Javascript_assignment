//Create an array of numbers (e.g., [3, 6, 9, 12, 15]).
let arr = [3,6,9,12,15];

//Double the value of each number in the array.
let arr2 = arr.map((val) => {
    return (val*2);
});

console.log(arr);
console.log(arr2);

//Filter out all numbers less than 10.

let arr3 = arr.filter((val) => {
    return val>10;
});

console.log(arr3);

//Calculate the sum of the remaining numbers.

var sum=0;
arr3.forEach((ele) => {
    sum+=ele;
});

console.log("Sum using for each = ",sum);

//using reduce
let sum1 = arr3.reduce((tot,val) => {
    return (tot+val);
});
console.log("Sum Using Reduce = ",sum1);

//Find the maximum value in the array.
//arr.sort();
//console.log(arr[0]);

//using reduce
let max = arr.reduce((total,value) => {
    return Math.max(total,value);
});

console.log("Maximum in array",arr.toString(),"is = ",max);

//