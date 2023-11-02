const str = document.getElementById("str");
const sbut = document.getElementById("submit");
const resElement = document.getElementById("results");

sbut.addEventListener("click",function(event){
    event.preventDefault();
    const s = str.value;
    solutionString(s);
});

function solutionString(s){
    const sArray = s.split(" ");
    // console.log(sArray);
    
}