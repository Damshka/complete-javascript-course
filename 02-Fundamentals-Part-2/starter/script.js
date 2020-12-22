"use strict";

// const age1 = birthYear => 2020 - birthYear;

// const calcAge = age1(1992)
// console.log(calcAge)

// const retirementYear = (birthYear, firstName) => {
//   const age = 2020 - birthYear;
//   const retirement = 65 - age;
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// const age2 = retirementYear(1992, 'Daria')
// console.log(age2)

// const countAverage = (score1, score2, score3) => (score1 + score2 + score3)/2;

// const dolphinsAverage = countAverage(85, 54, 41);
// const koalasAverage = countAverage(23, 34, 27);

// console.log(dolphinsAverage, koalasAverage);

// function checkWinner(dolphinsScore, koalasScore) {
//   if(dolphinsScore >= 2 * koalasScore) {
//     console.log(`Dolphins is the winner with the score of ${dolphinsScore} (${dolphinsScore} vs ${koalasScore})`);
//   } else if (koalasScore >= 2 * dolphinsScore) {
//     console.log(`Koalas is the winner with the score of ${koalasScore} (${koalasScore} vs ${dolphinsScore})`);
//   } else {
//     console.log('There is no winner');
//   }
// }

// checkWinner(dolphinsAverage, koalasAverage);

// const bill = 100;
// function countTips(bill){
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// };

// const bills = [125, 555, 44];
// const tips =  [countTips(bills[0]), countTips(bills[1]), countTips(bills[bills.length - 1])];
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[bills.length - 1]+tips[tips.length - 1]];
// console.log(bills, tips, total);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Winchester',
//   friends: ['Sam', 'John', 'Greg'],
//   birthYear: 1991,
//   job: 'teacher',
//   hasDriversLicense: true,
//   getAge: function() {
//     this.age = 2020 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     const driverLicenseString = this.hasDriversLicense ? 'has' : 'has not'
//     this.summary = `${this.firstName} is a ${this.age}-years old ${this.job} and he ${driverLicenseString} drivers license!`;
//     return this.summary;
//   }
// };

// jonas.getAge();
// const summary = jonas.getSummary();
// console.log(summary);

// const mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   height: 1.69,
//   mass: 78,
//   countBMI: function() {
//     return this.mass/this.height**2
//   }
// };

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   height: 1.95,
//   mass: 92,
//   countBMI: function() {
//     return this.mass/this.height**2
//   }
// }

// if(mark.countBMI() > john.countBMI()) {
//   console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.countBMI()}) is higher than ${john.firstName} ${john.lastName}'s (${john.countBMI()})`);
// } else if(mark.countBMI() < john.countBMI()){
//   console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.countBMI()}) is lower than ${john.firstName} ${john.lastName}'s (${john.countBMI()})`);
// }

// const bills = [150, 15, 68, 90, 132, 556, 40, 89, 9, 100];
// const tips = [];
// const totals = [];

// function countTips(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = countTips(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// function calcAverage(arr) {
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     average += arr[i];
//   }
//   return (average = average / arr.length);
// }

// console.log(tips);
// console.log(totals);
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));
// console.log(calcAverage(bills));

// function getReversedData(data) {
//   if (
//     typeof data === "string" ||
//     typeof data === "number" ||
//     Array.isArray(data)
//   ) {
//     let start_data = data;
//     if (!Array.isArray(data)) {
//       start_data = data.toString();
//       start_data = start_data.split("");
//       console.log(start_data);
//     }
//     let res = start_data.reverse();
//     if (!Array.isArray(data)) {
//       res = res.join("");
//     }
//     if (typeof(data)==="number") {
//       res = parseInt(res, 10); 
//     }
//     console.log(res);
//     return res;
//   }
// }

// getReversedData("asam");
// getReversedData(45);
// getReversedData([1, 2, 3]);

