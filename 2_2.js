// // console.log("lesson2_js_For_while");
// // const username = "Alice";

// // const str = username.slice(0, 3);

// // console.log(str);

// // function getLastElementMeta(array) {
// //     let lInd = array.length - 1;
// //     let lastElement = array[lInd];
// //     return {lInd, lastElement};
// // }
// // console.log(getLastElementMeta(["apple"]));

// // function getSlice(array, value) {
// //     !(array.indexOf(value) === -1) ? return array.slice(0, array.indexOf(value)) : return [];
  
// // }
// function getEvenNumbers(start, end) {
//   let sum = [];
//   for (let i = start; i < end; i++){
//     if ((i % 2) === 0){
//         sum.push(i);
//     }
//   }
//   return sum;
// }
// console.log(getEvenNumbers(2, 5));

// function checkStorage(storage, item) {
    // if (storage.includes(item.toLowerCase())) {
    //   return `${item} is available to order!`;
    // } else {
        // return "Sorry! We are out of stock!";
    // }
// }
// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
    // return `${item} is available to order!`;
//   } else {
    // return "Sorry! We are out of stock!";
//   }
// }
// 
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// function getCommonElements(array1, array2) {
//   let total = [];
    // for (let i = 0; i < array1.length; i++){
    // if (array2.includes(array1[i])) {
    //   total.push(array1[i]);
    // }
//   }
//   return total;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// 
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (each of order){
    // sum += each;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }
// console.log(createReversedArray(1, 2, 3));
// 
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
console.log(ownerName);
const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);
const ownerEmail = apartment.owner.email;
console.log(ownerEmail);
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);
const firstTag = apartment.tags[0];
console.log(firstTag);
const lastTag = apartment.tags[apartment.tags.length - 1];
console.log(lastTag);
