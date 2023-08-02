const arr = [1, 2, 3, 4];

// map
const arr1 = arr.map((value) => value * 2);
console.log(arr1);

// filter
const arr2 = arr.filter((value) => value % 2 === 0);
console.log(arr2);

// reduce
const arr3 = arr.reduce((total, value) => total + value, 0);
console.log(arr3);
