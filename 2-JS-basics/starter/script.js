// var scoreJohn1 = 89,
//     scoreJohn2 = 120,
//     scoreJohn3 = 103,
//     scoreMike1 = 216,
//     scoreMike2 = 94,
//     scoreMike3 = 123,
//     scoreMary1 = 97,
//     scoreMary2 = 134,
//     scoreMary3 = 35;


// var aveJohn = (scoreJohn2 + scoreJohn2 + scoreJohn3) / 3;
// var aveMike = (scoreMike1 + scoreMike2 + scoreMike3) / 3;
// var aveMary = (scoreMary1 + scoreMary2 + scoreMary3) / 3;


// //* if (aveJohn > aveMike) {
// // *    console.log("John's Team Wins");
// //* }
// //*     else if (aveMike > aveJohn) {
// //*         console.log("Mike's Team Wins");
// // *    }
// // *    else {
// // *        console.log("It's a draw!!!");
// //  *   }

// console.log("John: " + aveJohn + " Mike: " + aveMike + " Mary: " + aveMary);

// switch (true) {
//     case (aveJohn > (aveMary && aveMike)):
//         console.log("John's Team Wins");
//         break
//     case (aveMike > (aveMary && aveJohn)):
//         console.log("Mike's Team Wins");
//         break
//     case (aveMary > (aveJohn && aveMike)):
//         console.log("Mary's Team Wins");
//         break
//     default:
//         console.log("It's a 3 way!!");
// }

// function tipCalc(bill) {
//     switch(true){
//         case (bill < 50):
//             return (bill * 0.2);
//         case ((bill > 51) && (bill < 200)):
//             return (bill * 0.15);      
//         case ((bill > 201)):
//             return (bill * 0.15);      
//     }
// }

// var bill = [124, 48, 268];
// var i, tip = new Array, totalBill = new Array;

// for (i = 0; i < bill.length; i++) {
//     tip[i] = tipCalc(bill[i]);
//     totalBill[i] = bill[i] + tip[i];
// }

// var today = new date();



// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age =  2019 - this.yearOfBirth;
//     }
// };

var usr1 = {
    firstName : 'Mark',
    mass: 184,
    height: 1.836,
    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2);
    }
}

var usr2 = {
    firstName : 'John',
    mass: 99,
    height: 1.536,
    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2);
    }
}

usr1.calcBMI();
usr2.calcBMI();

if (usr1.bmi < usr2.bmi) {
    console.log(usr1.firstName + "'s BMI is "+ usr1.bmi + " which is less than " + usr2.firstName + "'s BMI which is " + usr2.bmi);
} else {
    console.log(usr1.fisrtName + "'s BMI is "+ usr1.bmi + " which is greater than " + usr2.FirstName + "'s BMI which is " + usr2.bmi);
}