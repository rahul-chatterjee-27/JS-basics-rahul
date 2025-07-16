//Immediately Invoked Function Expression...

// //Method-1
// function code(){
//     console.log('Database Connected');
// }
// code()

//Method-2
(function coding(){
    console.log('Database Connected');
})(); //Semicolon is mandetory for run the next function...

// (function coding(){
//     console.log('Database Connected Twice');
// })() 

( () => {
    console.log('Database Connected Twice');
})()
