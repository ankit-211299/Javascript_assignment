// Day 1 - Variables, Hoisting.

// Day 2 - Data types and dynamic typing in javascript

// "use strict"; // For better code writing restrict use of bad code.
console.log(var1);
var var1 = 10; // Global variable

// String
const name = "string";
console.log(name);

// Arrays
const arr1 = [1, 2, 3]; // valid
const arr2 = ["a", "b", "c"]; // valid
console.log(arr1, arr2);

// Dynamic Arrays
const dynamic_arr = ["abc", 1, { a: 1, b: 2 }, [1, 2]]; // valid - this array consists of string,array, and Object
console.log(dynamic_arr);

// Object
const obj = { a: 1, b: 2, c: 3 }; // valid
console.log(obj);

// JSON
const js_obj = {
    employees: [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Anna", lastName: "Smith" },
        { firstName: "Peter", lastName: "Jones" },
    ],
};

const json_obj = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

console.log("This is a normal js Object: ", js_obj);
console.log("This is JSON Object: ", JSON.stringify(js_obj));
console.log("This is JSON Object: ", json_obj);
console.log("This is a normal js Object:", JSON.parse(json_obj));

// Accessing Arrays and Object
console.log(name[0], arr1[2], arr2[2], obj["b"]);

// boolean, comparison, condition.
console.log([] === []); // False ->
console.log({} === {}); // False ->
console.log(true === true); // True ->
console.log(false === false); // True ->
console.log(null === null); // True ->
console.log(0 === null); // False ->
console.log(undefined === undefined); // True ->

// Function

// Hoisting in functions
// Anonymous functions and arrow functions are not hoisted
func1("boo"); // Valid
// demo("boo"); // not - Valid

// Normal Functions

function func1(params) {
    console.log("Named function - ", params);
}

func1(10);
// Anonymous Functions

const func2 = function (params) {
    console.log("Anonymous function -", params);
};

var demo = function (params) {
    console.log("Another Anonymous function -", params);
};

const another_func = func2;
const other_func = func1;

func2(20);

other_func("foo");

// Immediate function calling
(function (params) {
    console.log(params);
})("hello");

// Arrow Functions
const func3 = (params) => {
    console.log("Arrow function -", params);
};

func3(30);

// Callback Functions

const func4 = (callback_func) => {
    callback_func();
};

// func4(another_func("Callback")); // Not valid callback As we are calling the function.
func4(() => another_func("Callback"));

const mul = (num1, num2) => num1 * num2;

const printMul = (num1, num2, mul) => {
    console.log("The multiplication is - ", mul(num1, num2));
};

printMul(2, 4, mul);

// Curring function
// Multiple parameters
// Function Overloading
// Closures
// Closure Overloading
// SetTimeout
// Classes and Methods
//// Spread Operators
//// Array Methods: map, reduce, slice, filter

var arr = [1, 2, 3, 4];
delete arr[0];
console.log(arr);
arr[0] = 1;
console.log(arr);
console.log(arr.keys());

// Multiple parameters
const func = (...params) => {
    console.log(params[0]);
    console.log(params[1]);
    console.log(params[2]);

    console.log("Number of parameters:", params.length);
};

func("hi", 12, { a: 1, b: 2 });

// Higher order functions
function higherOrderFunction(callback, params) {
    callback(params);
}

const newfunc = (params) => {
    setTimeout(() => {
        console.log(params);
    }, 8000);
    console.log("1");
};

newfunc("hello world");

let app = "app";
{
    app = "new app";
    {
        console.log(app);
    }
}

function outerFunction() {
    var outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // inner function has access to outerVar
    }

    return innerFunction; // Return the inner function
}

var closure = outerFunction(); // outerFunction has finished executing, but innerFunction still holds reference to outerVar

closure(); // This will log "I am from outer function"

// Example of a higher-order function that takes a callback function
function doSomethingAsync(callback) {
    setTimeout(function () {
        console.log("Async operation completed.");
    }, 1000);
    callback(); // Call the provided callback function
}

// Callback function to be executed after the async operation
function callbackFunction() {
    console.log("Callback function called.");
}

// Using the higher-order function with a callback
doSomethingAsync(callbackFunction);

function operationA(callback) {
    var time = new Date().getTime();
    setTimeout(function () {
        console.log("Operation A completed");
        callback(time);
    }, 1000);
}

function operationB(time) {
    var time = time;
    setTimeout(function () {
        console.log("Operation B completed");
        console.log(time);
    }, 5000);
}

operationA(operationB); // This creates a potential deadlock

// Non-curried function that takes two arguments and adds them
function add(a, b) {
    return a + b;
}

// Curried version of the add function
function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}

// Using the curried function
const addFive = curriedAdd(5); // Partial application, fixing the first argument
console.log(addFive(3)); // Output: 8
console.log(addFive(7)); // Output: 12

// Infinite curring
function sum(a) {
    return function (b) {
        if (!b) {
            return a;
        }
        return sum(a + b);
    };
}

console.log(sum(1)(2)(3)());
