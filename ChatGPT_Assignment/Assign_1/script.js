const butElement = document.getElementById("but");
const unorderedElement = document.getElementById("unorderedList");

butElement.addEventListener("click",onPress);

function onPress(){
    const listElement = document.createElement("li");
    const inputContent = prompt();

    const spanElement = document.createElement("span");
    spanElement.textContent = inputContent;
    listElement.appendChild(spanElement);
    unorderedElement.appendChild(listElement);
}