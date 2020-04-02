/*
Coding Challenge: Sorting Array
::Directions::
// write a function that takes an array
// return ascending order of the array
Examples:
asc([1, 4, 2, 3]) => [1, 2, 3, 4]
asc([100, 90, 20, 15, 43, 23]) => [15, 20, 23, 43, 90, 100]
//practice
desc([1, 4, 2, 3]) => [4, 3, 2, 1]
desc([100, 90, 20, 15, 43, 23]) => [100, 90, 43, 23, 20, 15]
*/

function asc(arr) {
    return arr.sort((a,b)=>{
        return a - b
    })
}

console.log(asc([1, 4, 2, 3]))
console.log(asc([100, 90, 20, 15, 43, 23]))

function desc(arr) {
    return arr.sort((a,b)=>{
        return b - a
    })
}

console.log(desc([1, 4, 2, 3]))
console.log(desc([100, 90, 20, 15, 43, 23]))