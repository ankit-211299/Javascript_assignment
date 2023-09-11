//What will the following print in JS?
//console.log("har\""".length)

// => har"

//Explore the includes, startsWith & endsWith functions of a string

//Write a code to convert a given string to lowercase

let n = "AnkiT"
console.log(n.toLowerCase());

//Extract the amount out of this string "Please give Rs 1000"

let s = "Please give Rs 1000";
let arr = s.split(" ");

console.log(arr);

arr.forEach((ele) => {
    
    if(ele > 0){
        console.log(Number.parseInt(ele));
    }
});

//Try to change the 4th character of a given string. Were you able to do it?

// >> no