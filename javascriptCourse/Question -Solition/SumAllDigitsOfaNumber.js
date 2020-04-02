/*
Coding Challenge: Sum all digits of a number
::Directions::
// write a function that takes a number (must be positive)
// return the sum of all number
:Examples:
counter(123) => 6
counter(3456) => 18
*/

function counter(param) {
    let arr = param.toString().split("");
    let sum = 0;
    for(let el of arr) sum += parseInt(el);
    return sum;
}

console.log(counter(3456))

function counter2(param) {
    let arr = param.toString().split("");
    let sum = 0;
    for(let i = 0; i<arr.length; i++) sum += parseInt(el);
    return sum;
}

console.log(counter2(123))

function counter3(param) {
    let arr = param.toString().split("");
    let sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });
    return sum; 
}

console.log(counter3(123))