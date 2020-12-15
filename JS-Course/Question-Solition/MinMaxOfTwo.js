/*
    Title: find min, max of two numbers
    >> Write down a program that will takes two number as input and
    >> find min and max using ternary operator
    ## Test ##
    input: 1 2 output: Min= 1 Max= 2
    input: 6 5 output: Min= 5 Max= 6
*/

function min_max(n1, n2) {
    let min = n1 > n2 ? n2 : n1;
    let max = n1 > n2 ? n1 : n2;
    console.log("min=", min, "max=", max);
}

min_max(6, 5);