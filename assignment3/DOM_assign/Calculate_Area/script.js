// Write a JavaScript program that calculates the area of a rectangle when
// the user inputs the width and height into two input fields and clicks a
// button.

const onSubmit = () => {

    console.log("Button Pressed");
    const lenVal = parseInt(document.getElementById("len").value);
    console.log(lenVal);
    const breVal = parseInt(document.getElementById("bre").value);
    console.log(breVal);
    const result = document.getElementById("res");

    (function (num1,num2) {
        const sum = num1+num2;
        console.log(sum);
        result.innerHTML = "Results ="+" "+sum;
    })(lenVal,breVal);
};

const submitButton = document.getElementById("sub");

submitButton.addEventListener("click",onSubmit);