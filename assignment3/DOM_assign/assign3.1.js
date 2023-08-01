let c = 4;

let ul = document.querySelectorAll("#un_l");
// console.log(ul[0]);

let li_cont = document.createElement("li");

let txt = document.createTextNode("Item 3");

let cont = li_cont.appendChild(txt);

ul.appendChild(cont);