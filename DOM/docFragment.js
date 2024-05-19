/*//allows for better performance when using fragment
// declaring fragment to be used
let fragment = new DocumentFragment()


let heading = document.createElement('h1')
heading.textContent = 'Main heading'

let subHeading = document.createElement('h2')
subHeading.textContent = 'Sub Heading'

// adding children to parent 
fragment.appendChild(heading)
fragment.appendChild(subHeading)

// adding fragment to body
//appendChild only works with 1 element
document.body.appendChild(fragment)
*/
// /////////////////////////////////////////////////////////////
//insert before  
let parent = document.querySelector('ul')

//code on
//parentNode.insertBefore(newNode,existingNode)

//gets first li tag
let existingNode = document.querySelector('li')
//creates tag to be added
let newNode = document.createElement('li')
//adds text to the tag
newNode.textContent = 'Soft drink'

//adds tag to ul, first new tag to be added(newNode)
//then, the existing tag(existingNode)
//can manipulate method to output it second
parent.insertBefore(newNode,existingNode.nextSibling)

//append - add multiple children to parent node
let item1 = document.createElement('li')
item1.textContent = 'Apple'

let item2 = document.createElement('li')
item2.textContent = 'Mango'

let item3 = document.createElement('li')
item3.textContent = 'Watermelon'
//works with multiple children
parent.append(item1, item2, item3)
//prepend
//adds it to the beginning