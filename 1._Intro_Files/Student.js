// Class files are written with a capital letter

class Student {
    // Fields
    // classes = [];
    constructor(name) {
        this.name = name;
        this.classes = [];
    }

    addClass(studentClass) {
        this.classes.push(studentClass);
    }
}

module.exports = Student;

// Create a new object in the class
// const student = new Student('Shay');

// student.addClass('React');
// student.addClass('Svelte');
// console.log(student.classes);