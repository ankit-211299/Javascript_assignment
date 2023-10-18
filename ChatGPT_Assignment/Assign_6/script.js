const marksInput = document.getElementById("marks_input");
const buttonElement = document.getElementById("sbut");

buttonElement.addEventListener("click",function(event){
    event.preventDefault();
    const marksValue = marksInput.value;
    let grade = "";

    if(marksValue>90 && marksValue<=100){
        grade = "A";
    } else if(marksValue>100){
        console.log("!!Invalid Marks!!");
        grade="FALSE";
    } else if(marksValue>80 && marksValue<=89){
        grade = "B";
    } else if(marksValue>70 && marksValue<=79){
        grade = "C";
    } else if(marksValue>60 && marksValue<=69){
        grade = "D";
    } else{
        grade = "F";
    }
    const divElement = document.getElementById("grade_display");
    divElement.innerHTML = "Grade : "+grade;
});