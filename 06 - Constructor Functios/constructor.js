const sizeof = require('object-sizeof')

// Object in JS
// const sunil = {
//     "name": "Sunil",
//     "age": 35,
//     showDetails: function (){
//         console.log(`My name is ${this.name} and I am ${this.age} year old.`)
//     }
// }
// sunil.showDetails()

// Example of another object in Js
// const ravi = {
//     "name": "Ravi",
//     "age": 35,
//     showDetails: function (){
//         console.log(`My name is ${this.name} and I am ${this.age} year old.`)
//     }
// }
// ravi.showDetails()


// Constructor function 
// function Person(name, age){
//     this.name = name
//     this.age = age
//     this.showDetails = function(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// New object - using new keyword with constructor function
// const amit = new Person("Amit", 35)
// amit.showDetails()

// New object - without using new keyword with constructor function
// const gaurav = Person("Gaurav", 35)
// console.log(gaurav)
// console.log(gaurav.age)


// new.Target - usage
// function CheckNewTargetValue(){
//     if (!new.target){
//         console.log("Please use 'new' keyword")
//     }
// }
// x = new CheckNewTargetValue()
// console.log(x) // Creates an empty object
// console.log("")
// x = CheckNewTargetValue()
// console.log(x) // shows value undefined


// Constructor function with return statement
// User defined object. Use this to object to return from a constructor function.
// const sunil = {
//     "name": "Sunil",
//     "age": 35,
//     showDetails: function (){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// Constructor function - returns an object
// function NewPerson(name, age){
//     this.name = name
//     this.age = age
//     this.show = function(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
//     return sunil // returns sunil object instead of newly created object.
// }
// const dileep = new NewPerson("Dileep", 30)
// dileep.showDetails()
// dileep.show() // throws an error

// Constructor function returns a value
// function NewPerson1(name, age){
//     this.name = name
//     this.age = age
//     this.show = function (){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`)
//     }
//     return true
// }
// const gaurav = new NewPerson1("Gaurav", 30)
// const sameer = new NewPerson1("Sameer", 30)
// gaurav.show()
// console.log(gaurav) // outputs - NewPerson1 { name: 'Gaurav', age: 30, show: [Function (anonymous)] }
// console.log(sameer) // outputs - NewPerson1 { name: 'Sameer', age: 30, show: [Function (anonymous)] }
// console.log(sizeof(gaurav))


// Size of an object with and without methods
// function PersonWithNoMethods(name, age) {
//     this.name = name
//     this.age = age
// }
// const kapil = new PersonWithNoMethods("Kapil", 33)
// console.log(kapil) // outputs - PersonWithNoMethods { name: 'Kapil', age: 33 }
// console.log(sizeof(kapil)) // outputs - 25


// Prototype property 
// function Player(name, sport, rank){
//     this.name = name
//     this.sport = sport
//     this.rank = rank
// }

// Player.prototype.show = function(){
//     console.log(`I am ${this.name}. I play ${this.sport} and my rank is ${this.rank}`)
// }

// const ushaM = new Player("Usha Mehra", "cricket", 21)
// ushaM.show()


// Classes - usage of Constructor/Prototype pattern
// class MyPlayer{
//     constructor(name){
//         this.name = name // part of constructor function.
//     }
//     show(){
//         console.log(this.name)
//     }
// }
// let vk = new MyPlayer("Vinod")
// vk.showName() // executes the function.
// console.log(vk) // outputs - MyPlayer { name: 'Vinod' }




