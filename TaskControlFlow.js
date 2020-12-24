// let number = maxNumber(45, 20);
// console.log(number);

// function maxNumber(a,b){
//     return (a > b) ? a : b;
// }

// let par = isLandScape(400, 700);
// console.log(par);

// function isLandScape(width, height) {
//     if(width > height){
//         return 'It is land scape'
//     } return 'It is not landscape'
// }

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input){
//     if(typeof input!=='number'){
//         return 'Not a number';
//     }

//     if((input % 3 === 0) && (input % 5 === 0)){
//         return 'FizzBuzz';
//     }
//     if(input % 3 === 0){
//         return 'Fizz';
//     }

//     if(input % 5 === 0){
//         return 'Buzz';
//     }

//     return input
// }

//speed limit = 70
// 5 -> 1 point
//Math.floor(1.3)
// 12 points --> licence suspended

// checkSpeed(180);
// function checkSpeed(speed) {
//   let speedLimit = 70;
//   const pointLimit = 12;
//   if (speed <= speedLimit) {
//     console.log("ok");
//   }

//   if (speed > speedLimit) {
//     let speedOverLimit = speed - speedLimit;
//     let points = Math.floor(speedOverLimit / 5);

//     if (points >= pointLimit) {
//       console.log("Your points is more than 12 so", "Licence Suspended");
//     } else console.log("your points", points);
//   }
// }
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// // Constructer funtion

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//     return "hello"
//   };
//   return this;
// }

// const circle = new Circle(1);

// const x = {
//   message: "Hello",
//   greeting: function (){
//     return "Hello Warez";
//   },
// };

// console.log(circle.draw());

// const numbers = [45,6658,5662,56532,489,41523,453,65586,45223,568989889,123];

// console.log(Math.min(...numbers));
// let whoIsMordagaw = 'Warez';
// const warezMordagaw =
//   `"Hello, who is mordagaw? ${x.message}"`
// ;

//street
// City
// ZipCode
// function shows adress

// const adress = {
//   street: "Wall Street",
//   city: "New York",
//   ZipCode: "89523",
// };

// function showAdress(adress) {
//   for (const key in adress) {
//     if (adress.hasOwnProperty(key)) {
//       const element = adress[key];
//       console.log(key, element);
//     }
//   }
// }

// showAdress(adress);

// function createAdress(street, city, ZipCode) {
//   return {
//     street,
//     city,
//     ZipCode,
//   };
// }

// function Adress(street, city, ZipCode) {
//   this.street = street;
//   this.city = city;
//   this.ZipCode = ZipCode;
//   return this;
// }


let adress1 = {
  street: "Wall Street",
  city: "New York",
  ZipCode: "89523",
};
let adress2 = {
  street: "Wall Street",
  city: "New York",
  ZipCode: "89523",
};

function areEqual(adress1,adress2){
  return adress1.street === adress2.street &&
  adress1.city === adress2.city &&
  adress1.ZipCode === adress2.ZipCode;

}

function areSame(adress1,adress2){
  return adress1 === adress2;
}

console.log(areEqual(adress1,adress2));
console.log(areSame(adress1,adress2));