// What it takes for a function to be a first-class citizen? Recall all the 4 points

/* For a function to be a first class-citizen it can be...
1. assigned to a variable.
2. passed as a parameter to a function.
3. Returned as a result of a function.
4. Can be stored in a data structure.
*/

// Write a higher-order function that accepts another function as a parameter and execute function passed as a parameter.
function outerFunction(callback){
    callback()
}

function hellowWorld(){
    console.log("Hello World")
}
outerFunction(hellowWorld)

// Write a fuunction and assigin this to a variable. Execute the function using the variable name. 
// The function should accept a parameter.

function greetMessage(message){
    console.log(message)
}

let greetInEnglih = greetMessage // example of context-appropriate name
greetInEnglih("Hello")

let greetInHindi = greetMessage // example of context-appropriate name
greetInHindi("Namaskar")

// Write a function that accepts an array of numbers and a callback function that doubles each number of the array.
// The function should return a new array of updated numbers.

function workWithNumbers(numbers, workLogic){
    let updatedNumbers = []
    for (number of numbers){
        updatedNumbers.push(workLogic(number))
    }
    return updatedNumbers
}

function double(number){
    return number * number
}

numbers = [1, 2, 3, 4, 5]
console.log(workWithNumbers(numbers, double))

// Write a function that sorts an array in descending order. For this you will use the sort() that JS provides.
// The sort() is one of the higher-order function that JS provides. You have to write the inner function that 
// implements the sorting logic. The inner function should accept two parameters. These  are two numbers from the array to compare.

function descending(x, y){
    return y - x
}
unsortedArray = [4, 1, 7, 4, 8, 2, 0, 7, 1, 6]
console.log(unsortedArray.sort(descending))


// Write a function that accepts a function as a parameter. Write the inner function using a function expression instead of writing a 
// separate function. 

function outerFunction(innerFunction){
    innerFunction()
}

outerFunction( function (){
    console.log("Hey There")
})

// Write a higher-order fucntion convert. This function converts length from one unit of measurement to the other and returns the 
// converted length. This function will accept 2 parameters. First is the length and seond is the coversion function. 
// Write the conversion function as an inner function. 

function convert(len, conversion){
    return conversion(len)
}

function cmToInch(len){
    return len / 2.54
}
function inchToCm(len){
    return len * 2.54
}

console.log(convert(100, cmToInch))
console.log(convert(39.37, inchToCm))