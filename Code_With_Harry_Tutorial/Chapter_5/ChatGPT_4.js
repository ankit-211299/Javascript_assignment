//Create an array of words.
let words = ["word123","word2","fact","wrd3","wo4","w","ankit",];
console.log(words);

//Use the map method to create a new array with the lengths of each word.
let wordlen = words.map((val) => {return val.length});
console.log(wordlen);

//Use the filter method to find words that contain the letter 'a'.
let conta = words.filter((val) => {
    return val.includes("a");
});
console.log(conta);

//Use the reduce method to find the longest word in the array.
let long = words.reduce((longest,current) => {
    return current.length > longest.length ? current : longest;
},"");

console.log("The longest word is ",long);

//Use the sort method to sort the words alphabetically.
console.log(words.sort());