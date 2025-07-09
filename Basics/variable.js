const accountId_1=12345
let emailId="Employ1_intern@gmail.com"
var password="9*6@4#7&3+4_6-9"
city="Delhi"

// accountId=2 --> this is not the way to declare any contsant type variable...

console.log(accountId_1)
console.log(emailId)
console.log(password)
console.log(city)

const accountId_2=12346
emailId="Employ2_intern@gmail.com"
var password="6*8@4#0^3+4_6-9"
city="Pune"
let salary;

console.table([accountId_2, emailId, password, city, salary])

// Refer not to use 'var' due to some block scope abnd functional scope issue...