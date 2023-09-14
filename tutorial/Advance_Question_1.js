//Write a JavaScript function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome 
//(reads the same forwards and backward), and false otherwise. Ignore spaces, punctuation, and capitalization when determining if a string is a palindrome.

let isPalindrome = (str) => {
    str=str.toLowerCase().trim();
    let stra = Array.from(str);
    stra = stra.filter((ele) => (ele !== " ") && (ele !== ".") && (ele !== ","));
    str = stra.join("");
    let revStr = stra.reverse().join("");
    
    if(revStr === str)
        return true;
    else
        return false;
};

console.log(isPalindrome("d.a D "));

//