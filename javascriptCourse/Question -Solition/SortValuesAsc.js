/*
    Title: Sort values of three variables in ASC order
    >> Write down a program that will takes three number as input and
    >> will sort them in ASC order 
    ## Test ##
    input: n1=5 n2=8 n3=3 output: n1=3 n2=5 n3=8
    input: n1=5 n2=2 n3=9 output: n1=2 n2=5 n3=9
*/

let n1 = 5;
let n2 = 2;
let n3 = 3;

let min = n1 < n2 && n1 < n3 ? n1 : n2 <n1 && n2 < n3 ? n2 : n3;
let max = n1 > n2 && n1 > n3 ? n1 : n2 >n1 && n2 > n3 ? n2 : n3;
let sc = n1 > n2 && n1 > n3 ? n2 > n3 ? n2 : n3 : n2 > n1 && n2 > n3 ? n1 > n3 ? n1 : n3 : n1 > n2 ? n1 : n2;
n1 = min;
n2 = sc;
n3 = max;

console.log("n1", n1, "n2", n2, "n3", n3);
