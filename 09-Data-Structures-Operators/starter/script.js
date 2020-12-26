'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! It contains ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    and it will be delieverd to ${address} at ${time}`);
  },
  // orderDelivery: function(obj){
  //   console.log(obj);
  // },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`This is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// SPREAD & REST

const arr = [1,2,3];
const newArray = [0,-1,...arr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const menu = [...restaurant.mainMenu];
console.log(menu);

// join arrays
const bigMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(bigMenu);

// spread the string
let str = 'Daria';
const letters = [...str, "", "K"];
console.log(letters);
console.log(...str);

// const ingridients = [prompt("Let's make a pasta! Ingridient 1?"), prompt('Ingridient 2?'), prompt('Ingridient 3?')];
// console.log(ingridients);

// restaurant.orderPasta(...ingridients);

// Objects

const newReastaurant = {foundedIn: 1998, ...restaurant, founder: 'Monica'};
console.log(newReastaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Monicas';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// // Destructuring Objects
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables

// let a = 111;
// let b = 99;
// const obj = {a:23, b:7, c:0};
// ({a,b} = obj);
// console.log(a,b);

// // nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Paul Kerese 14',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Paul Kerese 14',
//   starterIndex: 2
// });

// // Destructuring arrays
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);

// const [first,second] = restaurant.categories;
// console.log(first);
// console.log(second);

// let [main, , secondary] = restaurant.categories;
// console.log(main);
// console.log(secondary);

// // switching
// [main, secondary] = [secondary, main];
// console.log(main);
// console.log(secondary);

// // destructuring with function call
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 5, [5,4]];
// // const [i, , j] = nested;
// // console.log(i,j);
// const [i, , [j,k]] = nested;
// console.log(i, j, k);

// // default values
// const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r)