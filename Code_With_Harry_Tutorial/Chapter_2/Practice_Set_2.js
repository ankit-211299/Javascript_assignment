// Use logical operator to find whether the age of a person lies between 10 and 20

// let a = prompt("Enter you age !");
// console.log(a>10&&a<20 ? "Yes" : "No");

//Demonstrate the use of switch case statements in javascript

let b = "Tue";
switch(b){
    case "Sun" : console.log("Sunday");
    break;
    case "Mon" : console.log("Monday");
    break;
    case "Tue" : console.log("Tuesday");
    break;
    case "Wed" : console.log("Wednesday");
    break;
    case "Thur" : console.log("Thursday");
    break;
    case "Fri" : console.log("Friday");
    break;
    case "Sat" : console.log("Saturday");
    break;
}

//Write a JS code to find whether a number is Divisible by 2 and 3

// let n = prompt("Enter the number -");
// console.log (n%2==0 && n%3==0 ? "Divisible" : "Not Devisible");

//Write a JS code to find whether a number is Divisible by 2 or 3

// if(n%3==0){
//     console.log("Divisible by 3");
// }
// else if(n%2==0){
//     console.log("Divisible by 2");
// }
// else{
//     console.log("Not divisible");
// }

//Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.

let age = prompt("Enter your age - ");
console.log(age >= 18 ? "You can drive" : "You cannot drive");