const array=[1,56,"Rahul",true,45.7,"Developer"] //Contain different types of datatypes
console.log(array);

const myarray=[21,66,8,9,2,3,16,10]
const myarray2=new Array(1,2,3,4,5,6,7,8,9,10) //No need to give []
console.log(myarray);
console.log(myarray2);
console.log(myarray2[3]); // 0 based indexing...

const book=["Thriller","Romance","Suspence","Comedy","Horror","Sci-fi","Detective"]
console.log(book)
console.log(book.length)

// Array methods-----
myarray.push(11)
console.log(myarray);
myarray.pop() //Always pop the last value
console.log(myarray);
myarray.unshift(6) //Always add element at first plase means[0]...
console.log(myarray);
myarray.shift() //Remove the unshifted   value
console.log(myarray);

console.log();
console.log(myarray.includes(66));
console.log(myarray.includes(56)); 
console.log();
console.log(myarray.indexOf(66));
            
const newarray=myarray.join()
console.log(newarray);
console.log(typeof newarray);

console.log();
const myarray1=[1,2,3,4,5]

const mynewarray=myarray1.slice(1,3) // It copies part of an array without changing it...
console.log("A ",myarray1);
console.log("A1", mynewarray);


const mynewarray2=myarray1.splice(1,3) // It changes the array by adding or removing items...
console.log("B ",myarray1);
console.log("B1 ",mynewarray2);



