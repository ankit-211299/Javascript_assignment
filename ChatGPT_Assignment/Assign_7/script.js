const students = [];

const studentInputElement = document.getElementById("studentInput");
const marksInputElement = document.getElementById("numInput");
const buttonElement = document.getElementById("sbut");
const avgElement = document.getElementById("average");
const highElement = document.getElementById("highest");
const lowElement = document.getElementById("lowest");

buttonElement.addEventListener("click",function(event){
    event.preventDefault();

    const studentDetail = [];
    studentDetail[0] = studentInputElement.value;
    studentDetail[1] = Number.parseInt(marksInputElement.value);

    students.push(studentDetail);

    let avg = students.reduce((avg,student)=>{
        return avg+student[1];
    },0);

    let high = students.reduce((max,student)=>{
        if(max<student[1]){
            return student[1];
        }
        return max;
    },0);

    let low = students.reduce((min,student)=>{
        if(min<student[1]){
            return student[1];
        }
        return min;
    },0);
    
    lowElement.innerHTML = "Lowest = "+(low);
    highElement.innerHTML = "Highest = "+(high);
    avgElement.innerHTML = "Average = "+(avg/students.length);

    studentInputElement.value = "";
    marksInputElement.value = "";
});