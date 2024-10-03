
//// Arrow function
const greet = () =>{
    console.log("Hello There")
}
// greet()

//// Arrow function with one single statement. Can omit curly braces "{}"
const greet1 = () => console.log("How are you")
// greet1()

//// Arrow function with one single expression. Can omit curly braces "{}"
//// and implicitly returns the output
const doubleIt = x => x * 2
// console.log(doubleIt(5))

const add = (x, y) => x + y
// console.log(add(5, 10))

//// Arrow function with multiple statements/expressions must have curly braces "{}"
//// and an optional return statement if required.

const divide = (x, y) =>{
    if (y == 0){
        console.log("Cannot divide by zero")
        return null
    }
    return x / y
}
// console.log(divide(10, 5))
// console.log(divide(10, 0))

//// Arrow function has no access to "this" object
const usingThis = () => {
    console.log(this)
}
// usingThis()

//// Lexical context
function outerFunc(){
    let message = "test message"
    return () => console.log(message)
}
// const arrowFuncLexContext = outerFunc()
// arrowFuncLexContext()

//// Lexical context - this object
function outer(){
    return () => console.log(this)
}
const arrowFuncLexThis = outer()
// arrowFuncLexThis()

//// Arrow function has no arguments object. Compensate with REST operator.

const arrowArgs = (...args) => {
    console.log(args)
    // console.log(arguments)
}
// arrowArgs(1, 2, 3, 4, 5)
// console.log(arguments)

//// IIFE
// (function () {
//     console.log("Hey There")
// })();

//// IIFE with parameters
// (function (name, message){
//     console.log(name, message)
// })("Sunil", "How are you");

//// IIFE that returns a value
// let result = (function (x, y){
//     return x + y
// })(5, 10)
// console.log(result)

//// IIFE - arguments object
// (function (){
//     console.log(arguments)
// })(1, 2, 3, 4, 5);

//// IIFE - this object
// (function (){
//     console.log(this)
// })();


//// IIFE - closure
const testClosure = (function (){
    let message = "Test Message"
    return {
        showMessage: function (){
            console.log(message)
        },
        setMessage: function (newMessage){
            message = newMessage
        }
    }
})();
// testClosure.showMessage()
// testClosure.setMessage("How are you")
// testClosure.showMessage()

///////////////////////////////////////////////////////////////////////////////////////
// (() =>{
//     console.log("Hello There")
//     console.log(this)
// })();

let cube = (x) => x * x * x
// console.log(cube(3))
let cube1 = x => {return x * x * x}
// console.log(cube1(3))
let cube2 = x => x * x * x
// console.log(cube2(3))

// Lexical context - this object
function testArgs(args){
    return (args) => console.log(arguments)
}

// const arrowArguments = testArgs(1, 2, 3)
// arrowArguments(1, 2, 3, 4, 5)
////////////////////////////////////////////////////////////////////////////////////////
//// Comparing functions - Function Syntax

// function functionName (params) {
//     // function body
// }

// const functionName = function (params){
//     // function body
// }

// const functionName = (params) => {
//     // function body
// }

// (function (params){
//     console.log('IIFE - ', arguments)
// })(1, 2, 3, 4, 5, 6, 7);


//// Comparing functions - Closure example
function logTemplate(prefix){
    return function (message) {
        console.log(`${prefix}: ${message}`)
    } 
}
const infoLogger = logTemplate("INFO")
// infoLogger("Sample message") // Outputs - INFO: Sample message


//// Comparing functions - hoisting example
// No error. Function declaration is hoisted
// testHoisting()

function testHoisting(){
    console.log("Hi! There")
}

// // Error. Function expression is not hoisted.
// testHoistingAgain() 

const testHoistingAgain = function (){
    console.log("Hi! There")
}

//// Comparing functions - arguments object

// arrow function using REST
const arrowDivide = (x, y, ...args) => {
    if (y == 0){
        console.log("Cannot divide by zero")
        return null
    }
    console.log("arrowDivide using args - ", args)
    return x / y
}
// arrowDivide(10, 5, 5, 5, 5, 5, 5)

function regDivide(x, y){
    console.log("regDivide - ", arguments)
}
// regDivide(20, 5, 2, 2, 2, 2, 2)

const expDivide = function(x, y){
    console.log("expDivide - ", arguments)
}
// expDivide(20, 5, 3, 3, 3, 3, 3 )


//// Comparing functions - This context

// function declaration
function showThisFunc(){ 
    console.log(this)
}
// showThisFunc()

// function expression
const showThisExp = function (){ 
    console.log(this)
};
// showThisExp()

// IIFE
// (function (){ 
//     console.log(this)
// })();
// console.log(this);

// This context - arrow functions
const showThisArrow = () => {
    console.log(this)
}
// showThisArrow() // Outputs {}

function outer(){
    return () =>{
        console.log(this)
    }
}
const arrowWithContext = outer()
// arrowWithContext()

// Comparing functions - call, bind and apply - examples
function greet11(message){
    console.log(`Hi! ${this.name}, ${message}`)
}
// greet11.call({name: "Sunil"}, "How are you") // Hi! Sunil, How are you

// greet11.apply({name: "Rahul"}, ["How are you"])

const greetAmit = greet11.bind({name: "Amit"},["How are you"])
// greetAmit()

// Comparing functions - function expression
const add1 = function (x, y) {
    return x + y
}    
// console.log(add1(5, 10))

// Function expression - passed as parameter
function calculator(calc, x, y){
    return calc(x, y)  
}
// console.log(calculator(add1, 10, 30))
    
result = calculator(function (x, y){
    return x - y 
}, 20, 10)
// console.log(result)

// Conditional creation
let myFunc
condition = true
if (condition) {
    myFunc = function() {
        console.log("Condition met!") 
    }
} 
else {
    myFunc = function() {
        console.log("Condition not met!") 
    }
}

// myFunc(); // Executes based on the condition


// Arrow function - lexical binding
// Lexical binding
const numCounter = {
    value: 0,
    getValue: function () { 
        return this.value 
    },
    decrement: () => { // avoid using arrow function as method
        this.value -= 1   
    },
    increment: function () { // lexical binding example of this in an arrow function
        const inc = () => {  
            this.value += 1 
        } 
        inc() 
    }
}
// console.log(numCounter.getValue()) // outputs 0
// numCounter.increment() // value = 1
// numCounter.increment() // value = 2
// numCounter.increment() // value = 3
// console.log(numCounter.getValue()) // outputs 3
// numCounter.decrement() // no effect on value attribute
// console.log(numCounter.getValue()) // outputs 3


// IIFE use cases - global scope pollution
const privateMessage = (function (){
    let message = "Private. within IIFE"
    return {
        showMessage: function (){
            console.log(message)
        },
        updateMessage: function (newMessage){
            message = newMessage
        }
    }
})(); //message is not directly accessible here.
// privateMessage.showMessage()
// privateMessage.updateMessage("Hola! if you hear me")
// privateMessage.showMessage();

// Example of initialization
(function (){
    // initializeLogging("log file details")
    // connectToDataBase("with required configuration details")
})();

// Create one instance of an object
const counter = (function(base=0){
    let value = base
    return {
        increment: function (){ return ++value },
        decrement: function (){ return --value },
        value: function()     { return value   }
    }
    })(10);
// console.log(counter.value())  // outputs - 10
// console.log(counter.increment())  // outputs - 11
// console.log(counter.increment())  // outputs - 12
    