const onSubmit = () => {

    console.log("Button Pressed");
    const lenVal = parseInt(document.getElementById("len").value);
    console.log(lenVal);
    const breVal = parseInt(document.getElementById("bre").value);
    console.log(breVal);
    const result = document.getElementById("res");

    (function (num1,num2) {
        const area = num1*num2;
        console.log(area);
        result.innerHTML = "Results ="+" "+area;
    })(lenVal,breVal);

    alert("Data Submited !!");
};

const submitButton = document.getElementById("sub");

submitButton.addEventListener("click",onSubmit);