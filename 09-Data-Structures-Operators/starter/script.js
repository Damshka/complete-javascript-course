'use strict';

const openingHours = {
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
};

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
//     console.log(`Order received! It contains ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
//     and it will be delieverd to ${address} at ${time}`);
//   },
//   // orderDelivery: function(obj){
//   //   console.log(obj);
//   // },

//   orderPasta: function(ing1, ing2, ing3) {
//     console.log(`This is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngridient, ...others) {
//     console.log(mainIngridient);
//     console.log(others);
//   },

//   openingHours,
// };

// console.log(restaurant);

// // SPREAD & REST

// const arr = [1,2,3];
// const newArray = [0,-1,...arr];
// console.log(newArray);
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const menu = [...restaurant.mainMenu];
// console.log(menu);

// // join arrays
// const bigMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(bigMenu);

// // for ..of loop
// for (const item of bigMenu) console.log(item);

// // old-school way
// for (const item of bigMenu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`)
// }

// // using destructuring
// for (const [i, el] of bigMenu.entries()) {
//   // console.log(item);
//   console.log(`${i + 1}: ${el}`)
// }

// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // spread the string
// let str = 'Daria';
// const letters = [...str, "", "K"];
// console.log(letters);
// console.log(...str);

// // const ingridients = [prompt("Let's make a pasta! Ingridient 1?"), prompt('Ingridient 2?'), prompt('Ingridient 3?')];
// // console.log(ingridients);

// // restaurant.orderPasta(...ingridients);

// // Objects

// const newReastaurant = {foundedIn: 1998, ...restaurant, founder: 'Monica'};
// console.log(newReastaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Monicas';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // // 1) Destructuring with REST
// // rest operator - to pack element into the array

// const arrayRestExample = [1,2, ...[3, 4]];
// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, , risoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risoto, otherFood);

// // Objects

// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

// // // 2) Functions with REST
// const add = function(...numbers){
//   console.log(numbers);
//   let sum = 0;
//   numbers.forEach(item => {
//     sum +=item;
//   })
//   return sum;
// }
// console.log(add(2,3));
// console.log(add(5,6,7,8));

// const x = [23,5,7];
// console.log(add(...x));

// restaurant.orderPizza('Mozzarella', 'Olives', 'Feta', 'Tomatoes');

// // // Destructuring Objects
// // const {name, openingHours, categories} = restaurant;
// // console.log(name, openingHours, categories);

// // const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// // console.log(restaurantName, hours, tags);

// // const {menu = [], starterMenu: starters = []} = restaurant;
// // console.log(menu, starters);

// // // Mutating variables

// // let a = 111;
// // let b = 99;
// // const obj = {a:23, b:7, c:0};
// // ({a,b} = obj);
// // console.log(a,b);

// // // nested objects
// // const {fri: {open: o, close: c}} = openingHours;
// // console.log(o, c);

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Paul Kerese 14',
// //   mainIndex: 2,
// //   starterIndex: 2
// // });

// // restaurant.orderDelivery({
// //   address: 'Paul Kerese 14',
// //   starterIndex: 2
// // });

// // // Destructuring arrays
// // const arr = [2,3,4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x,y,z] = arr;
// // console.log(x,y,z);

// // const [first,second] = restaurant.categories;
// // console.log(first);
// // console.log(second);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main);
// // console.log(secondary);

// // // switching
// // [main, secondary] = [secondary, main];
// // console.log(main);
// // console.log(secondary);

// // // destructuring with function call
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // // nested destructuring
// // const nested = [2, 5, [5,4]];
// // // const [i, , j] = nested;
// // // console.log(i,j);
// // const [i, , [j,k]] = nested;
// // console.log(i, j, k);

// // // default values
// // const [p=1,q=1,r=1] = [8,9];
// // console.log(p,q,r)

// // LOGICAL OPERATORS
// // OR - returnd first truthy value!
// console.log('------OR------');
// console.log('' || false);
// console.log(3 || 'Daria');
// console.log(undefined || null);
// console.log('Daria' || null);
// console.log('Daria' || null || 3 || '');

// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 14;
// console.log(guests1);
// console.log(guests2);

// console.log('------AND------');
// console.log('' && false);
// console.log(3 && 'Daria');
// console.log(undefined && null);
// console.log('Daria' && null);
// console.log('Daria' && null && 3 && '');

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // Nullish Coalcing operator - ES2020

// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// Challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);
// [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // const team1 = game.odds.team1;
// // const team2 = game.odds.team2;
// // const draw = game.odds.x;
// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);


// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals('Lewandowski', 'Gnarby');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// console.log(game.scored);

// for(const [i, player] of game.scored.entries()){
//    console.log(`Goal ${i+1}: ${player}`);
// }

// let average = 0;

// for (const odd of Object.values(game.odds)){
//   average += odd;
// }

// average /= Object.values(game.odds).length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)){
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamString} ${odd}`);
// }

// SETS

// const orders = new Set(['pasta', 'pizza', 'pizza', 'risotto', 'pasta', 'pizza']);
// console.log(orders);
// console.log(orders.size);
// console.log(orders.has('pasta'));
// console.log(orders.has('bread'));
// console.log(new Set('Daria'));
// orders.add('garlic bread');
// orders.add('garlic bread');
// console.log(orders);
// orders.delete('pizza');
// console.log(orders);

// for (const order of orders){
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
// // const staffUnique = Array.from(new Set(staff));
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('DariaKozhevnikova').size);

// // MAPS

// const rest = new Map();
// rest.set('name', 'Italiano');
// rest.set(1, 'Roma, Italy');
// rest.set(2, 'Lisbon, Portugal');


// rest
//   .set('categoris', ['Italian', 'Organic', 'Vegeterain'])
//   .set('open', 11)
//   .set('close', 22)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(')

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);
// console.log(rest.size);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct :)'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// // converting obj to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);


// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question){
//   if(typeof(key)=== 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// // question.get('correct') === answer ? console.log(question.get(true)) : console.log(question.get(false));


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
console.log(gameEvents.get(64));
gameEvents.delete(64);
console.log(gameEvents);


for (const [key, value] of gameEvents) {
  const half = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half}: ${key} minute: ${value}`); 
}

console.log(`An event happened in average every ${90/gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened in average every ${time/gameEvents.size} minutes`);