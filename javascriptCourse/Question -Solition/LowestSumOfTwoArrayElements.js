/*
Coding Challenge: Lowest sum of two array items
::Directions::
// write a function that takes an array
// return lowest sum of two elements of the array
Examples:
lowest_sum([4, 3, 9, 8, 2, 1]) => return 3
lowest_sum([100, 400, 140, 345, 145]) => return 240
*/

function lowest_sum(arr) {
    let asc_arr = arr.sort((a,b) =>{
        return a - b
    })
    return asc_arr[0] + asc_arr[1]
}
console.log(lowest_sum([4, 3, 9, 8, 2, 1]))
console.log(lowest_sum([100, 400, 140, 345, 145]))