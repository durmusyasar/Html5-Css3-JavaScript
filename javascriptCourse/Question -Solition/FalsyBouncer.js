/*
Coding Challenge: Falsy Bouncer
::Directions::
// write a function that takes an array
// remove all the falsy elements from the array
// return the array
:Examples:
bouncer([1, 2, 3, '', 0, false, null, undefined]) => [1, 2, 3]
*/

// Solition 1
function bouncer(arr){
    let result = []
    for(let el of arr){
        if(el) result.push(el)
    }
    return result
}
console.log("----Solition 1----")
console.log(bouncer([1, 2, 3, '', 0, false, null, undefined]))

// Solition 2
function bouncer2(arr){
    return arr.filter((el) => {
        return el
    })
}
console.log("----Solition 2----")
console.log(bouncer2([1, 2, 3, '', 0, false, null, undefined])) 