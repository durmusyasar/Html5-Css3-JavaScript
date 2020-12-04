/*
    Title: Even or Odd
    >> Write a program that will check the given number is even or odd
    ## Test ##
    input: 3 -> output: odd
    input: 4 -> output: even
*/

function check(num) {
    if(num % 2 == 0) return "Even";
    if(num % 2 == 1) return "Odd";
}

console.log(check(5));