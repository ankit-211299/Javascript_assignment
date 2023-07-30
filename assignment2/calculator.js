//make an even biased calculator

function result(num1,num2,opp){

    switch(opp){
        case 1: console.log(num1+num2);
                break;
        case 2: console.log(num1-num2);
                break;
        case 3: console.log(num1*num2);
                break;
        case 4: console.log(num1/num2);
                break;
        default: console.log("!! Invalid Operator !!");
    }
}

function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function calculator(num1, num2, opp){

    if(isEven(num1) === true && isEven(num2) === true){
        result(num1,num2,opp);
    }
    else{
        console.log("Numbers provided is/are not even");
    }
}

let num1 = parseInt(prompt("Enter number 1 = "));
let num2 = parseInt(prompt("Enter number 2 = "));
let opp = parseInt(prompt("Enter the operator (1-4) - "));

calculator(num1,num2,opp);