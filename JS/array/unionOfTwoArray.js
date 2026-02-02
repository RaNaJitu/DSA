const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7, 8];

// Option 1: Using Set and Spread Operator
function unionOfArrays(arr1, arr2) {
  const unionSet = new Set([...arr1, ...arr2]);
  return Array.from(unionSet);
}



// Option 2: Without using inbuilt functions
function unionWithoutInbuilt(arr1, arr2) {
  const unionArr = [];  
  for (let i = 0; i < arr1.length; i++) {
    if (!unionArr.includes(arr1[i])) {
      unionArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!unionArr.includes(arr2[i])) {
      unionArr.push(arr2[i]);
    }
  }
  return unionArr;
}

// Option 3: Using Filter and Concat
function unionOfArraysFilter(arr1, arr2) {
  const combined = arr1.concat(arr2);
  return combined.filter((item, index) => combined.indexOf(item) === index);
}

console.log('Union using Set:', unionOfArrays(a, b)); //output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log('Union using Filter:', unionOfArraysFilter(a, b)); //output : [1, 2, 3, 4, 5, 6, 7, 8]
console.log('Union using Without Inbuilt:', unionWithoutInbuilt(a, b));

