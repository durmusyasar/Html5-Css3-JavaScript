/*
Title: Non-Repeating Character
::Direction::
// given a string
// write a function that takes the strings
// return non-repeating character
Examples:
non_repeating_ch('hello1234') => return h
*/


function non_repeating_ch(str) {
    let chars = {}
    let ch
    for (let ch of str){
        if(!chars[ch]) chars[ch] = 1
        else chars[ch] += 1 
    }
    for (let pr in chars){
        if(chars[pr] === 1){
            ch = pr
            break
        }
    }
    return ch
}

console.log(non_repeating_ch('hello1234'))