// Given a string “Azad Ram Madiha Yash”. Return a string with the first letter
// of every word from the string. (Use built in methods).

let sen = "Azad Ram Madiha Yash"
let word = sen.split(" ");

console.log(word);

for(var n of word){
    console.log(n[0]);
}