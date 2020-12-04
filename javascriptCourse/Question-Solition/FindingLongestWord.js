/*
Coding Challenge: Finding longest word
::Directions:: 
// write a function that takes a strings
// return the longest word the strings contains
Examples:
longest_word('The quick brown fox jump over the lazy dog') => return quick
longest_word('He is the quickest man in the world') => return quickest
*/

function longest_word(str){
    let arr = str.split(" ")
    return arr.sort((a, b) =>{
        return b.length - a.length
    })[0]
}

console.log(longest_word('The quick brown fox jump over the lazy dog'))
console.log(longest_word('He is the quickest man in the world'))