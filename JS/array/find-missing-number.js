/**
 * Find Missing Number(1 to N) - JavaScript
--Topics covered in this short:
--Find missing number from 1 to N
--Input and output understanding
--Why brute force is not required
--Optimized math formula approach
--Using sum of first N natural numbers
--Single traversal solution
--Time complexity O(n)
--Space complexity O(1)
--Interview best practice
 */


const arr = [1, 2, 4, 6, 3, 7, 8];

let n = arr.length + 1; // Since one number is missing
let expInt = n * (n + 1) / 2; // Sum of first N natural numbers formula
let actualInt = arr.reduce((acc, num) => acc + num, 0); // Sum of array elements

let missingNumber = expInt - actualInt;
console.log(`The missing number is: ${missingNumber}`); // Output: The missing number is: 5