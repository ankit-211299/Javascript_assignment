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
// Q1. Find the Total salary of all the employees.
// Q2. Find the name of employees who are working for the company more than 3 years.
// Q3. Find the name of employees and their salary who join the company last year.
// Q4. Find the the employee who have the highest salary
// Q5. Find the employee who's age lies between 20 to 25 years.
//
//
// Solution :
