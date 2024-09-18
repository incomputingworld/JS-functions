// WRite a function 'multiplier'. This function will receive a number 'n' as a parameter.
// And returns a function that multiplies a given number (passed as parameter) with 'n' and returns the result

function multiplier(n){
    function multiply(x){
        return n * x
    }
    return multiply
}

let tripple = multiplier(3)
console.log(tripple(3))

let quad = multiplier(4)
console.log(quad(6))

// Re-write the inner function as an anonymous function.

function multiplier1(n){
    return function(x) {
        return n * x
    };
}
let double = multiplier1(2)
console.log(double(6))

// Write a function 'createRange'. this function should take two parameters.
// Starting and the ending number. And return a new function. 
// This new function, should return the next number in the range.
// Once it reaches the ending number, the function should return 'undefiend'

function createRange(start, end){
    let current = start
    function range(){
        if (current <= end){
            return current++
        }
        else{
            return undefined
        }
    }
    return range
}

let tenRange = createRange(0, 10)
console.log(tenRange())
