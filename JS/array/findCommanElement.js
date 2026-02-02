//Find common element between two arrays

const input = [1, 2, 3, 4, 5, 6]
const input1 = [11, 12, 13, 4, 5, 6]
const result = []

//Option 1: Using inbuilt function
const r = input.filter((ele) =>{
    if(input1.includes(ele)){
        return ele
    }
})

console.log(r) // [4,5,6]

//Option 2: Without using inbuilt function
for(let i= 0; i < input.length ; i++){
    for(let j =0 ; j < input1.length; j++){
        if(input[i] === input1[j]){
            result.push(input[i])
        }
    }
}
console.log(result) // [4,5,6]

