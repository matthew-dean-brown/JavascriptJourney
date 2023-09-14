
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
/*
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
*/
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
//else if statements
age =20
if (age>=18){
    console.log("Can apply for drivers")
} else if(age>=16){
    console.log("Can apply for learners")
} else{
    console.log("Too young")
}
///////////////////////////////////////////////////////

*/

// let counter = 0
// while (counter<5){
//     console.log("Hello World " + counter)
//     counter++
// }

// do{
//     console.log("Hello Worlds")
// } while(counter <5){

// }

// // coding challenge// nested conditional statements

// let highschoolMark = 60
// let AviationMark = 70
// let age = 15
// if (highschoolMark>=50){
//     if (AviationMark>=70){
//         if(age>=18){
//             console.log("You qualify for a commercial pilot license")
//         } else if(age>=17){
//             console.log("You qualify for a private pilot license")
//         } else if (age>=16){
//             console.log("You qualify for a student pilot license")
//         } else {
//             console.log("You are too young to qualify")
//         }
//     } else{
//         console.log(`Your highschool mark was good, however the aviation exam mark was not higher than 70%`)
//     }
// } else {
//     console.log("Your Highschool mark did not meet the minimum requirement, 50%")
// }

// //coding challenge// printing multiples of number using while, do while, and forr loop
// let num3 = 1
// let num7 = 1

// while(num3<11){
//     console.log(`3 x ${num3} = ${3*num3}`)
//     num3++
// }
// do{
//     console.log(`7 x ${num7} = ${7*num7}`)
//     num7 ++
// } while(num7< 11)

// for (let x=1; x<11;x++){
//     console.log(`9 x ${x} = ${x*9}`)
// }

// //coding challenge
// //array of random numbers
// var array = [20,21,22,23,24,25,26,27,28,29]

// //checks if numbers are odd then removes them from the array
// for(let i =0;i<array.length;i++){
//     if (array[i] % 2 != 0 ){
//            array.splice(i,1)
//     } else{
//         continue
//     }
// }
// //prints the array which only has even numbers
// console.log(array)

//spread operator joining array at specific locations
// let fruits = ['apple','mango','Banana','peach']
// let allFruits = ['pinapple',...fruits,'guava']

// console.log(allFruits)


//using for of loop
// let fruits = ['apple','mango','Banana','peach']

// for(let fruit of fruits){
//     console.log(fruit)
// }

//////////////////////////////////////////////////////////////////////////////////////
// let fruits = ['apple','mango','banana','peach']
// //adds to the end of array .push('item to be added')
// // fruits.push('orange')
// // fruits.push('watermelon')
// // //removes item at the end of array
// // fruits.pop()
// // let poppedFruit = fruits.pop()
// // //removes item from beginning of array
// // let shifted = fruits.shift()

// // //adss to beginning of array
// // fruits.unshift('watermelon')

// //removes element at specific position in array
// fruits.splice(fruits.indexOf('banana'),1)
// console.log(fruits)

//concat method
// let foodPrices = [1,2,3,4,5]
// let suppliesPrices = [6,7,8,9]

// let allPrices = foodPrices.concat(suppliesPrices)

// let names = ['John','Tom','Harry']
// let numbers = [1,2,3,4]
// let bool = [true, false]
// let all = names.concat(numbers).concat(bool)
// console.log(all)

////////////////////////////////////////////////////////////////////////////
//reverse() and join()
// let names = ['John','Tom','Harry']
// names = names.join('')


// let names = 'John'
// //split() makes value into an array at specified point
// names = names.split('')
// //reverse() reverses the order of the split values
// names.reverse()
// //join() removes  ',' and changes it from array to specified string
// names = names.join('')
// names = names.split('').reverse().join('')
// console.log(names)

////////////////////////////////////////////////////////////////////////////////////////
//oject literal
// var student = {
//     name:'John',
//     score: 89,
//     contact: '0213456789'
// }
/*
let petrolEngine = {
    capacity: 2000,
    bhp: 299,
    torque: 450
}

let car = {
    name: 'ABC',
    price: 40000,
    engine: petrolEngine
}
*/
//changing values in objects
// student.score = 99
// student["name"] = 'Rob'

//returning a value of true even deleting property in object
// console.log(delete student.address)
// if (student.score) {
//     console.log(student.score)
// } else {
//     console.log('Property does not exist')
// }

/*
//serialising objects
var student = {
    name: 'John',
    score: 89,
    contact: '0213456789'
}
// changes object into a sting, storing info in database
let studentString = JSON.stringify(student)
//changing information from string to object so we can manipulate
console.log(JSON.parse(studentString))
*/
//////////////////////////////////////////////////////////////////////////////////
// functions
/*
function welcomeUser(name, number) {
    console.log(`Hello ${name}, welcome to the website`)
    console.log(`You are visitor number ${number}`)
}

welcomeUser("John", 1)
welcomeUser("Jake", 2)

//area of a circle in a function
function areaOfCircle(radius) {
    let area = Math.PI * radius ** 2
    console.log(area)
}

areaOfCircle(10)
areaOfCircle(20)


function totalMarks(phy, chem, math) {
    let total = phy + chem + math
    return total
}
//could also call total marks right inside to console

function percentage(total) {
    let per = total / 600 * 100
    console.log(per)
}

// let result = totalMarks(150, 140, 190)
percentage(totalMarks(150, 140, 190))
////////////////////////////////////////////////////////////////////////////////
//function expression-- function thats assigned to variable
let heyThere = function () {
    console.log('hey there')
}
let sum = function (a, b) {
    return a + b
}
let result = sum(10, 20)
console.log(result)
//////////////////////////////////////////////////////////////////////////////////////
//arrow functions, always use const when making arrow or essprion function
const hello = () => {
    console.log('hello there')
}
hello()

//when making use of compact arrow functions, you are
//able to write them without curly braces
const hi = () => "hi there"
const add = (a, b) => a + b
//taking it a step further
//if no parameters use brackets
const displayPi = a => 3.14

const area = r => 3.14 * r ** 2
console.log(area(5))
//////////////////////////////////////////////////////////////////////////
//nested functions functionsd inside other functions
function calculateAverage(a, b, c) {
    const calculateTotal = (a, b, c) => a + b + c
    return calculateTotal(a, b, c) / 3
}

console.log(calculateAverage(10, 20, 30))
*/

//function---is on its own, not associated with any object
//method--- is somnething associated with the property of an object
//method
var student = {
    name: 'John',
    marks: 90,
    //function is now a method 'sayHi()' of student
    sayHi: function () {
        //use this keyword to access info inside object
        console.log('Hi there ' + this.name)
    }
}
student.sayHi()

//////////////////////////////////////////////////////////////
//hoisting--allows calling the function before its made
displayName()
function displayName() {
    console.log('John')
}
//////// only works with function declaration and not initialisation so NOT console.log(cat), var cat, cat=10
cat = 10
console.log(cat)
var cat
/////////doesn't work with function expressions
sayHi()//doesnt work
let sayHi = function () {
    console.log(sayHi)
}