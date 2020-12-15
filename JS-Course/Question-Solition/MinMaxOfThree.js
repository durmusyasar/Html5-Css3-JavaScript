/*
    Title: Find min, max of three numbers
    >> Write down a program that will find minimum and maximum of three
    >> numbers using ternary operator
    ## Test ##
    input: 1 2 3 output: min=1 max=3
    input: 5 2 8 output: min=2 max=8
*/

function min_max(n1, n2, n3) {
    let min = n1 < n2 && n1 < n3 ? n1: n2 < n1 && n2 < n3 ? n2 : n3;
    let max = n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2>n3 ? n2 : n3;
    console.log("min=", min, "max=", max);
}

min_max(2, 8, 1);
