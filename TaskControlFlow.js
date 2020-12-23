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

checkSpeed(180);
function checkSpeed(speed) {
  let speedLimit = 70;
  const pointLimit = 12;
  if (speed <= speedLimit) {
    console.log("ok");
  }

  if (speed > speedLimit) {
    let speedOverLimit = speed - speedLimit;
    let points = Math.floor(speedOverLimit / 5);

    if (points >= pointLimit) {
      console.log("Your points is more than 12 so", "Licence Suspended");
    } else console.log("your points", points);
  }
}
