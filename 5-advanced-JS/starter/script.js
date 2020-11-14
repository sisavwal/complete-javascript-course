//? OBJECT CREATION

//* var john = {
//*     name: 'john',
//*     yearOfBirth: 1998,
//*     job: 'teacher'
//* };

//? FUNCTION CONSTRUTIOR

//* var Person = function(name, yearOfBirth, job) {
//*    this.name = name
//*    this.yearOfBirth = yearOfBirth
//*    this.job = job
//*}

//* Person.prototype.calculateAge = function() {
//*     console.log(2019 - this.yearOfBirth)
//* }

//?PROTOTYPING ADD PROPERTIES / METHODS TO ALL OBJECTS ASSOCIATED WITH A CONSTRUCTOR
//?USE PROTOTYPING TO REDUCE MEMORY USAGE AS THE METHOD OR PROPERY IS STORED IN THE PROTOTYPE OF THE OBJECT
//?TYPICALLY USE WITH METHODS RATHER THAN PROPERTIES

//!INHERITANCE:
//?TH ORDER IN WHICH js LOOKS FOR PROPERTIES / METHODS IN OBJECTS

//!   OBJECT ==>  CONSTRUCTOR ==>  OBJECT(OBJECT)

//* Person.prototype.lastname = "Walker"

//* var john = new Person("john", 1990, "teacher")
//* var simon = new Person("Simon", 1969, "IT consultant")
//* var jane = new Person("Jane", 1969, "designer")
//* var mark = new Person("Mark", 1948, "retired")(
//*     //* simon.calculateAge();
//* console.log(simon.lastname);
//* john.calculateAge();
//* console.log(john.lastname);
//* jane.calculateAge();
//* console.log(jane.lastname);
//* mark.calculateAge();
//* console.log(mark.lastname);

//* var Bowler = function(name,overs,maidens,runs,wickets) {
//*     this.name = name,
//*     this.overs = overs,
//*     this.maidens = maidens,
//*     this.runs = runs,
//*     this.wickets = wickets,
//*     this.average = function() {
//*         console.log(this.runs / this.wickets);
//*     }
//* };

//* //* Bowler.prototype.average = function () {
//* //*     console.log()
//* //* };

//* var bowler1 = new Bowler('Simon Walker',50,8,150,11);
//* var bowler2 = new Bowler('Dave Jowett',45,6,170,9);
//* bowler1.average();

//? METHOD: <object>.create

//* var personProto = {
//*     calculateAge: function() {
//*         console.log(2019 - this.yearOfBirth);
//*     }
//* }

//?ONE METHOD

//* var john = Object.create(personProto);
//* john.name = 'John';
//* john.yearOfBirth = 1990;
//* john.job = 'teacher';

//? ALTERNATIVE METHOD
//* var jane = Object.create(personProto,
//*     {
//*         name: {value: 'Jane'},
//*         yearOfBirth: {value: 1969},
//*         job: {value: 'designer'}
//*     });

//? PRIMATIVES Vs OBJECTS
//?

//* var a =23;
//* var b = a;
//* a = 46;
//* console.log(a);
//* console.log(b);

//?BECAUSE VARIABLE b IS A PRIMITIVE THE VALUE IS STORED

var obj1 = {
    name: "john",
    age: 26
};
var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//?BECAUSE obj1 IS AN OBJECT AND obj2 POINTS TO obj1, THE AGE IS THE SAME.

//?FIRST CLASS FUNCTIONS
//?CALLBACK FUNCTIONS

//* var years = [1990, 1965, 1937, 2005, 1998];

//* function arrayCalc(arr, fn) {
//*     var arrRes = [];
//*     for (var i = 0; i < arr.length; i++) {
//*         arrRes.push(fn(arr[i]));
//*     }
//* return arrRes;
//* }

//?USED FOR CALLBACK
//* function calcAge(el) {
//*     return 2019 - el;
//* }

//?USED FOR CALLBACK
//* function isFullAge(el) {
//*     return el <= 18;
//* }
//?USED FOR CALLBACK
//* function maxHeartRate(el) {
//*     if(el >= 18 && el <=81) {
//*     return Math.round(286.9 - (0.67 * el));
//*     } else {
//*         return -1;
//*     }

//* }

//! NOTE THE LACK OF BRACKETS FOR THE fn PARAMETER ALTHOUGH IT IS A FUNCTION.
//* var ages = arrayCalc(years, calcAge);
//* var fullAges =arrayCalc(ages, isFullAge);
//* var heartRate = arrayCalc(ages, maxHeartRate);

//* console.log(ages);
//* console.log(fullAges);
//* console.log(heartRate);

//? Functions returning Functions

//* function interviewQuestions(job) {
//*     if (job === 'designer') {
//*         return function(name) {
//*             console.log(name + ', can you please explin what UX design is?');
//*         }
//*     } else if (job === 'teacher') {
//*         return function(name) {
//*             console.log('What subject do you teach, ' + name + '?');
//*     }
//* } else {
//*     return function(name) {
//*         console.log(name + ' What the fuck are you doing here?');
//*     }
//* }
//* }

//* var teacherQuestion = interviewQuestions('teacher');
//* var engineerQuestion = interviewQuestions('engineer')

//* engineerQuestion('john');

//* teacherQuestion('john');

//* interviewQuestions('teacher')('fred');

//?Lecture: IIFE
//?IMMEDIATLY INVOKED FUNCTIONS EXPRESSIONS

//?RETURNS THE RESULT OF THE FUNCTION WHILST HIDING ANY VARIABLE. CAN ONLY BE USED ONCE
//?ADDS DATA PRIVACY

//* ;(function() {
//*     var score = Math.random() * 10
//*     console.log(score <= 5)
//* })()

//?CLOSURES

//* function retirement(retirementAge) {
//*     var a = " Years left to retirement."
//*     return function(yearOfBirth) {
//*         var age = 2019 - yearOfBirth
//*         console.log(retirementAge - age + a)
//*     }
//* }

//* var retirementUK = retirement(67)
//* retirementUK(1969)
//* var retirementDE = retirement(65)
//* retirementDE(1969)

//* retirement(67)(1969)

//* function interviewQuestions(job) {
//*     return function(name) {
//*         if (job === 'designer') {
//*             console.log(name + ', can you please explin what UX design is?');
// *        } else if (job === 'teacher') {
// *            console.log('What subject do you teach, ' + name + '?');
// *        } else {
// *            console.log(name + ' What the fuck are you doing here?');
// *        }
// *    };
// *}

// interviewQuestions('teacher')('john');

//! LECTURE: Bind, call and apply
//? ALLOWS FUNCTIONS TO BE "BOOROWED" FROM EXISTING OBJECTS. THE FIRST ARGUMENT IN THE .call METHOD SETS THE this VALUE
//? APPLY ALLOWS ARRAYS TO BE USED IN THE SAME WAY

//*
//? .call()
//?Function.call(value of this, arg1, arg2, …)
//*Will execute Function

//? .apply()
//?Function.apply(value of this, [arg1, arg2, ..])
//*Will execute Function

//? .bind()
//?newFunction = Function.bind(value of this, arg1, arg2 …)
//*Will return a new function

//* var john = {
//*     name: 'john',
//*     age: 26,
//*     job: 'teacher',
//*     presentation: function(style, timeOfDay) {
//*         if (style === 'formal') {
//*             console.log(
//*                 'Good ' +
//*                     timeOfDay +
//*                     " Ladies and Gentlemen. I'm " +
//*                     this.name +
//*                     ", I'm " +
//*                     this.age +
//*                     " years old and I'm a " +
//*                     this.job
//*            );
//*        } else if (style === 'friendly') {
//*             console.log(
//*                "Hey, what's up. I'm " +
//*                     this.name +
//*                     ", I'm " +
//*                     this.age +
//*                     " years old and I'm a " +
//*                     this.job
//*             );
//*         }
//*     }
//* };

//* var emily = {
//*     name: 'emily',
//*     age: 30,
//*     job: 'designer'
//* };

//!                     PARM       PARM
//* john.presentation('formal', 'morning');

//!                         THIS     PARM         PARM
//* john.presentation.call(emily, 'friendly', 'afternoon');

//?BIND EFFECTIVLY ALLOW A PRESET VALUE FOR THE this VALUE AND PARAMETERS
//* var johnFriendly = john.presentation.bind(john, 'friendly');

//* johnFriendly('morning');

//* johnFriendly('evening');

//* var emilyFormal = john.presentation.bind(emily, 'formal');

//* emilyFormal('afternoon');

//* var years = [1990, 1965, 1937, 2005, 1998];

//* function arrayCalc(arr, fn) {
//*     var arrRes = [];
//*     for (var i = 0; i < arr.length; i++) {
//*         arrRes.push(fn(arr[i]));
//*     }
//*     return arrRes;
//* }

//* function calcAge(el) {
//*     return 2016 - el;
//* }

//* function isFullAge(limit, el) {
//*     return el <= limit;
//* }

//* var ages = arrayCalc(years, calcAge);

//* var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

//* console.log(fullJapan);
//* console.log(ages);

(function() {
    //*IIFE function

    //*Create the construct for question objects
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    //*Add methods to the question prototype
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log("correct");
            sc = callback(true);
        } else {
            console.log("incorrect");
            sc = callback(false);
        }

        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score) {
        console.log("current score: " + score);
        console.log("-------------------");
    };

    //*create the question objects from the question construct
    var q1 = new Question(
        "Who is the current Prime Minister?",
        ["Boris", "Bercow", "Calamity Corbyn"],
        0
    );

    var q2 = new Question(
        "Who's Queen?",
        ["Victoria", "Lizzy Windsor", "Liz Tudor"],
        1
    );

    var q3 = new Question("Are Wales Shit?", ["yes", "no"], 0);

    var quiz = [q1, q2, q3];
    //*keep score function
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }

    var keepScore = score();
    //*function to invoke the next question
    function nextQuestion() {
        var n = Math.floor(Math.random() * quiz.length);

        quiz[n].displayQuestion();

        var answer = prompt("Select the correct answer!");

        if (answer !== "exit") {
            quiz[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();
