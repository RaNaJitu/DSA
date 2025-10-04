// You are given an array nums and an integer k.
// Rotate the array to the right by k steps — meaning, every element moves k positions to the right, and elements that "fall off" the end come back around to the front.
// 💡 Example
// Input:
// nums = [1,2,3,4,5,6,7]
// k = 3
// Output:
// [5,6,7,1,2,3,4]

nums = [1,2,3,4,5,6,7]
k = 3

function rotatedArray (arr, k) {
    k = k % arr.length
    console.log(arr.length)
    console.log(k)
    for(let i = 0; i < k; i++){
         // remove last element
    const last = arr.pop();
    // insert it at the beginning
    arr.unshift(last);
    }
    return arr
}

console.log(rotatedArray(nums, k))
