/*
Coding Challenge: Word Counter
::Directions::
// write a function that takes a strings
// return the number of word exists in the strings
:Examples:
count('The quick brown fox jump over the lazy dog') =>return 9
count('He is the quickest man in the world !') => return 8
*/
 // Solition 1
function count(str) {
    let arr = str.split(" ");
    let result = []
    for(let el of arr) {
        if(/[a-zA-Z0-9]+/.test(el)) result.push(el)
    }
    return result.length
}
console.log("-----Solition 1-----")
console.log(count('The quick brown fox jump over the lazy dog'))
console.log(count('He is the quickest man in the world !'))
