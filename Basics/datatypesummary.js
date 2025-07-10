// Primitives...
// 7 types: Strings, Numbers, Boolean, Null, Undefined, Symbol, BigInt

const score=1010
console.log("Score is:",score)

const id1=Symbol('12345')
const id2=Symbol('12345')
console.log(id1===id2)


const Bignumber=136325648756847656n 
console.log(typeof Bignumber)// Add "n" in the last to make it BigInt...


// Non-primitives(Reference)...
// Array, Object

// Array...
const dept=["ece", "cse", "ee", "me", "ce","ai-ml", "eee", "it"]

// Object...
let metadata={
    Name:"Rahul Chatterjee",
    Age:20,
    Id:1234567890,
    Salary:80000,
    
}

//Functions...
const hello=function(){
    console.log("Hello Coders!")
}
