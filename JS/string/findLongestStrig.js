const str = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grapefruit0"];

let longestStr = "";
for (let data of str) {
  if(data.length > longestStr.length){
    longestStr = data;
  }
}
console.log(longestStr);



function findLongestString(arr) { 
  let longestStr = "";
  for (let i = 0; i < arr.length; i++) { 
    if(longestStr.length < arr[i].length){
        longestStr = arr[i];
    }
  }
  return longestStr;
}

console.log(findLongestString(str)); // Output: "elderberry"