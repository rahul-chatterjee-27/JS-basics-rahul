//Object literals...
const mysym=Symbol("rc-git-27")
const gituser={
    name: "Rahul",
    "full name":"Rahul Chatterjee",
    [mysym]: "rc-git-1-27",
    age:20,
    email: "rahul@google.com",
    location:"Delhi",
    isLoggedIn:false,
    lastLoginDays:["Saturday"]
}

console.log(gituser.email) //Method-1(Try to use less)
console.log(gituser["email"]) //Method-2 (More preferable)

console.log(gituser["full name"]) //Access somthing which is already mentioned as a string

// console.log(gituser.mysym) //Output as a string
// console.log(typeof gituser.mysym)

console.log(gituser[mysym]) //Output as a symbol
console.log(typeof gituser[mysym])

gituser.email="rc@github.com"
console.log(gituser);

Object.freeze(gituser) // NO change will take place after freeze
gituser.email="rc@git.com"
console.log(gituser);


