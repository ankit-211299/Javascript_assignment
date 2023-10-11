document.getElementById("submit").addEventListener("click", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const inputValue = document.getElementById("input_content").value;
//   console.log(inputValue);
  document.getElementById("input_content").value = "";

  const orderedListElement = document.getElementById("orderedList");

  const listElement = document.createElement("li");
  orderedListElement.appendChild(listElement);

  const spanElement = document.createElement("span");
  spanElement.id = "content";
  spanElement.textContent = inputValue;
  listElement.appendChild(spanElement);

  const removeButton = document.createElement("button");
  removeButton.textContent = "-";
  listElement.appendChild(removeButton);
  removeButton.addEventListener("click",onRemove);

  function onRemove(event){
    console.log("remove",event);
    orderedListElement.removeChild(listElement);
  }
}