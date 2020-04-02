/*
	Title: Factorial of a number
	>> Write down a program that will find factorial of a number
	## Test ##
	input: 3  output: 6
	input: 4  output: 24 // 1*2*3*4 = 24
*/

/*
// iterative approach
function factorial(number) {
	let fact = 1;
	for(let i=1; i<=number; i++) {
		fact *= i; // fact = fact * i;
	}
	return fact;
}

// 4
// 1: fact = 1
// 2: fact = 1 * 2
// 3: fact = 1 * 2 * 3
// 4: fact = 1 * 2 * 3 * 4 = 24
console.log(factorial(4)); */

// recursive approach
function factorial(number) {
	if(number == 1) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
}

// number = 4
// 4 * 6 => 24
// 3 * 2 = 6
// 2 * 1 = 2

console.log(factorial(7));