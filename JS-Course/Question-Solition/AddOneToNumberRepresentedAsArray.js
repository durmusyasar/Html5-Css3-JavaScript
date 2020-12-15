/*
Coding challenge: Add one to number represented as array
::Directions::
// write a function that takes an array
// add one to the number represented as an array
// return the brand new array
Examples::
adder([9, 9, 9]) => [1, 0, 0, 0] // 999 + 1 = 1000
adder([1, 2, 9]) => [1, 3, 0]
*/

function adder(arr) { 
    let num = parseInt(arr.join("")) + 1
    let result = num.toString().split("")
    return result.map((el) => {
        return parseInt(el)
    })
 }

 console.log(adder([9, 9, 9]))
 console.log(adder([1, 2, 9]))