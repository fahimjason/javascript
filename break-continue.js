// break
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num.length; i++) {
    if (num[i] > 4) {
        break;
    }
    console.log(num[i]);
}

// continue
const numbers = [1, -2, 3, -4, 5, -6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    console.log(numbers[i]);
}