const itemList = document.getElementById("orderedList");
const buttonElement = document.getElementById("dlt");

buttonElement.addEventListener("click",onDelete);

function onDelete(){
    console.log("delete button clicked");
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach((checkbox,index)=>{
        if(checkbox.checked){
            itemList.removeChild(checkbox.parentElement);
        }
    });
}