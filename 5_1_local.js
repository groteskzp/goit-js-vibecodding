// function calculateTotalPrice(orderedItems) {
    // let totalPrice = 0;
// 
    // orderedItems.forEach(function (price) {
        // totalPrice += price;
    // })
    // return totalPrice;
// }
// function filterArray(numbers, value) {
    // arraySumary = [];
    // numbers.forEach(function (val) {
        // if (val > value) {
            // arraySumary.push(val);
        // }
    // })
//   return arraySumary;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38) ); //ертає [41, 76]
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //п);овертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));//повертає [5]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //поверта);є [24, 41, 76]

// const calculateTotalPrice = (orderedItems) =>{
//   let totalPrice = 0;
// 
    // orderedItems.forEach(item =>  totalPrice += item );
// 
//   return totalPrice;
// }
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
    // // numbers.forEach((number) => { if (number > value) { filteredNumbers.push(number) } });
//   return filteredNumbers;
// }
// 
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38) ); //ертає [41, 76]
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //п);овертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));//повертає [5]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //поверта);є [24, 41, 76]
// 
// function changeEven(numbers, value) {
//   let numbersNew = []
//   for (let i = 0; i < numbers.length; i += 1) {
    // if (numbers[i] % 2 === 0) {
    //   numbersNew[i] = numbers[i] + value;
    // }
//   }
//   return numbersNew;
// }
// function changeEven(numbers, value) {
//   let numbersNew = []
//   numbers.forEach((number) => {
    // if (number % 2 === 0) {
    //   numbersNew.push(number + value);
    // } else {numbersNew.push(number)}
//   })
//   return numbersNew;
// }
// // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));// повертає новий масив [12, 18, 3, 7, 14, 16]
// // console.log(changeEven([17, 24, 68, 31, 42], 100)); //повертає новий масив [17, 124, 168, 31, 142]
// // console.log(changeEven([44, 13, 81, 92, 36, 54], 100));// повертає новий масив [144, 13, 81, 192, 136, 154]
// 
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// 
// const books = [
//   {
    // title: "The Last Kingdom",
    // author: "Bernard Cornwell",
    // rating: 8.38,
//   },
//   {
    // title: "Beside Still Waters",
    // author: "Robert Sheckley",
    // rating: 8.51,
//   },
//   {
    // title: "The Tell-Tale Heart",
    // author: "Edgar Allan Poe",
    // rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// 
// const titles = books.map(book => book.title);
// console.log(titles);
// 
// const books = [
//   {
    // title: "The Last Kingdom",
    // author: "Bernard Cornwell",
    // genres: ["adventure", "history"],
//   },
//   {
    // title: "Beside Still Waters",
    // author: "Robert Sheckley",
    // genres: ["fiction"],
//   },
//   {
    // title: "Redder Than Blood",
    // author: "Tanith Lee",
    // genres: ["horror", "mysticism"],
//   },
// ];
// 
// const genres = books.flatMap(book => book.genres);
// console.log(genres);
// 
// const getUserEmails = (users) => {
//   users.map(user => user.email)
// };
// 
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// 
// const evenNumbers = numbers.filter(number => (number % 2 === 0));
// const oddNumbers = numbers.filter(number => (number % 2 != 0));
// 
// console.log(evenNumbers, oddNumbers);
// 
// const books = [
//   {
    // title: "The Last Kingdom",
    // author: "Bernard Cornwell",
    // rating: 8.38,
//   },
//   {
    // title: "Beside Still Waters",
    // author: "Robert Sheckley",
    // rating: 8.51,
//   },
//   {
    // title: "The Tell-Tale Heart",
    // author: "Edgar Allan Poe",
    // rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// 
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// 
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// // const booksByAuthor = books.filter(book => book.author.toLowerCase() === AUTHOR.toLowerCase());
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const getUsersWithEyeColor = (users, color) => {
    // return users.filter(user => user.eyeColor === color)
// };
// 
// 
// const users = [
//   {
    // name: "Moore Hensley",
    // email: "moorehensley@indexia.com",
    // eyeColor: "blue",
    // friends: ["Sharron Pace"],
    // isActive: false,
    // balance: 2811,
    // gender: "male"
//   },
//   {
    // name: "Sharlene Bush",
    // email: "sharlenebush@tubesys.com",
    // eyeColor: "blue",
    // friends: ["Briana Decker", "Sharron Pace"],
    // isActive: true,
    // balance: 3821,
    // gender: "female"
//   },
//   {
    // name: "Ross Vazquez",
    // email: "rossvazquez@xinware.com",
    // eyeColor: "green",
    // friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    // isActive: false,
    // balance: 3793,
    // gender: "male"
//   },
//   {
    // name: "Elma Head",
    // email: "elmahead@omatom.com",
    // eyeColor: "green",
    // friends: ["Goldie Gentry", "Aisha Tran"],
    // isActive: true,
    // balance: 2278,
    // gender: "female"
//   },
//   {
    // name: "Carey Barr",
    // email: "careybarr@nurali.com",
    // eyeColor: "blue",
    // friends: ["Jordan Sampson", "Eddie Strong"],
    // isActive: true,
    // balance: 3951,
    // gender: "male"
//   },
//   {
    // name: "Blackburn Dotson",
    // email: "blackburndotson@furnigeer.com",
    // eyeColor: "brown",
    // friends: ["Jacklyn Lucas", "Linda Chapman"],
    // isActive: false,
    // balance: 1498,
    // gender: "male"
//   },
//   {
    // name: "Sheree Anthony",
    // email: "shereeanthony@kog.com",
    // eyeColor: "brown",
    // friends: ["Goldie Gentry", "Briana Decker"],
    // isActive: true,
    // balance: 2764,
    // gender: "female"
//   }
// ]
// const color = "blue";
// 
// console.log(getUsersWithEyeColor(users, color));
// 
// 
// const books = [
//   {
    // title: "The Last Kingdom",
    // author: "Bernard Cornwell",
    // rating: 8.38,
//   },
//   {
    // title: "Beside Still Waters",
    // author: "Robert Sheckley",
    // rating: 8.51,
//   },
//   {
    // title: "The Tell-Tale Heart",
    // author: "Edgar Allan Poe",
    // rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Tell-Tale Heart";
// const AUTHOR = "Robert Sheckley";
// 
// const bookWithTitle = books.find( book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// 
// console.log(bookByAuthor, bookWithTitle);
// 
// 
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// 
// const totalPlayTime = playtimes.reduce((previoseVal, time) => {
    // return previoseVal + time;
//  }, 0);
// 
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalTime = players.reduce((tt, player) => { return tt + player.playtime }, 0);
// const totalGames = players.reduce((tg, player) => { return tg + player.gamesPlayed }, 0);
// const totalAveragePlaytimePerGame = totalTime / totalGames;
// // const totalAveragePlaytimePerGame = players.reduce((total, player) => {return total += (player.playtime / player.gamesPlayed)}, 0);
// 
// 
// console.log( totalAveragePlaytimePerGame);
// 

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => {return total += user.balance}, 0);
// };
// users =
    // [
        // {
            // name: "Moore Hensley",
            // email: "moorehensley@indexia.com",
            // eyeColor: "blue",
            // friends: ["Sharron Pace"],
            // isActive: false,
            // balance: 2811,
            // gender: "male"
        // },
        // {
            // name: "Sharlene Bush",
            // email: "sharlenebush@tubesys.com",
            // eyeColor: "blue",
            // friends: ["Briana Decker", "Sharron Pace"],
            // isActive: true,
            // balance: 3821,
            // gender: "female"
        // },
        // {
            // name: "Ross Vazquez",
            // email: "rossvazquez@xinware.com",
            // eyeColor: "green",
            // friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            // isActive: false,
            // balance: 3793,
            // gender: "male"
        // },
        // {
            // name: "Elma Head",
            // email: "elmahead@omatom.com",
            // eyeColor: "green",
            // friends: ["Goldie Gentry", "Aisha Tran"],
            // isActive: true,
            // balance: 2278,
            // gender: "female"
        // },
        // {
            // name: "Carey Barr",
            // email: "careybarr@nurali.com",
            // eyeColor: "blue",
            // friends: ["Jordan Sampson", "Eddie Strong"],
            // isActive: true,
            // balance: 3951,
            // gender: "male"
        // },
        // {
            // name: "Blackburn Dotson",
            // email: "blackburndotson@furnigeer.com",
            // eyeColor: "brown",
            // friends: ["Jacklyn Lucas", "Linda Chapman"],
            // isActive: false,
            // balance: 1498,
            // gender: "male"
        // },
        // {
            // name: "Sheree Anthony",
            // email: "shereeanthony@kog.com",
            // eyeColor: "brown",
            // friends: ["Goldie Gentry", "Briana Decker"],
            // isActive: true,
            // balance: 2764,
            // gender: "female"
        // }
    // ];
    // console.log(calculateTotalBalance(users));
// 
// 

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Edgar Allan Poe",
//   "Howard Lovecraft",
// ];
// 
// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// 
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// 
// const books = [
//   {
    // title: "The Last Kingdom",
    // author: "Bernard Cornwell",
    // rating: 8.38,
//   },
//   {
    // title: "Beside Still Waters",
    // author: "Robert Sheckley",
    // rating: 8.51,
//   },
//   {
    // title: "The Tell-Tale Heart",
    // author: "Edgar Allan Poe",
    // rating: 7.75,
//   },
//   {
    // title: "Redder Than Blood",
    // author: "Tanith Lee",
    // rating: 7.94,
//   },
//   {
    // title: "Enemy of God",
    // author: "Bernard Cornwell",
    // rating: 8.67,
//   },
// ];
// 
// // const sortedByAuthorName = books.toSorted((firstAuthor, secondAuthor) =>  firstAuthor.author.localeCompare(secondAuthor.author) );
// 
// // const sortedByReversedAuthorName = books.toSorted((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
// 
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// 
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// 
// 
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
    .filter(book => book.rating >= MIN_BOOK_RATING)
    .map(book => book.author)
    .toSorted((a, b) => a.localeCompare(b));
console.log(names);
