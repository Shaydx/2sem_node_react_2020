const validator = require('validator');

let email = validator.isEmail('foo@bar.com'); //=> true

console.log(email);