// console.log("First log");
// console.log("Second log");
// console.log("Third log");

// // Виконується першою
// console.log("First log");

// setTimeout(() => {
// 	// Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log("Second log");
// }, 2000);

// // Виконується другою
// console.log("Third log");
// setTimeout(() => {
//     console.log("blablalba");
    
// }, 9000)
// console.log("-----------------");
// const button = document.querySelector(".btnTimer");
// const clrButton = document.querySelector(".btnClrTimer");
// const clrAllButton = document.querySelector(".btnClrAllTimer");
// const setIntervalBtn = document.querySelector(".btnSetInterval");
// let timeoutId;
// let timers = [];
// let intervalId;

// const markupBr = "<br>"
// clrAllButton.insertAdjacentHTML("afterend", markupBr);

// button.style.backgroundColor = "violet";
// clrButton.style.backgroundColor = "red";
// button.style.padding = "50px";
// clrButton.style.padding = "50px";
// clrAllButton.style.backgroundColor = "brown";
// clrAllButton.style.padding = "30px";
// setIntervalBtn.style.backgroundColor = "teal";

// const onClick = () => {
//     const timerId = setTimeout(() => {
//         console.log("async JS!", timerId);
//     }, 2000);
//     console.log(timerId);
//     timeoutId = setTimeout(() => {
//         console.log("Timer", timeoutId);
//     }, 2000);
//     console.log(timeoutId);
//     timers.push(timeoutId);
//     console.log(timers);
    
// }
// const clrTimer = () => {
//     clearTimeout(timeoutId);
//     console.log(`clear timeoutId = ${timeoutId} and stoped`);
    
//  }
// const clrAllTimer = () => {
//     clearTimeout(timers.forEach);
//     timers = [];
//     console.log(`clear all and stoped`);
    
// }
// const intervalHandler = () => {
//         const intervalId = setInterval(() => {
//             console.log("interval", intervalId);
//             clearInterval(intervalId - 1);
//             console.log("interval skasovano");
            

    
//     }, 3000);
// }


// button.addEventListener("click", onClick);
// clrButton.addEventListener("click", clrTimer);
// clrAllButton.addEventListener("click", clrAllTimer);
// setIntervalBtn.addEventListener("click", intervalHandler);

console.log("-------------------date-----------------");
// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"
// console.log(date.getDay(), "/", date.getMonth(), "/", date.getFullYear());


console.log("------------promise------------");

// const isSuccess = true;
// const isSuccess = undefined;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("success");
//         } else {
//             reject("error");
//         };
        
//     }, 1000);
// });
// console.log(promise);
// promise.then(
//     value => {
//         console.log("+");

//     },
//     error => {
//         console.log("-");

//     }
// );
// promise
//     .then(() => { console.log("+") })
//     .catch(() => { console.log("-") })
//     .finally(() => {console.log("i pizdec");
//     });

console.log("-----promisifacation------");

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (!guestName) {
//     onError("Guest name must not be empty");
//   } else {
// 		onSuccess(`Welcome ${guestName}`);
// 	}
// };

// makeGreeting(
//   "Mango",
//   greeting => console.log(greeting),
//   error => console.error(error)
// );

// const makeGreetingProm = guestName => {
//     return new Promise((resolve, reject) => {
//         if (!guestName) {
//             reject("guestName  must be not empty")
//         } else {
//             resolve(`Welcome ${guestName}`);
//         }
//     })
// };
// makeGreetingProm("Mango")
//     .then((plus) => console.log(plus))
//     .catch((minus) => console.log(minus));
// const makeGreeting = guestName => {
//     if (!guestName) {
//         return Promise.reject("name null");
//     } else {
//         return Promise.resolve(`Hi! ${guestName}`);
//     }
// };
// makeGreeting("Guest")
//     .then(greet => console.log(greet))
//     .catch(xer => console.log(xer));
    
// makeGreeting("")
//     .then(greet => console.log(greet))
//     .catch(xer => console.log(xer))
//     .finally(console.log("it's all right"));
console.log("3");

// const makePromise = ({value, delay, shouldResolve }) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldResolve) {
//                 resolve(value)
//             } else {
//                 reject(value)
//             }
//         }, delay);
//     });
// };

// makePromise({
//     value: "Some value",
//     delay: 2000,
//     shouldResolve: true
// }).then(value => console.log(value))
// .then(delay => console.log(delay));

// makePromise({ value: "A", delay: 1000 })
// 	.then(value => console.log(value)) // "A"
// 	.catch(error => console.log(error));

// makePromise({ value: "B", delay: 3000 })
// 	.then(value => console.log(value)) // "B"
// 	.catch(error => console.log(error));

// makePromise({ value: "C", delay: 2000, shouldResolve: false })
// 	.then(value => console.log(value)) 
// 	.catch(error => console.log(error)); // "C"    

console.log("Метод Promise.all()");

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values)) // [1, 2, 3]
// 	.catch(error => console.log(error));

// Promise.allSettled([promise1, promise2, promise3, ...]);

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.allSettled([p1, p2, p3])
// 	.then(values => console.log(values));
// 	// [
// 	//   { status: "fulfilled", value: 1}, 
//   //   { status: "rejected", value: "Rejected promise 2"},
//   //   { status: "fulfilled", value: 3}
//   // ]
console.log("Метод Promise.race()");

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
// 	.then(value => console.log(value)) // 1
// 	.catch(error => console.log(error));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.race([p1, p2])
	.then(value => console.log(value)) 
	.catch(error => console.log(error)); // 2
