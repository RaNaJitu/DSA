// Two Sum
const findPairs = (arr) => {
    let pairs = [];
    let seen = [];
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let diff = 5 - num;
      let found = false;
  
      for (let j = 0; j < seen.length; j++) {
        let pair = seen[j];
        if (pair[0] === diff) {
          pairs.push([num, diff]);
          found = true;
          break;
        }
      }
  
      if (!found) {
        seen.push([num, i]);
      }
    }
    return pairs;
} 
  const arr = [15, 11, 4, 400, 3, 8, 2, 1]
  console.log(findPairs(arr))
