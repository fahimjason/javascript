function stopWatch() {
    let time = 0;
    return function () {
        time++;
        return time;
    }
}

const count1 = stopWatch();
const count2 = stopWatch();

console.log(count1());
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count1());
console.log(count1());
console.log(count2());