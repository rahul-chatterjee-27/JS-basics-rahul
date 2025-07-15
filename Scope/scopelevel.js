//SCope Level and Mini Hoisting...

function one(){
    const username="Rahul"
    function two(){
        const platform="GitHub"
        console.log("Username:",username); //Child function is fetching the data of Parent function... Vice-versa is not possible
    }
    two() //Execution of function "two"
}
one() //Execution of function "one"


if(true){
    const name="Rahul"
    if(name==="Rahul"){
        const surname=" Chatterjee"
        console.log(name+surname);
    }
    //console.log(surname); // ERROR: 'surname' variable is not declared globally
}
//console.log(name); // ERROR: 'name' variable is not declared globally



//Interesting...

console.log(add10(100)); // 110
function add10(number){
    return number+10
}



const add100=function(number){
    return num+100
}
//add100(100) //Problem related to hoisting...

