// Create a variable of type string and try to add a number to it.

var s = "47";
var add = s+43;

console.log(add);

//Use typeof operator to find the datatype of the string in last question

console.log(typeof(add));

//Create a const object in javascript. Can you change it to hold a number later?

const obj = {
    "Ankit" : 23,
    "Priyanshu" : 23,
    "Nitesh" : 20
};

console.log(obj);

obj["Hri"] = 21;

console.log(obj);

// => Yes can do that.

//Try to add a new key to the const object in Problem 3. Were you able to do it?

//done above

//Write a JS code to create a word-meaning dictionary of 5 words.

const dict = {
    "word1" : "meaning1",
    "word2" : "meaning2",
    "word3" : "meaning3",
    "word4" : "meaning4",
    "word5" : "meaning5"
};

console.log(dict);