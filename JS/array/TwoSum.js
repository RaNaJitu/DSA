// 📥 Input Format

// The first line contains an integer n, the number of elements in the array.

// The second line contains n space-separated integers — the array nums.

// The third line contains an integer target.

// 📤 Output Format

// Print the two indices (0-based) whose elements add up to the target.

// 💡 Example

// Input:

// 4
// 2 7 11 15
// 9


// Output:

// 0 1


// Explanation:

// The numbers at index 0 and 1 are 2 and 7.

// 2 + 7 = 9, which matches the target.


// Brute-force Solution

const nums = [2, 7, 11, 15, 5, 6, 4];
const target = 9;
console.log(twoSumBruteForce(nums, target));

function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Optimized Solution (Using Hash Map)

function twoSumOptimized(nums, target) {

  // const map = new Map();

  // for (let i = 0; i < nums.length; i++) {
  //   const complement = target - nums[i];
  //   if (map.has(complement)) {
  //     return [map.get(complement), i];
  //   }
  //   map.set(nums[i], i);
  // }
  //these above are returns first pair only
  
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // ✅ If complement already exists, add the pair
    if (map.has(complement)) {
      result.push([map.get(complement), i]);
    }

    // Always store current number for future complements
    map.set(nums[i], i);
  }

  return result;
}  


