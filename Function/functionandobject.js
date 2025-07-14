function calCartPrice(price){
    return price
}
console.log(calCartPrice(1000)); //1000
console.log(calCartPrice(1000,344,5643,11)); //1000




function cartPriceCal(...price){    //Rest operator similar like Spread
    return price
}
console.log(cartPriceCal(1000)); // [1000]
console.log(cartPriceCal(1000,344,564,123,456,31)); // [ 1000, 344, 564, 123, 456, 31 ] 



function cartPriceCal_2(val1,val2,val3,...price){    //Rest operator similar like Spread
    return price
}
console.log(cartPriceCal_2(1000)); // []
console.log(cartPriceCal_2(1000,344,564,123,456,31)); // [ 123, 456, 31 ]




 const user_detail={
    name:"Rahul",
    payment: 1000
 }

 function handle_object(anyobject){
    console.log(`${anyobject.name} has a due payment of ${anyobject.payment} rupees`);
    
 }
 //Method 1
handle_object(user_detail)
//Method 2
handle_object({
    name:"Raghav",
    payment:1999
})

const myarray=[80,90,100,200,300,400,500]

function returnSecondValue(array){
    return array[1]
}

console.log("Second value of given array is: ",returnSecondValue(myarray))


