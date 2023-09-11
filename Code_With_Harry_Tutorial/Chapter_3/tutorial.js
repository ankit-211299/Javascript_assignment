let avg = (p,q) => {
    return (p+q)/2;
}

let a = 1;
let b = 2;
let c = 3;

console.log("Avg of "+a+" and "+b+" = "+(avg(a,b)+1));
console.log("Avg of "+b+" and "+c+" = "+(avg(b,c)+1));
console.log("Avg of "+c+" and "+a+" = "+(avg(c,a)+1));