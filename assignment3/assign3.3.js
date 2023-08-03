// Given an array [1, 2, 3, 4, 5]. Create a new array with
// the square of each element(use built in array methods).


let arr1 = [1,2,3,4,5];


// let arr2=[];
// for(let n of arr1){
//     arr2.push(Math.pow(n,2));
// }
// console.log(arr2);

// TODO: Using map()

const arr3 = arr1.map((value) => value*value);
console.log(arr3);
