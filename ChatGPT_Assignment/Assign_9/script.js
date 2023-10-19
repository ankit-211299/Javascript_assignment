const number = Math.floor(Math.random() * 90) + 10;
let c = 0;

const inputElement = document.getElementById("numInput");
const buttonElement = document.getElementById("sbut");
const inputDisplay = document.getElementById("inputDisplay");
const attemptsDisplay = document.getElementById("attempts");
const predictionDisplay = document.getElementById("prediction");

buttonElement.addEventListener("click",function(event){
    event.preventDefault();
    c=c+1;
    const inputValue = inputElement.value;
    inputDisplay.innerHTML = "Your Input: "+inputValue;
    attemptsDisplay.innerHTML = "Attempts: "+c;

    if(inputValue<number){
        predictionDisplay.innerHTML = "Your Prediction: LOW";
    } else if(number == inputValue){
        predictionDisplay.innerHTML = "Your Prediction: Accurate!! Wallah";
    } else{
        predictionDisplay.innerHTML = "Your PRediction: HIGH";
    }

    inputElement.value = "";
});