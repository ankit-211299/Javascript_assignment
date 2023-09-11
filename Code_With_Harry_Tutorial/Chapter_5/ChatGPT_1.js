//Create an array of your favorite fruits.

let fruits = ["mango","banana","apple","cherry"];
console.log(fruits);

//Add a new fruit to the end of the array.
fruits.push("guava");
console.log(fruits);

//Remove the first fruit from the array.
fruits.shift();
console.log(fruits);

//Check if 'banana' exists in the array.
console.log(fruits.toString().includes("mango"));

//Find the index of 'apple' in the array.
console.log(fruits.indexOf("apple"));

//Use a loop to print each fruit in the array.
fruits.forEach((fr) => {
    console.log(fr);
});