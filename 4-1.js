// // const playlist = {
//     // name: "my playlist",
//     // rating: 5,
//     // isFavorite: true,
//     // tracks: ["tr1", "tr2"]
// // }
// // console.log(playlist);
// // console.log(playlist.name);
// // console.log(playlist["tracks"]);
// // 
// // const user = {
//     // name: "ALice",
//     // age: 25,
//     // skills: {
//         // css: true,
//         // html: true,
//         // js: false
//     // },
// // }
// // const obj = user.skills;
// // 
// // console.log(obj.css);
// // console.log(user.skills.html);

// // const user = {
//     // name: "ALice",
//     // age: 20,
//     // hobby: "html"
// // }
// // user.mood = "happy";
// // user.hobby = "skydiving";
// // 
// // console.log(user);
// // const keys = Object.keys(user);
// // for (key of keys) {
//     // console.log(`${key}:${user[key]}`);
// // }
// // 
// // const apartment = {
// //   owner: {
//     // name: "Henry",
//     // phone: "982-126-1588",
//     // email: "henry.carter@aptmail.com",
// //   },
// // };
// //   apartment.price = 5000;
// //   apartment.rating = 4.7;
// //   apartment.owner.name = "Henry Sibola";

// // const apartment.location = { };
// // console.log(apartment);
// // const apartment = {
// //   imgUrl: "https://via.placeholder.com/640x480",
// //   descr: "Spacious apartment in the city center",
// //   rating: 4.7,
// //   price: 5000,
// //   tags: ["premium", "promoted", "top", "trusted"],
// //   owner: {
//     // name: "Henry Sibola",
//     // phone: "982-126-1588",
//     // email: "henry.carter@aptmail.com",
// //   },
// // };
// // apartment.area = 60;
// // apartment.rooms = 3;
// // const location = apartment.location = {
// //   country: "Jamaica",
// //   city: "Kingston",
// // }
// // console.log(apartment);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // 
// // 
// // const keys = [];
// // const values = [];
// // for (const key in apartment) {
//     // keys.push(key);
//     // values.push(apartment[key])
// // }
// // 
// // const apartment = {
// //   descr: "Spacious apartment in the city center",
// //   rating: 4,
//     // price: 2153,
//         // };
//         // const values = [];
//         // const keys = Object.keys(apartment);
//         // for (const key of keys){
//         //   values.push(apartment[key]);
//         // }
//         // console.log(keys, values);
//         // 
//         function countProps(object) {
//             return Object.keys(object).length;
//         };
// console.log(countProps(apartment));
// 
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// 
// for (const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
//  console.log(hexColors, rgbColors);
//  
// function getAllPropValues(propName) {
//   const products = [
    // { name: "Radar", price: 1300, quantity: 4 },
    // { name: "Scanner", price: 2700, quantity: 3 },
    // { name: "Droid", price: 400, quantity: 7 },
    // { name: "Grip", price: 1200, quantity: 9 },
//   ];
    // let resultArray = [];
    // for (const product of products) {
        // if (product[propName]) {
            // resultArray.push(product[propName]);
        // }
    // };
    // return resultArray;
// }
// console.log(getAllPropValues("quant"));
// 
// function calculateTotalPrice(productName) {
//   const products = [
    // { name: "Radar", price: 1300, quantity: 4 },
    // { name: "Scanner", price: 2700, quantity: 3 },
    // { name: "Droid", price: 400, quantity: 7 },
    // { name: "Grip", price: 1200, quantity: 9 },
//   ];
    // for (const product of products) {
        // if (productName === product.name) {
            // return (product.price * product.quantity);
        // };
        //
    // }
    // return `Product ${productName} not found!`;
//   }
// 
// console.log(calculateTotalPrice("Scanner"));
// const atTheOldToad = {
//   potions: [
    // { name: "Speed potion", price: 460 },
    // { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
    // return this.potions;
//   },
//   addPotion(newPotion) {
    // this.potions.push(newPotion);
//   },
//   getTotalPrice() {
    // let priceTotal = 0;
    //   for (potion of this.potions) {
    //   priceTotal += potion.price;
    //   };
    // return priceTotal;
//   },
// };
// atTheOldToad.getPotions();
// atTheOldToad.getTotalPrice();
function getExtremeScores(scores) {
  const scoreObj = {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  }
    console.log(scoreObj);
    
    return scoreObj;

}
getExtremeScores([89, 64, 42, 17, 93, 51, 26]);