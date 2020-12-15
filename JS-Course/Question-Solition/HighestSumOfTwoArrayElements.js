/*
Coding Challenge: Highest sum of two array elements
::Directions::
// write a function that takes an array
// return the highest sum of two array elements
:Examples:
highest_sum([1, 3, 5, 2]) => return 8
highest_sum([100, 300, 200, 600, 90]) => return 900
*/

function highest_sum(arr) {
    let desc_arr = arr.sort((a,b) =>{
        return b -a 
    })
    return desc_arr[0] + desc_arr[1]
}

console.log(highest_sum([1, 3, 5, 2]))
console.log(highest_sum([100, 300, 200, 600, 90]))
