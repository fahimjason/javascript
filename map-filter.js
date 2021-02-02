const numbers = [3, 4, 5, 6, 7];


// square with creating a function
function squareFun(num) {
    let square = [];
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        const result = element * element;
        square.push(result);
    }

    return square;
}

const result = squareFun(numbers);
console.log(result);


// map method and it's parameters
numbers.map(function (element, index, array) {
    console.log('Element:', element, 'Index:', index, 'Array:', array);
});


//function and callback function
// function square(element) {
//     return element * element;
// }

// square = element => element * element;

//square = x => x * x;


// square with map method
const square = numbers.map(x => x * x);
console.log('With map method: ', square);


//filter method 
const res = numbers.filter(x => x < 5)
console.log('Filter method:', res);


//find method 
const findRes = numbers.find(x => x < 5)
console.log('Find method:', findRes);