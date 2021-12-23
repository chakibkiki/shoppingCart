// Examine the Dom
// console.dir(document)
// console.log(document.URL)
// console.log(document.title)

//Get element by ID
 const headerTitle = document.getElementById('header-title')
 console.log("headerTitle: ", headerTitle)
 headerTitle.textContent = "Hello"
 headerTitle.innerHTML = '<h4>Hello chakib kiki </h4>'
 headerTitle.style.borderBottom = 'solid 2px #000'
 

//Get elemenet by class Name
const items = document.getElementsByClassName('list-group-item')
console.log("items: ", items)
console.log("items[0]: ", items[0])
//changer le texte du deuxieme element en hello 2
items[2].textContent = "chakib kiki"
//changer la couleur du 2eme element
items[2].style.color = "red"
//Get elemenet by class Name



//Get element by tag name
const liElement = document.getElementsByTagName('li')
console.log("li: ", liElement)
liElement[3].textContent = "element changed"
liElement[3].style.backgroundColor = "blue"

//Query selector : get one element by id or class or tag
// #: id  . class
let header = document.querySelector('#main-header')
console.log("header: ", header)
header.style.borderBottom = "solid 6px orange"

let title = document.querySelector(".title")
console.log("title: ", title)

const inputItem = document.querySelector('input')
console.log("inputItem: ", inputItem)

//Query selector all: get many elements

let titles = document.querySelectorAll('.title')
console.log("titles: ", titles)


//events
let button = document.querySelector('#button')
console.log("button: ", button)
button.addEventListener('click', buttonClick)

let container = document.querySelectorAll(".container")
console.log("container: ", container)

function buttonClick(event) {
    console.log("Button clicked")
    //change header-title text
    headerTitle.textContent = "Changed"
    //change main background color
    document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    container[0].style.backgroundColor = "blue"

}


