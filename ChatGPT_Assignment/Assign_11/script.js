const nameInputElement = document.getElementById("nameInput");
const submitButtonElement = document.getElementById("sbut");
const ageInputElement = document.getElementById("ageInput");
const tableElement = document.getElementById("tableElement");

submitButtonElement.addEventListener("click",function(event){
    event.preventDefault();

    const name_input = nameInputElement.value;
    const age_input = ageInputElement.value;

    editTable(name_input,age_input);

    clearInputSpace();
});

function clearInputSpace(){
    nameInputElement.value = "";
    ageInputElement.value = "";
}

function editTable(name,age){
    const trElement = document.createElement("tr");
    const tdNameElement = document.createElement("td");
    const tdAgeElement = document.createElement("td");

    tdNameElement.innerHTML = name;
    tdAgeElement.innerHTML = age;

    trElement.appendChild(tdNameElement);
    trElement.appendChild(tdAgeElement);

    tableElement.appendChild(trElement);
}

//Selection Code
const selectAllElement = document.getElementById("selectAll");
const checkBoxElements = document.querySelectorAll(".check_box");

selectAllElement.addEventListener("change",function(event){
    if(selectAllElement.checked === true){
        checkBoxElements.forEach((checkBoxElement)=>{
            checkBoxElement.checked = true;
        });
    }else{
        checkBoxElements.forEach((checkBoxElement)=>{
            checkBoxElement.checked = false;
        });
    }
});