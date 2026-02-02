const arr  =  [1, 2, 3, 4]
const remove = 3
 
for (let i = 0; i < arr.length; i++){
  if (arr[i] === remove) {
    arr.splice(i, 1);
    break;
  }
}

console.log(arr); // Output: [1, 2, 4]