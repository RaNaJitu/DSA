// this is array of number
const Input = [5, 3, 8, 10, 5, 3, 10, 5, 3, 8, 2, 6, 8];

let count = {};
Input.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count);

//this is array of string

const letter = ["a", "b", "c", "a", "d", "c", "b", "a", "d", "b", "c", "a"];
let letterCount = {};
letter.forEach((item) => {
  if (letterCount[item]) {
    letterCount[item]++;
  } else {
    letterCount[item] = 1;
  }
});
console.log(letterCount);


const res = letter.reduce((acc, val) =>{
    acc[val] = (acc[val] || 0) + 1
    return acc
}, {})

console.log(res)


function firstNonRepeating(input) {
     let result ={}
    const inputArray = typeof input === "string" ? input.split("") : input
    
    console.log(inputArray)
    inputArray.forEach((ele) => {
    if(result[ele]){
        result[ele]++
    } else{
        result[ele] = 1
    }
})

let firstEleNonRepite = ""

for(let i =0; i < Input.length; i++){
    if(result[inputArray[i]] === 1){
        return firstEleNonRepite = inputArray[i]
        // break;
    }
}
   return null 
}

// const Input = [5, 3, 8, 10, 5, 3, 10, 5, 3, 8, 2, 6, 8];
const Input1 = 'swiss';
console.log(firstNonRepeating(Input1))
