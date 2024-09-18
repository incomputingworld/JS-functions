// Function returning a function - example
let someString = "Testing Scope"
function outer(){
    let message = "Hello World"
    function inner(){
        console.log(message, someString)
    }
    return inner
}

let funcRef = outer()
// funcRef()


// function customization 
function logMessage(prefix, message){
    return `${prefix}: ${message}`
}
// Repeat of prefix. Possibility of mistake of adding incorrect prefix
// console.log(logMessage("INFO", "Info message"))
// console.log(logMessage("INFO", "Another Info message"))
// console.log(logMessage("ERROR", "Error message"))

// composing a function, which takes care of prefix. Returns a function that accepts a message.
function logMessageCreator(prefix){
    // function logMsg(message){
    //     return `${prefix}: ${message}`
    // }
    // return logMsg
    return function (message){
        return `${prefix}: ${message}`
    }
}

// const infoMsg = logMessageCreator("INFO")

// console.log(infoMsg("Info Message"))
// console.log(infoMsg("Another Info Message"))

// Another example of function customization

function greet(person){
    return `Hi! ${person}`
}

// console.log(greet("Sunil"))

//Customizing greet function. 
function excitedGreeting(greetFunction){
    function funcGreet(person){
        return greetFunction(person).toUpperCase()
    }
    return funcGreet
}

// const excitedGreet = excitedGreeting(greet)
// console.log(excitedGreet("Amit"))


// storing functions in a data structure - array

function add(x, y){
    return x + y
}

function subtract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}

let calculations = [add, subtract, multiply, divide]

calculations.push(function power(x, y){
    return x**y
})

console.log(calculations)

function randomNumberInt(min, max){
    minInt = Math.ceil(min)
    maxInt = Math.floor(max)
    return Math.floor((Math.random() * (maxInt - minInt)) + minInt)
}

let index = randomNumberInt(0, 5)
console.log(`${calculations[index].name} - ${calculations[index](10, 5)}`)

