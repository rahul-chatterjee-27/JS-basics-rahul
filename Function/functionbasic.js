 //Function definition
 function name_print(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
 }
name_print() //Function call

function add(num_1,num_2){
    console.log(num_1+num_2);
    
}
//Here, num_1,num_2 are the parameters...
add(34,67)
//Here, 34,67 is the arguments...
add(34,null)
add(34,"A") //Problem

const add_result=add(34,67)
console.log("Addition: ",add_result); //Addition:  undefined --> Because there's no return value in the function

//Method 1...

// function mul(num_1,num_2){
//     let resulnum_lt=num_1*num_2
//     return result 
// }

//Method 2
function mul(num_1,num_2){
    return num_1*num_2
}

const mul_result=mul(34,2)
console.log("Multiplicaion: ",mul_result);

function userLoginMessage(username){
    return `Welcome ${username}! You are logged in.`
}

console.log(userLoginMessage("Rahul")) //Welcome Rahul! You are logged.
console.log(userLoginMessage()) //Welcome undefined! You are logged in.(Empty string...)

//Modified version using if statement...

function userLoginMessage(username){
    if(!username){                                       // if(username===undefined){
        console.log("Please enter your name first ");
        return
    }
    return `Welcome ${username}! You are logged in.`
}

console.log(userLoginMessage("Rahul"))
console.log(userLoginMessage())

function userLoginMessage(username){
    if(!username){                                           // if(username===undefined){     
        console.log("Please enter your name first ");
        return
    }
    return `Welcome ${username}! You are logged in.`
}


console.log(userLoginMessage())
console.log(userLoginMessage("Rahul"))


// function userLoginMessage(username="User"){
//     if(!username){                                       
//         console.log("Please enter your name first ");
//         return
//     }
//     return `Welcome ${username}! You are logged in.`
// }

// console.log(userLoginMessage())
// console.log(userLoginMessage("Rahul"))































