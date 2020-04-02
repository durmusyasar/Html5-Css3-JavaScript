/*
    Title: Swap value of two variables
    >> Write down a program that will swap value of two variables
    ## Test ##
    input: n1=1, n2=2  output: n1=2, n2=1
*/

// using temporary variable
/*
let n1 = 1;
let n2 = 2;

let tmp = n1;
n1 = n2;
n2 = tmp;
console.log("n1", n1, "n2", n2); */

// without temporary variable
let n1 = 1;
let n2 = 2;

// n1 = n1 + n2;
// n2 = n1 - n2;
// n1 = n1 - n2;


n1 = n1 * n2;
n2 = n1 / n2;
n1 = n1 / n2;
console.log("n1", n1, "n2", n2);

