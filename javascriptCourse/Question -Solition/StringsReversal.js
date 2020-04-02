/*
Title: Reverse a string
    ::Direction::
    // given a string
    // write a function that takes the string
    // make reverse the of the string
    // return the reverse string
    Examples:
    reverse("hi") => return ih
    reverse("hello") => return olleh
    reverse("reverseMe") => return eMesrever
*/

function reverse(str){
    let reversedStr = str.split("").reverse().join("")
    return reversedStr
}

console.log(reverse("hi"))
console.log(reverse("hello"))
console.log(reverse("reverseMe"))

function reverse2(str){
    let reversed = ''
    for (let i = 0; i < str.length; i++) reversed = str[i] + reversed
    return reversed
}
console.log("-----------")
console.log(reverse2("hi"))
console.log(reverse2("hello"))
console.log(reverse2("reverseMe"))


function reverse3(str){
    return str.split("").reduce((accum, current) =>{
        return current + accum
    }, '')
}
console.log("-----------")
console.log(reverse3("hi"))
console.log(reverse3("hello"))
console.log(reverse3("reverseMe"))