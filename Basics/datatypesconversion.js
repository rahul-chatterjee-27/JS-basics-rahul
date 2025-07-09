let id_1="446"
console.log(typeof id_1)

let age=25
console.log(typeof age)


let string_to_number=Number(id_1)
console.log(typeof string_to_number)

let id_2="234abc"
let change_to_number=Number(id_2)
console.log(Number(change_to_number))
console.log(typeof change_to_number) // Number (But it should not happen due to presence of alphabets... )

let score=null
let null_to_number=Number(score)
console.log(typeof score)
console.log(null_to_number)


let type1=true
console.log(Number(type1))
let type2=false
console.log(Number(type2))


let name="Coders"
console.log(Number(name))

// "3455" ==> 3455
// "Coder" ==> NaN
// "234ab" ==> NaN
// true ==> 1, false ==> 0
// null ==> 0

let num=1
console.log(Boolean(num))

let num2=0
console.log(Boolean(num2))

let Name=""
console.log(Boolean(Name))

let Name2="Ball"
console.log(Boolean(Name2))

let value=100
console.log(String(value))
console.log(typeof String(value))