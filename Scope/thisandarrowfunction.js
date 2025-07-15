//THIS function...

const user={
    name:"Rahul",
    price: 999,
    welcomeMessage: function(){
        console.log(this);
                            //         {
                            //   name: 'Raghav',
                            //   price: 1999,
                            //   welcomeMessage: [Function: welcomeMessage]
                            // }
        console.log(`${this.name}, Welcome to website..! Your course price is ${this.price} `) //'this' function
    }
}
user.welcomeMessage() //Rahul, Welcome to website..! Your course price is 999 
user.name="Raghav"
user.price=1999
user.welcomeMessage() //Raghav, Welcome to website..! Your course price is 1999 

console.log(this); //{} --> Empty object

//But when we run "console.log(this)" in windows/browser we get --> "Window {window: Window, self: Window, document: document, name: '', location: Location, …}"

//This is the basic difference between "node" and "browser" in case of "THIS" function...




//ARROW function..






