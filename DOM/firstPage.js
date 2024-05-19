// gets element by class name
let list = document.querySelector('.item-list')
// return first tag in list
list.firstElementChild
// returns last tag in list
list.lastElementChild
// returns tags with text
list.childNodes
// returns tags only
list.children

// gets first tage using query selector
// let current = document.querySelector('li')
// // gets next sibling(next item in list)
// let nextSibling = current.nextElementSibling

// loop prints out tags as long as nextSibling is true/exists
// while(nextSibling){
//     console.log(nextSibling)
//    nextSibling = nextSibling.nextElementSibling
// }

// creates element tags
let element = document.createElement('div')
//sends text into div tag
element.innerHTML = '<h1>This is a heading</h1>'
//adds div to the body tag in HTML page
document.body.appendChild(element)

// creates element
let subHeading = document.createElement('h2')
// sets information to the h2 tag
subHeading.textContent = 'This is a subHeading'
//adds h2 tag to body of HTML page
document.body.appendChild(subHeading)

//creates a li tag
let listItem = document.createElement('li')
//adds info to tag
listItem.textContent = 'item 1'
//gets the tag to add info to 
let newList = document.querySelector('ol')
//adds info to ordered list
newList.appendChild(listItem)

//Document fragment is a copy of DOM