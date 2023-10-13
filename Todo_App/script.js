const orderedListElement = document.getElementById("orderedList");
const inputContentElement = document.getElementById("input_content");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", onSubmit);

function createListItem(inputValue) {
  const listElement = document.createElement("li");

  const spanElement = document.createElement("span");
  spanElement.id = "content";
  spanElement.textContent = inputValue;
  listElement.appendChild(spanElement);

  const removeButton = document.createElement("button");
  removeButton.textContent = "-";
  removeButton.addEventListener("click", () => onRemove(listElement));
  listElement.appendChild(removeButton);

  const editButton = document.createElement("button");
  editButton.id = "edit_button";
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => onEdit(listElement, spanElement));
  listElement.appendChild(editButton);

  return listElement;
}

function onRemove(listItem) {
  orderedListElement.removeChild(listItem);
}

function onEdit(listItem, spanElement) {
  const editInput = document.createElement("input");
  const editSubmit = document.createElement("button");
  editSubmit.textContent = "Submit";

  editSubmit.addEventListener("click", () => {
    const editedContent = editInput.value;
    if (editedContent === "") {
      listItem.removeChild(editInput);
      listItem.removeChild(editSubmit);
    } else {
      spanElement.textContent = editedContent;
      listItem.removeChild(editInput);
      listItem.removeChild(editSubmit);
    }
  });

  listItem.appendChild(editInput);
  listItem.appendChild(editSubmit);
}

function onSubmit(event) {
  event.preventDefault();
  const inputValue = inputContentElement.value;
  inputContentElement.value = "";

  if(inputValue===""){
  } else {
    const listItem = createListItem(inputValue);
    orderedListElement.appendChild(listItem);
  }
}
