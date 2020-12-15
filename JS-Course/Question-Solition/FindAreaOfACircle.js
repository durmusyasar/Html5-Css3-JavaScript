/*
    Title: Area of circle
    >> Write down a program that will take radius of a circle as input and
    >> will calculate area of the circle
    ## Test ##
    input: 3 output: 28.2744
    input: 5 output: 78.54

*/

function area(radius) {
    let area = 3.1416 * radius * radius;
    return area;
}

console.log(area(5));
