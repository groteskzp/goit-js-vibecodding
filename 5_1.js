// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// class Car {
  // static maxPrice = 50000;
  // #price;
//
  // constructor(params) {
    // this.#price = params.price;
  // }
//
  // get price() {
    // return this.#price;
  // }
//
  // set price(newPrice) {
    // if (newPrice <= Car.maxPrice ) {this.#price = newPrice;}
  // }
// }
//
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
//
// audi.price = 49000;
// console.log(audi.price); // 49000
//
// audi.price = 51000;
// console.log(audi.price); // 49000
//
// class Car {
  // static #maxPrice = 50000;
  // static checkPrice(price){
    // if (price > Car.#maxPrice){
      // return "Error! Price exceeds the maximum";
    // } else { return "Success! Price is within acceptable limits"}
  // }
//
  // constructor(params) {
    // this.price = params.price;
  // }
// }
//
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
//
// // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// 
// class User {
  // email;
// 
  // constructor(email) {
    // this.email = email;
  // }
// 
  // get email() {
    // return this.email;
  // }
// 
  // set email(newEmail) {
    // this.email = newEmail;
  // }
// }
// 
// class Admin extends User {
  // access = this.access;
  // static role = {
    // BASIC: "basic",
    // SUPERUSER: "superuser",
  // };
  // 
// 
// constructor(params){
  // super(params);
  // this.email = params.email;
  // this.access = params.access;
// }
// }
// const mango = new Admin({
  // email: "mango@mail.com",
  // access: Admin.role.SUPERUSER,
// });
// 
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
// 
// 
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  blacklistedEmails = [];
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
  blacklist(email){
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email){
    return this.blacklistedEmails.includes(email)
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































