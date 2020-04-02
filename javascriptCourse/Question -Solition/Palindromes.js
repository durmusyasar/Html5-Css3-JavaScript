/*
Title: Palindromes
::Direction::
// write a function that takes a strings
// return true if the string is palindromes
// or return false if the string is not palindromes
Examples:
palindrome('abba') => return true
palindrome('barik') => return false
*/

function palindrome(str){
    let reversed = str.split("").reverse().join("")
    return reversed === str
}

console.log(palindrome('abba'))
console.log(palindrome('barik'))
