/* 
var variable = "Any value I've set";

var array = [1,2,3,4,5,6,7,8,9,10]
console.log(variable)

let a
a = 10
let b
b = 20
let c = null
console.log(c)

const price = 100

console.log(2*Math.PI*10)

console.log(Math.abs(20))

console.log(Math.pow(7,2))

//rounds down number
console.log(Math.floor(11.8))

console.log(Math.ceil(20.1))
*/
/*
//template literal
let a = `Apple`

let name = "John"

console.log(`Welcome to our website ${name}`)

let b = `The total value is ${10+2}`
console.log(b)

let c = `The total is ${6+2} and the average is ${(3+3+2)/2} `
console.log(typeof(a))

//type conversion
let salary = `1000`
parseInt(salary)+100
//parseFloat() for decimals
console.log(parseInt(salary)+100)
*/

// coding challenge: Discount price
let listPrice
let discountPercentage 

listPrice = 200
discountPercentage = 10


console.log(listPrice *(100-discountPercentage)/100 )

 //Area of a circle

radius = 50 
let Area = parseInt(Math.PI * radius**2)
console.log(`The are of a circle with the radius ${radius} is ${Area} squre meters`)

/*
//coditional statements
age = 15
let message

if (age>=18){
    message = `You are old enough`
}else{
    message = `You are not old enough`
}
console.log(message)
let login = true

if(login==true){
    console.log('Allowed')
}else{
    console.log("Not logged in")
}
////'////////////////////////////////////////////
//else is statements
age =20
if (age>=18){
    console.log("Can apply for drivers")
} else if(age>=16){
    console.log("Can apply for learners")
} else{
    console.log("Too young")
}
///////////////////////////
nested if statements
let age =19
let percentage =69

if (age>18){
    if (percentage>70){
    console.log("You are qualify")
    } else{
        console.log("You are older than 18 but you dont qualify")
    }
}else{
    console.log("You are not qualified your age is <18")
}
*/
//switch statement
let day = 1
switch(day){
    case 1: console.log("Monday")
    break
    case 2: console.log("Tuesday")
    break
    case 3: console.log("Wednesday")
    break
    case 4: console.log("Thursday")
    break
    case 5: console.log("Friday")
    break
    case 6: console.log("Saturday")
    break
    case 7: console.log("Sunday")
    break

}
