// 1. Write a constructor function Person that has two attributes name and age.
// And one method show. Which prints a message using the two attributes. 

function Person(name, age){
    this.name = name
    this.age = age
    this.greet = function (){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

let sameer = new Person("Sameer", 35)
sameer.greet()

// 2. Write the same constructor function using the prototype property.

function Person1(name, age){
    this.name = name
    this.age = age
}

Person1.prototype.greet = function (){
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
}

let gaurav = new Person("Gaurav", 35)
gaurav.greet()