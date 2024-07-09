// Introduction to fuctions

// Write a function that prints "Welcome to the Jungle"
function welcome(){
    console.log("Welcome to the Jungle")
}
welcome()

// Write a function, name it "printParam", that accepts a parameter and print the parameter value. 
// Call the function with a string value "Welcome to the Jungle"
function printParam(param){
    console.log(param)
}
printParam("Welcome to the Jungle")

// Call the function "printParam" with no argument. Observe the ouput of the console.log statement. 
// Recall the reason of the output.
printParam()

// Call the function "printParam" with 2 arguments. Observe the ouput of the console.log statement. 
// Find the reason of the given output. Recall parameter mapping.
printParam("Welcome!", "How are you")


// Write a function, name it "funcWithTwoParams", that accepts more than accepts 2 paramters.
// Assign any default value to the second paramter. Call the function by passing 1 argument.
// Observe the output of the function. Recall why you see the default message.
function funcWithTwoParams(userName, greeting = "How are you?"){
    console.log(`${userName}, ${greeting}`)
}
funcWithTwoParams("Amit")

// Call the function "funcWithTwoParams" with 2 arguments. Give your own greeting message.
// Observe the outptu of the function. Recal why you did not see the default message
funcWithTwoParams("Amit", "Welcome to the club")

// Call the function "funcWithTwoParams" with 0 arguments and observe the output. 
// Recall the reason for the output you got.
funcWithTwoParams()

// Will it be possible to change the greeting message without passing the "userName" argument?
// Try it. Observe the output and write the reason.

// Write a function has no return statement. Check what value does this function returns. 
// Print the return value.
function funcWithNoReturnStatement(){
    console.log("Hi! There")
}

returnValue = funcWithNoReturnStatement()
console.log(returnValue)


// Write a function that prints "How are you" and has a return statement. 
// Check what value does this function returns. Print the return value.
function funcWithReturnStatement(){
    console.log("How are you")
    return
}

returnValue = funcWithReturnStatement()
console.log(returnValue)


// Write a function that rturns true. Capture the return value in a variable and print the return value.
function funcReturnsTrue(){
    return true
}

returnValue = funcReturnsTrue()
console.log(returnValue)

// Write a function that returns numbers from 1 to 5. Pack these in an array and return the array.
function returnNumbers(){
    arr = [1, 2, 3, 4, 5]
    return arr
}
console.log(returnNumbers())

// Try to execute the function without mentioning the "()" after the function name. 
// Find the reason why "()" are important to execute a function.
printParam



// Few practice questions
// Write a function "isEven" that accepts a number as a parameter. 
// The function should return true if the number is even. Otherwise the function should return false.
function isEven(num){
    if (num % 2 == 0){
        return true
    }
    return false
}
console.log(isEven(4))
console.log(isEven(1))

// Try to re-write the function "isEven" in one line.
function isEvenInOneLine(num){
    return (num % 2 == 0)
}
console.log(isEvenInOneLine(4))
console.log(isEvenInOneLine(1))


// Write a function "isOdd" that accepts a number as a parameter. 
// The function should return true if the number is even. Otherwise the function should return false
function isOdd(num){
    return (num % 2 != 0)
}
console.log(isOdd(4))
console.log(isOdd(1))

// Write a function "concatenate" that accepts two string parametners. The function concatenates the 
// two strings and returns the concatenated string.
function concatenate(strn_1, strn_2){
    let concatenatedString = strn_1 + strn_2
    return concatenatedString
}
console.log(concatenate("Welcome! ", "How are you."))

// Write a function "findFirstChar" that accepts 2 parameters. First parameter is a string.
// Second paramter is a character. The function must return the index when the character is found 
// in the string. If the character is not found, the function should return -1.
function findFirstChar(strn, charToFind){
    for (let i = 0; i < strn.length; i++){
        if (strn[i] == charToFind)
            return i
    }
    return -1
}
console.log(findFirstChar("Sunil", "l"))


// Write a function that accepts an array of numbers as a paramter.
// The function should check each number and return an array of even numbers from the given numbers.
function filterEvenNumbers(numbers){
    let evenNumbers = []
    for (num of numbers){
        if (num % 2 == 0){
            evenNumbers.push(num)
        }
    }
    return evenNumbers
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))