const dog = {
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}

const dog1 = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

const json1 = JSON.stringify(dog);
console.log(json1); // '{"name":"Mango","age":3,"isGoodBoy":true}'
console.log(JSON.parse(json));

// const data = JSON.parse('{username: "Mango"}'); // Error
// console.log("❌ You won't see this log");
try {
    const data = JSON.parse('{username: "Mango"}'); // Error
    console.log("❌ You won't see this log");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("err1");
}

// ---- Вебсховище-----//
// localStorage.setItem("ui-theme", "dark");

// console.log(window.localStorage);
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
// localStorage.removeItem("ui-theme");
// localStorage.setItem("settings", JSON.stringify(settings));

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}
// 
// console.log(window.sessionStorage); // Storage {length: 0}
// 
// 
// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"
// 
// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }
// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}
// 
// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}
// 










const form = document.querySelector(".feedback-form");
const localStorageKey = "example-message"
const textArea = form.elements.message;
textArea.value = localStorage.getItem(localStorageKey) ?? "";


form.addEventListener("input", (evt) => {
    localStorage.setItem(localStorageKey, evt.target.value);
}
)
form.addEventListener("submit", evt => {
    evt.preventDefault();
    console.log(evt.target.elements.message.value);
    localStorage.removeItem(localStorageKey);
    form.reset();

        
})