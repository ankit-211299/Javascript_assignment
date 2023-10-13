const buttonElement = document.getElementById("but");
buttonElement.addEventListener("click",onSubmit);

function onSubmit(){
    const hElement = document.getElementById("head_tag");
    hElement.textContent = "Button Pressed";
}