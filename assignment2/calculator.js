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

