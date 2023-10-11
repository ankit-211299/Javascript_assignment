// Write a regex pattern to match valid email addresses. 
// Valid email addresses typically follow the 
// format "username@domain.com."

const pattern = /\d{3}-\d{2}-\d{4}/;
const ssn = "Your SSN is 123-45-6789";
console.log(pattern.test(ssn));



// let email = "ankitgupta211299@gmail.com";
// console.log(email);

// let checkEmail = / [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ /;
// console.log(checkEmail.test(email));