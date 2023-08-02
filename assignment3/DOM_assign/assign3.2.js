// Write a JS function to change the font size,bg-color, and font-family for the
// paragraph in the HTML snippet below on clicking the button.

const styleFunc = ()=>{
    const divID = document.getElementById("para");
    const pID = document.getElementById("text");

    divID.style.backgroundColor = "red";
    pID.style.fontSize = "x-large";
    pID.style.fontFamily= "Times New Roman"
};

const styleButton = document.getElementById("jsstyle");
styleButton.addEventListener("click",styleFunc);