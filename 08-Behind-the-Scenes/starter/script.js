'use strict';

// function calcAge(birthYear) {
//     const age = 2020 - birthYear;
//     console.log(firstName);

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1991 && birthYear <= 1996) {
//             var millenial = true;
//             const str = `Oh, and you're a millenial, ${firstName}!`;
//             console.log(str);

//             function add(a, b) {
//                 return a+b;
//             }
//         }
//         // console.log(str);
//         console.log(millenial);
//         // add(5, 6);
//     }
//     printAge();
//     return age;
// }

const firstName = 'Daria';
// calcAge(1992);

// Hoisting with variables 
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Daria';
let job = 'developer';
const year = 1992;

// Hoisiting with functions

console.log(addDecl(2,3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b) {
    return a+b;
}

const addExp = function(a, b){
    return a+b;
}

const addArrow = (a,b) => a+b;

var x = 1;
let y = 2;
const z = 3;

console.log(this);

const calcAge = function(birthYear) {
    console.log(2020 - birthYear);
    console.log(this);
}

calcAge(1992);

const calcAgeArrow = birthYear => {
    console.log(2020 - birthYear);
    console.log(this);
}

calcAgeArrow(1992);

let lastName = 'Wills';
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Wills',
    age: 27
};

const marriedJessica = jessica;

console.log(jessica, marriedJessica);

marriedJessica.lastName = "Davis";

console.log(jessica, marriedJessica);

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Wills',
    age: 27,
    family: ["Alice", "Bob"]
};

const marriedJessica2 = Object.assign({}, jessica2);
const marriedJessica3 = {
    ...jessica2,
    lastName: "Mitchel"
};
marriedJessica3.family.push('Steven');
marriedJessica2.lastName = "Davis";
console.log(jessica2, marriedJessica2, marriedJessica3);