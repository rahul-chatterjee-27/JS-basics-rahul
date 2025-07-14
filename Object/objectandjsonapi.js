//Object destructuring & JSON API   //node Object/objectandjsonapi.js



const course={
    name: "JS Basics",
    price: 699,
    instructor: "Rahul",
    duration: "one month"
}

//onsole.log(course.instructor); //Not a preferred method...
const {instructor}=course
console.log(instructor);

const {instructor: inst}=course //We can rename the variable too... (like instructur to inst)
console.log(inst);

//json type..

// {
//     "Name":"Rahul",
//     "Passion":"Coding",
//     "Branch":"ECE",
//     "Platform":"GitHub",
// }

[
    {},
    {},
    {},
]