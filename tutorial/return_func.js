let a = 10;
let b = 20;

let sum_func = (a,b) => {
    return function(){
        console.log(sum = a+b);
    }
}
sum = sum_func(a,b);
sum(); 