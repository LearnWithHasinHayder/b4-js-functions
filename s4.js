const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function(x){
//     const remainder = x % 2;
//     if(remainder === 0){
//         return true;
//     }
//     return false;
// })

// const evenNumbers = numbers.filter(function(x){
//     if(x % 2 === 0){
//         return true;
//     }
//     return false;
// })

// const evenNumbers = numbers.filter(function(x){
//      return x % 2 == 0 
// })

// function even(x){
//     return x % 2 == 0;
// }

const even = x => x % 2 == 0;

const odd = x => x % 2 == 1;

//readability

// const evenNumbers = numbers.filter(x => x % 2 == 0)
const evenNumbers = numbers.filter(even)

// const oddNumbers = numbers.filter(function (x) {
//     const remainder = x % 2;
//     if (remainder === 1) {
//         return true;
//     }
//     return false;
// })

const oddNumbers = numbers.filter(odd)

console.log(evenNumbers);
console.log(oddNumbers);