const gituser=new Object() //Singletone Object -->  one shared object,
console.log(gituser);// {}

const githubuser={}// Non-singletone object --> many separate objects
console.log(githubuser); // {}

const fbuser={
    id: "fbrahul2468",
    name: "Rahul",
    email: "rahul@facebook.com",
    isLoggedIn: false
}
console.log(fbuser);

const instauser={
    email:"rahul2468@instagram.com",
    details: {
        fullname:{
            firstname: "Rahul",
            surname: "chatterjee"
        },
        instaid:"123rc456",
    },
    isLoggedIn: false
}
console.log(instauser);
console.log(instauser.details);
console.log(instauser.details.fullname);
console.log(instauser.details.fullname.firstname);


console.log();
console.log();

const obj1={1:"A",2:"B"}
console.log(obj1);
const obj2={3:"C",4:"D"}
console.log(obj2);

const obj3={obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

const obj4=Object.assign({},obj1,obj2) //You can use this also --> const obj4=Object.assign(obj1,obj2)
console.log(obj4); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

const obj5={...obj1,...obj2} //Spread method
console.log(obj5);


