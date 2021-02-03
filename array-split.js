const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//slice
const part = num.slice(2, 5);
console.log(part);

//splice 
const remove = num.splice(2, 3, '3-elements moved from here');
console.log(remove);
console.log(num);

//join
const modify = num.join(':::');
console.log(modify);