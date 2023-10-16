const divElement = document.getElementById("cont");
const buttonElement = document.getElementById("sbut");

buttonElement.addEventListener("click", function(event){
    event.preventDefault();

    const inputElement = document.getElementById("emailInput");
    const inputValue = inputElement.value;
    inputElement.value = "";

    if(!isValidEmail(inputValue)){
        alert("Please Enter a valid email address");
    } else{
        console.log("submitted");
        divElement.textContent = inputValue;
    }
});

function isValidEmail(email) {

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }