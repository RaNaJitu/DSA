// OPTIONS1
const arr = [10, [20, 30], [40, [50, 60]], 70];
const result = [];

function flatten(input) {
  input.forEach((ele) => {
    if (Array.isArray(ele)) {
      flatten(ele); // recursion for nested arrays
    } else {
      result.push(ele);
    }
  });
}

flatten(arr);

console.log(result); 


//OPTION 2

const flatten = (arr) =>
  arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

console.log(flatten([10, [20, 30], [40, [50, 60]], 70]));
