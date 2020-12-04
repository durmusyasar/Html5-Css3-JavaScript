/*
Title: Reverse an integers
    ::Direction::
    // write a function which takes an integers
    // return reversed of that integers
    Examples:
    intReverse(123) => return 321
    intReverse(-123) => return -321
*/

function intReverse(param) {
    let reversed = param.toString().split("").reverse().join("")
    if(param < 0) return parseInt(reversed) * -1
    else return parseInt(reversed)

    // OR
    //return parseInt(reversed) * Math.sign(param)
}

console.log(intReverse(123))
console.log(intReverse(-123))

function intReverse2(param) {
    let reversed = param.toString().split("").reverse().join("")
    return parseInt(reversed) * Math.sign(param)
}

console.log(intReverse2(465))
console.log(intReverse2(-465))