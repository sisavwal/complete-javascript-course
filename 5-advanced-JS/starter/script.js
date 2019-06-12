// function constructor

// var john = {
//     name: 'john',
//     yearOfBirth: 1998,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//         console.log(2019 - this.yearOfBirth)
//     };

// Person.prototype.lastname = 'Walker';

// var john = new Person('john',1990,'teacher');
// var simon = new Person('Simon',1969,'IT consultant');
// var jane = new Person('Jane',1969,'designer');
// var mark = new Person('Mark',1948,'retired');


// simon.calculateAge();
// console.log(simon.lastname);
// john.calculateAge();
// console.log(john.lastname);
// jane.calculateAge();
// console.log(jane.lastname);
// mark.calculateAge();
// console.log(mark.lastname);

// var Bowler = function(name,overs,maidens,runs,wickets) {
//     this.name = name,
//     this.overs = overs,
//     this.maidens = maidens,
//     this.runs = runs,
//     this.wickets = wickets,
//     this.average = function() {
//         console.log(this.runs / this.wickets);
//     }
// };

// // Bowler.prototype.average = function () {
// //     console.log()
// // };

// var bowler1 = new Bowler('Simon Walker',50,8,150,11);
// var bowler2 = new Bowler('Dave Jowett',45,6,170,9);
// bowler1.average();

// object Create

// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//     {
//         name: {value: 'Jane'},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}
//     });

// Primatives vs Objects

var a =23;
var b = a;
a = 46; 
console.log(a);
console.log(b);




