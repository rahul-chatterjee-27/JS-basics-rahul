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


console.log();
console.log();
console.log();

const database=[
    {
        id: "usr_1",
        email: "user1@gmail.com"
    },
    {
        id: "usr_2",
        email: "user2@gmail.com"
    },
    {
        id: "usr_3",
        email: "user3@gmail.com"
    },
    {
        id: "usr_4",
        email: "user4@gmail.com"
    }
]
    

console.log(database[2].email)
console.log(database[1].id)

const fbuser2={
    id: "fbrahul2345",
    name: "Rahul Chatterjee",
    email: "rahul@facebook.com",
    isLoggedIn: true
}
console.log(fbuser2);
console.log(Object.keys(fbuser2)) //[ 'id', 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(fbuser2)) //[ 'fbrahul2345', 'Rahul Chatterjee', 'rahul@facebook.com', true ]
console.log(Object.entries(fbuser2)); 

console.log(fbuser2.hasOwnProperty("email")); //true
console.log(fbuser2.hasOwnProperty("phone no.")); //false




