let currentDate = new Date();
console.log(currentDate.toString());

let date1 = new Date(2023, 0, 23);
let date2 = new Date(2023, 0, 23, 5, 3);
let date3 = new Date("2023-01-14");
let date4 = new Date("01-14-2023");

console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());

let timeStampNow = Date.now();
console.log(timeStampNow);
console.log(date4.getTime());
console.log(Math.floor(timeStampNow / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

newDate.setFullYear(2025);
newDate.setMonth(6);
newDate.setDate(15);
console.log(newDate.toLocaleString());

console.log(newDate.toLocaleString());
console.log(newDate.toDateString());
console.log(newDate.toTimeString());

let formattedDate = newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
});
console.log(formattedDate);

console.log(newDate.toISOString());
console.log(newDate.toUTCString());
