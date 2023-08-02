// Write a JavaScript program that adds a new item to the list whenever
// a user inputs a text into the input field and clicks the button.


let c = 3;

const addItem = () => {
    console.log("add button clicked");

    const ul = document.getElementById("un_l");
    const list = document.createElement("li");

    list.innerHTML = "Item"+" "+(++c);

    ul.appendChild(list);
}

const removeItem = () => {
    console.log("remove button clicked");

    const ul_li = document.getElementById("un_l");
    const list = ul_li.children[c-1];
    
    if(list){

        ul_li.removeChild(list);
        c=c-1;
    }
    else{
        console.log("Empty List");
    }
};


const addButton = document.getElementById("add");
addButton.addEventListener("click",addItem);

const removeButton = document.getElementById("rem");
removeButton.addEventListener("click",removeItem);