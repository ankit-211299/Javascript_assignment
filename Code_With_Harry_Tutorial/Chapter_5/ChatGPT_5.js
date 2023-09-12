//Create an array of objects, where each object represents a person with name and age properties.
let persons = [
    {"Person 1" : 32},
    {"Person 2" : 14},
    {"Person 3" : 30},
    {"Person 4" : 29},
    {"Person 5" : 26},
    {"Person 6" : 11}
];
console.log(Object.keys(persons));

//Use the forEach method to print the names of all people in the array.

persons.forEach((person)=>{
    console.log(Object.keys(person).join());
});

//Use the map method to create an array of ages.

let age = persons.map((person,index)=>{
    return person[Object.keys(person)];
});
console.log(age);

//Use the filter method to find people who are at least 18 years old.
let less = persons.filter(person => (person[Object.keys(person).toString()] < 18))
.map((val) => Object.keys(val).join());

console.log("Persons less than 18 - ",less);

//Use the reduce method to calculate the average age of all people in the array.
let avg_age = persons.reduce((sum,age) => {
    return sum+(age[Object.keys(age)]);
},0);
console.log(avg_age/persons.length);