// Falsy

// false
// 0
// ""
// undefined
// NaN

// Truthy 

// '0', " ", "false", {}, [] 

let num = 0;
if (num || num == 0) {
    console.log('This is true');
}
else {
    console.log('This is false');
}