/*
    Title: Find second largest of three numbers
    >> Write down a program that will find second largest of three
    >> numbers using ternary operator
    ## Test ##
    input: 1 2 3 output: 2
    input: 5 2 8 output: 5
*/

function find_second_largest(n1, n2, n3) {
    let sc = n1 > n2 && n1 > n3 ? n2 > n3 ? n2 : n3 : n2 > n1 && n2 > n3 ? n1 > n3 ? n1 : n3 : n1 > n2 ? n1 : n2;
    console.log(sc);
}

find_second_largest(5, 2, 8);