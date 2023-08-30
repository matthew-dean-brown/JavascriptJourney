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
/////////////////////////////////////////
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
*/
// For loops
for (let i=0; i<5;i++){
    console.log("Hello world "+ i)
}

height = 172

if (height >= 175){
    console.log("You qualify to apply")
} else{
    console.log("You are not qualified to apply")
}

let highSchoolMark = 70
let ExamMark =80
let age =20
if (highSchoolMark>=50){
    if (ExamMark >=70){
        if (age>=18){
            console.log("You qualify to a commertial pilot license")
            if (age ==17){
                console.log("You qualify to get a private jet license")
            }else if (age ==16){
                console.log("You qualify to apply for a student pilot license")
            }else{
                console.log("You arent old enough")
            } 
        }
    } else{ 
        console.log("You dont have a high enough highschool mark")
    }
    console.log("High school mark Were not high enough")
}
=======
// var variable = "Any value I've set";

// //array
// var array = [1,2,3,4,5,6,7,8,9,10]

// console.log(2*4)

// let meme = ("Meme")

// let marks = 20
// let score = 40.56
// let temp = -5.5
// console.log(temp)

// //learning +, -, x, /divide
// let phy = 78
// let maths = 72
// let chem = 89
// let avg = (phy+chem+maths)/3

// console.log(avg)

// //learning built in maths functions
// let id = Math.random()*10
// let new_id = Math.round(id)
// console.log(new_id)

// console.log(Math.max(100,200,100,250))
// console.log(Math.min(100,200,100,250))

// let hello = "Hello"
// let world = "world"
// let name = "Matthew"
// let last_name = "Brown"

// //replcing string info with other text
// var newName = name.replace("M", "f")
// console.log(hello + ' ' + world )
// console.log(name.length)
// console.log(newName.toUpperCase() + ' ' + last_name )

// let a = "computer"
// //determining last indexing
// console.log(a.length - 1)
// //pulling certain string information from variable
// console.log(a.substring(0,4))
// console.log(a.slice(0,4))

// let names ="John, Rob, Tim, Newton"
// // seperates string into array
// array_names = names.split(',')
// console.log(array_names[1])



var Matthew = "Mathematics is my favourite subject"

var num1 = 3   
var num2 = 6
console.log(num1 / num2*num1)
