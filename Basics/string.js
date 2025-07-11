const Name="Rahul"
console.log("Name:",Name)

const Surname=' Chatterjee'
console.log("Surname:",Surname)

const Full_name=Name+Surname
console.log("Full name:",Full_name) //This is an old type... not accepted
console.log(`Official name: ${Name}${Surname}`) //This a better representation...

console.log()
const name="rahul"
console.log(name+"-chaterjee-"+27) 


console.log()
const gamename=new String('Zenith')
console.log(gamename)
console.log(gamename.__proto__)
console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(4))
console.log(gamename.indexOf('i'))

console.log()
const new_gamename=new String('Zenithretrofc');
console.log(`Changed portion: ${new_gamename.substring(6,12)}`);
console.log(`Changed portion: ${new_gamename.slice(-7,12)}`); //Here only -ve index allowed... 

console.log()
const book="       Murder Mystrey of Wahington DC         " //Space is malfunctioning
console.log(book)
console.log(book.trim())

console.log()
const url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
console.log(url)
console.log(url.replace("en-US","IND"))
console.log(url.includes("developer"))
console.log(url.includes("Brave Browser"))


console.log()
const location="Near_Delhi_metro_Station"
console.log(location.split("_"))
