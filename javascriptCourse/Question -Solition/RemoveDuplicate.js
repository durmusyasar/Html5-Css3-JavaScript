/*
Title: Remove duplicate
::Direction::
// write a function that takes a strings
// return a strings that don't have any duplicate (only for letters and digits)
Examples:
removeDup('hello') => return helo
removeDup('greeting') => return reting
*/

function removeDup(str) {
    return str.replace(/([a-zA-Z0-9])(?=.*\1)/g, '')
}

console.log(removeDup('hello') )
console.log(removeDup('greeting'))
console.log("-----------")

function removeDup2(str) {
    return str.split("").filter((current, index, self) =>{
        return self.indexOf(current) == index
    }).join("")
}

console.log(removeDup2('hello') )
console.log(removeDup2('greeting'))
console.log("-----------")

function removeDup3(str) {
    let result = []
    let arr = str.toString().split("")
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === i) result.push(arr[i])
    }
    return result.join("")
}

console.log(removeDup3('hello') )
console.log(removeDup3('greeting'))
console.log("-----------")