// DO NOT EDIT THIS {
const emp = [];

function getRandomDate(start, end) {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const randomTimestamp = Math.random() * (endDate - startDate) + startDate;
    return new Date(randomTimestamp).toISOString().split("T")[0];
}

for (let i = 0; i < 10; i++) {
    const employee = {
        name: `Employee ${i + 1}`,
        age: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
        salary: Math.floor(Math.random() * (80000 - 20000 + 1)) + 20000,
        date_of_joining: getRandomDate("2010-01-01", "2023-08-01"),
    };
    emp.push(employee);
}
// }

// Given an array of employee:
// [
//     {
//       name: 'Employee 1',
//       age: 38,
//       salary: 42687,
//       date_of_joining: '2019-06-21'
//     },
//     {
//       name: 'Employee 2',
//       age: 38,
//       salary: 34596,
//       date_of_joining: '2012-08-16'
//     },
//     .
//     .
//     .
//     .
// ]
//

console.log(emp);
// Q1. Find the Total salary of all the employees.
//A1
const total_salary = emp.reduce((total,value) => {
    return (total + value.salary);
},0);

console.log("Total Salaray = ",total_salary);

// Q2. Find the name of employees who are working for the company more than 3 years.
//A2.1

// const emp_3yrs = emp.filter((value) => {

//     const diff = new Date().getFullYear() - new Date(value.date_of_joining).getFullYear();
//     return (diff > 3);
// }).map((val) => val.name);
// console.log(emp_3yrs);

//A2.2

const emp_3yrs2 = emp.reduce((newArr,value) => {
    const diff = new Date().getFullYear() - new Date(value.date_of_joining).getFullYear();
    if (diff > 3){
        return [...newArr, value.name]
    }
    return newArr;
},[]);
console.log("Employee joined more than 3 years",emp_3yrs2);

// Q3. Find the name of employees and their salary who join the company last year.
//A3

const last_year = (new Date().getFullYear())-1;
const last_year_emp = emp.reduce((newArr,value) => {
    const emp_joining_year = new Date(value.date_of_joining).getFullYear();
    if(emp_joining_year === last_year){
        return [...newArr,value.name];
    }
    return newArr;
},[]);

console.log("Employee Joined Last Year - ",last_year_emp);

// Q4. Find the the employee who have the highest salary
//A4

const highest_salary = emp.reduce((high,value) => {

    if(Object.keys(high) == 0){
        return {...value};
    }

    if(high.salary<value.salary){
        return {...value};
    }
    return high;
},{});
console.log("Employee with highest salary is -",highest_salary.name);

// Q5. Find the employee who's age lies between 20 to 25 years.
//A5
const emp_age = emp.reduce((newArr,value) => {

    if(value.age>20 && value.age<25){
        return [...newArr, value.name];
    }
    return newArr;
},[]);
console.log("Employe's Age between 20 and 25 are - ", emp_age);