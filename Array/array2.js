const book=["Thriller","Romance","Suspence"] 
console.log(book); 

const song=["Rock","Hip-hop","Pop"] 
console.log(song); 

book.push(song) //Array under array MEANS ARRAY AS AN ELEMENT... 
console.log(book)
console.log(book[3][1])

const merge=book.concat(song) //Merge without being an array...
console.log(merge)

const merge2=[...book,...song] //Merge by spread method...
console.log(merge)

console.log()
const new_array=[1,2,3,4,[5,6,7],8,9,[10,11,[12,[13]]]]
const new_array2=new_array.flat(Infinity) //Make it in a single array...
console.log(new_array2);

console.log(Array.isArray("Developer"));
console.log(Array.from("Developer"));
console.log(Array.from({Name: "JavaScriprt"}));

console.log();
let num1=100;
let num2=200;
let num3=300;

console.log(Array.of(num1,num2,num3));












