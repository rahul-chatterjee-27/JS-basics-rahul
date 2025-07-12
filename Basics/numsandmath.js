// ------------------Number----------------
const price=1000
console.log(price);

const newprice={New_price:(1100)}
console.log(newprice);

console.log(price.toString())
console.log(price.toString().length)
console.log(price.toFixed(3))

const pricetag=125.50
console.log(pricetag.toPrecision(2))
console.log(pricetag.toPrecision(3))
console.log(pricetag.toPrecision(4))

const budget=100000000000000000 //A lot of zeros...
console.log(budget.toLocaleString())
console.log(budget.toLocaleString('en-IN')) //Indian formation


// ------------------Math----------------
console.log(Math)
console.log(Math.abs(-3785.88))
console.log(Math.round(-3785.88))
console.log(Math.ceil(3785.88))
console.log(Math.floor(3785.88))

console.log(Math.min(34,66,11,23,-12,0,42))
console.log(Math.max(34,66,11,23,-12,0,42))

console.log()
console.log(Math.random()) //in between 0 and 1
console.log((Math.random()*10))
console.log((Math.random()*10)+10)
console.log(Math.floor((Math.random()*10)+10))


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)



