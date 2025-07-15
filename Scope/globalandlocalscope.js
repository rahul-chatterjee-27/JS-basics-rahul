// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

{} //scope 

if(true){
    let a1=10
    const b1=20
    var c1=30
}

//console.log(a1); //a1 is not defined
//console.log(b1); //b1 is not defined
//console.log(c1); //30 


//Outside of {...} --> Global Scope
//Inside of {...} --> Local Scope

let num_1=100
if(true){
    let num_1=20
    console.log("Local Scope Value: ",num_1)
}
console.log("Global Scope Value: ",num_1)