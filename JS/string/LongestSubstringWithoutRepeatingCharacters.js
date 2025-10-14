const nums = "abcdefgabcbb"

console.log(lengthOfLongestSubstringBruteForce(nums))
console.log(lengthOfLongestSubstringOptimized(nums))


function lengthOfLongestSubstringBruteForce(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break; // stop if duplicate
      seen.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
}


function lengthOfLongestSubstringOptimized(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}


