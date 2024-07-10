// Arguments object

// Write a function that prints the values of "arguments" object. Call the function with 5 arguments.
function showArgumentsObject(){
    console.log(arguments)
}

showArgumentsObject("This", "function", "gets", 5, "arguments")

// Write a function that accpets one parameter. Print the values of the areguments obhect. Call the 
// function with 5 arguments. Observe the values of arguments object.
function fucnWithParamAndShowsArgumentsObject(param){
    console.log(param)
    console.log(arguments)
}
fucnWithParamAndShowsArgumentsObject("This", "function", "gets", 5, "arguments")

// Write a function to add all the numbers passed to a fucntion using arguments object
function addNumbers(){
    let result = 0
    for(num of arguments){
        result += num
    }
    return result
}
console.log(addNumbers(1, 2, 3, 4, 5))

// Write a function that returns a maximum value from all the numbers passed to it. Use arguments object
function findMax(){
    let maxNum = 0
    for (num of arguments){
        if (num > maxNum){
            maxNum = num
        }
    }
    return maxNum
}
console.log(findMax(2, 5, 1, 6, 3, 1, 9, 4, 2))

// How an array is different from an arguments object. State the differences

// Scope of variables
// Write a function "diffVariables" that creates 4 varibles using keyword "let", "const", "var" and no 
// keyword. Debug the code and observe how these variables are declared and when these are initialized.
function diffVariables(){
    let x = 3
    const y = 4
    var z = 5
    a = 6
}

// Write a function "diffVariablesWithBlock" that creates 4 varibles using keyword "let", "const", "var" 
// and no keyword. Create a block within the function and decalare anoter set of variables using the above
// keywords. Debug the code and observe how these variables are declared and when these are initialized.
function diffVariablesWithBlock(){
    let x = 3
    const y = 4
    var z = 5
    a = 6
    {
        let x1 = 30
        const y1 = 40
        var z1 = 50
        a1 = 60
    }
}

// While debugging the function "diffVariablesWithBlock" observe which all variables are hoisted.

// Declare a few variables outside funtion an block scope. Use differnt keywords while declaring these 
// variables. Write a function "showGlobalData" which prints these variables. 
// Debug the function and observe when a closure is visible under "Varibale" during debug sessions
let x = 3
const y = 4
var z = 5
a = 6
function showGlobalData(){
    let x1 = 30
    console.log(x1)
}
showGlobalData()    

// function expression
// Write a function exprsssion that accpets two parameters and returns sum of the two numbers
let addTwoNumbers = function (x, y){
    return x + y
}

console.log(addTwoNumbers(3, 6))

// Write a function expression that returns a maximum value from all the numbers passed to it. 
// Use arguments object to iterate through the numbers
let findMaxnumber = function (){
    let maxNum = 0
    for (num of arguments){
        if (num > maxNum){
            maxNum = num
        }
    }
    return maxNum
}

console.log(findMaxnumber(1, 3, 4, 2, 7, 3, 8, 5))