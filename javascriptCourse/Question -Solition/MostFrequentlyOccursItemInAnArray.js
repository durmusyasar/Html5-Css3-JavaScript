/*
Title: Most frequently occurs elements in an array
	::Direction::
	// create a funciton name most_frequent with a parameter
	// takes an array
	// return most frequently occurs items/elements
	Examples:
	most_frequent(['a', 'b', 'c', 'b', 'a']) => return a
	most_frequent(['a', 'b', 'c', 'b', 'a', 'b']) => return b
*/

function most_frequent(arr) {
    let chars = {}
    let max = 0
    let maxChar
    for (let ch of arr){
        if(!chars[ch]) chars[ch] = 1
        else chars[ch]++
    }
    for (let pr in chars){
        if(chars[pr] > max){
            max = chars[pr]
            maxChar = pr
        }
    }
    return maxChar
}

console.log(most_frequent(['a', 'b', 'c', 'b', 'a']))
console.log(most_frequent(['a', 'b', 'c', 'b', 'a', 'b']) )
