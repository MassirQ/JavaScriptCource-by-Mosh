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
//     }else return 'It is not landscape'
// }

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if(typeof input!=='number'){
        return 'Not a number';
    }
    
    if((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    }
    if(input % 3 === 0){
        return 'Fizz';
    }
   

    if(input % 5 === 0){
        return 'Buzz';
    }



    return input
}