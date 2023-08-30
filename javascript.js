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

// //coding challenge remove odd numbers from array
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

//oject literal
var student = {
    name:'John',
    score: 89,
    contact: '0213456789'
}

let petrolEngine ={
    capacity:2000,
    bhp:299,
    torque:450
}

let car = {
    name:'ABC',
    price:40000,
    engine:petrolEngine
}
//changing values in objects
// student.score = 99
// student["name"] = 'Rob'

console.log(delete student.address)
if (student.score){
    console.log(student.score)
} else{
    console.log('Property does not exist')
}

