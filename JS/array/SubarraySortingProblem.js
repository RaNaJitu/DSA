// Brute Force Approach

function findUnsortedSubarrayBruteForce(nums) {
  let n = nums.length;
  let minLen = n;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Copy the array
      let temp = [...nums];

      // Sort only the subarray from i to j
      let sortedPart = [...temp.slice(i, j + 1)].sort((a, b) => a - b);
      temp.splice(i, j - i + 1, ...sortedPart);

      // Check if the array is sorted
      let sorted = true;
      for (let k = 0; k < n - 1; k++) {
        if (temp[k] > temp[k + 1]) {
          sorted = false;
          break;
        }
      }

      if (sorted) {
        minLen = Math.min(minLen, j - i + 1);
      }
    }
  }

  return minLen === n ? 0 : minLen;
}

console.log(findUnsortedSubarrayBruteForce([1, 2, 4, 3])); // Output: 2



// Optimized Approach (O(n))


function findUnsortedSubarray(nums) {
  let n = nums.length;
  let start = 0, end = n - 1;

  // 1. Find first unsorted element from left
  while (start < n - 1 && nums[start] <= nums[start + 1]) start++;

  // already sorted
  if (start === n - 1) return 0;

  // 2. Find first unsorted element from right
  while (end > 0 && nums[end] >= nums[end - 1]) end--;

  // 3. Find min and max in the unsorted part
  let subMin = Math.min(...nums.slice(start, end + 1));
  let subMax = Math.max(...nums.slice(start, end + 1));

  // 4. Extend start and end if needed
  while (start > 0 && nums[start - 1] > subMin) start--;
  while (end < n - 1 && nums[end + 1] < subMax) end++;

  return end - start + 1;
}


console.log(findUnsortedSubarray([1, 2, 4, 3])); // Output: 2

