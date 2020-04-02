/*
Coding Challenge: Summing Array Elements
::Directions::
// write a function that takes an array
// return sum of all the elements
:Examples:
sumArrEl([1, 2, 3, 4]) => return 10
sumArrEl([2, 4, 5, 6]) => return 17
*/


// Solition 1 
function sumArrEl(arr) {
    let result = 0;
    for (let i=0; i<arr.length; i++) result += arr[i]
    return result
}
console.log("-----Solition 1-----")
console.log(sumArrEl([1, 2, 3, 4]))
console.log(sumArrEl([2, 4, 5, 6]))

// Solition 2
function sumArrEl2(arr) {
    let result = 0;
    for (let el of arr) result += el
    return result
}
console.log("-----Solition 2-----")
console.log(sumArrEl2([1, 2, 3, 4]))
console.log(sumArrEl2([2, 4, 5, 6]))

// Solition 3
function sumArrEl3(arr) {
    let result = 0;
    arr.forEach(element => {
        result += element
    });
    return result
}

console.log("-----Solition 3-----")
console.log(sumArrEl3([1, 2, 3, 4]))
console.log(sumArrEl3([2, 4, 5, 6]))


// Solition 4
function sumArrEl4(arr) {
    return arr.reduce((sum, curr) => {
        return sum + curr
    }, 0)
}

console.log("-----Solition 4-----")
console.log(sumArrEl4([1, 2, 3, 4]))
console.log(sumArrEl4([2, 4, 5, 6]))