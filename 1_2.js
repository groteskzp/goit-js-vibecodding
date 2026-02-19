// 1
// Генератор пароля: createPassword(name, year)
// 


// function createPassword(name, year) {
    // return (name.trim().toLowerCase())+year;
// }
// let pass=createPassword(" Valik ", 23)
// console.log(pass);
// 2
// Случайное целое: getRandomInt(min, max). 
// Нужно вернуть целое число в диапазоне от min
//
// function randomMinMax(min, max) {
    // return Math.floor(Math.random() * (max -
// } 
// Math.random()
// let pass = randomMinMax(1, 10);
// console.log(pass);
// 3
// Абсолютная разница: getDifference(a, b). Раз
// 
// function getDifference(a, b ) {
    // return Math.abs(a - b);
// }
// let diff = getDifference(10, 5);
// 
// console.log(diff);
// 4
// Мини-валидатор цены: isPriceInRange(price, m
// Проверь, что цена в диапазоне (включительно)
// И что это не NaN.
// 
function isPriceInRange(price, min, max){
  
    return !isNaN(price) && price >= min && pri


}
let price = isPriceInRange(10, 1, 10);
console.log(price);