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

// var a =23;
// var b = a;
// a = 46; 
// console.log(a);
// console.log(b);


// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
// return arrRes;
// }

// function calcAge(el) {
//     return 2019 - el;
// }


// function isFullAge(el) {
//     return el <= 18;
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <=81) {
//     return Math.round(286.9 - (0.67 * el));    
//     } else {
//         return -1;
//     }
    
// }


// var ages = arrayCalc(years, calcAge);
// var fullAges =arrayCalc(ages, isFullAge);
// var heartRate = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(heartRate);

// Functions returning Functions

function interviewQuestions(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explin what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?'); 
    }
} else {
    return function(name) {
        console.log(name + ' What the fuck are you doing here?');
    }
}
}

var teacherQuestion = interviewQuestions('teacher');
var engineerQuestion = interviewQuestions('engineer')

engineerQuestion('john');

teacherQuestion('john');

interviewQuestions('teacher')('fred');



