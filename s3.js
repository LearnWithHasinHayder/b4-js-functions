//map filter reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = [];
// for(let i=0; i<numbers.length; i++){
//     newArray.push(numbers[i]*numbers[i]);
// }

const square = x => x * x;

// function square(x){
//     return x * 3;
// }

// const newArray = numbers.map(function (x){
//     return x * x;
// })
// const newArray = numbers.map(square)
const newArray = numbers.map(x => x * x)

console.log(newArray);