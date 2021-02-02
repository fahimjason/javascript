// undefined variable
let names;
console.log(names);

// undefined return
function add(num1, num2) {
    let result = num1 + num2;
}
const res = add(20, 30);
console.log(res);

// undefined parameter
function addTest(num1, num2) {
    console.log(num2);
}
const result = addTest(15);
console.log(result);

// undefined object
const person = { name: "abc", phone: 01700000, address: "xyz" };
console.log(person.salary);

// undefined in array
const array = [1, 3, 5, 7, 9];
console.log(array[11]);

//set undefined 
const fun = undefined;
console.log(fun);