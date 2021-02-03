function add(num1, num2) {
    result = num1 + num2;
    if (result > 9) {
        var message = 'Good';
    }
    console.log(message);
    return result;
}

var output = add(3, 7);
console.log(output);