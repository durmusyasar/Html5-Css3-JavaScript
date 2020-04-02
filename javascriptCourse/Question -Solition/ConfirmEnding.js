/*
Coding Challenge: Confirm ending
::Directions::
// write a function that takes a strings and a character
// if the strings end with the character then
// return true else return false
Examples:
confirm_ending('hello', 'o') => return true
confirm_ending('buddy', 'x') => return false
*/

function confirm_ending(str, ch) {
    let reversed = str.split("").reverse()
    return reversed[0] === ch
}

console.log(confirm_ending('hello', 'o'))
console.log(confirm_ending('buddy', 'x'))