const faker = require('faker');
const Student = require('../Student.js'); 

//console.log(faker.name.firstName());

// for (let i = 0; i < 10; i++) {
//     console.log(faker.name.firstName() + ' ' + faker.name.lastName());
// } 

let students = [];

for (let i = 0; i < 10; i++) {
    const student = new Student(faker.name.findName());
    students.push(student);
}

console.log(students);