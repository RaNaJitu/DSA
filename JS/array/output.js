let employees = [
    { name: "Alice", salary: 50000 },
    { name: "David", salary: 60000 },
    { name: "Charlie", salary: 70000 },
    { name: "Alice", salary: 80000 },
    { name: "David", salary: 90000 }
];

//OUTPUT 
// [
//   { name: 'Alice', salary: 130000 },
//   { name: 'David', salary: 150000 },
//   { name: 'Charlie', salary: 70000 }
// ]


const result = [];

employees.forEach((ele) => {
    let existing = result.find(data => data.name === ele.name);
    if (existing) {
        existing.salary += ele.salary;
    } else {
        result.push({ ...ele }); // spread to avoid mutating original
    }
});

console.log(result);
