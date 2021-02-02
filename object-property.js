const students = [
    { id: 1, name: 'Khan' },
    { id: 2, name: 'Saiful' },
    { id: 3, name: 'Rasel' },
    { id: 4, name: 'Ayon' }

]

// create array from object with for loop
friendsName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    friendsName.push(element);
}
console.log('For Loop:', friendsName);


// create array from object with map method
const names = students.map(x => x.name);
console.log('Map Method:', names);


// filtering with filter method
const idFilter = students.filter(x => x.id > 2);
console.log('Filter Method:', idFilter);


// filtering with find method
const idFind = students.find(x => x.id > 2);
console.log('Find Method:', idFind);