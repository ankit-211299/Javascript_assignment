// Given an array [1, -4, 12, 0, -3, 29, -150]. Calculate the
// sum of all positive numbers (use built in array
// methods).


let arr = [1, -4, 12, 0, -3, 29, -150]
let sum=0;

for (var n of arr) {
    if (n > 0) {
        sum += n;
    }
}
console.log(sum);

// TODO: Using reduce(), filter()
