// Function assigned to a variable.

function product(x, y){
    return x * y
}

let multiplyTwoNumbers = product
// console.log(multiplyTwoNumbers(3,4))

let rectangleArea = product
// console.log(rectangleArea(4, 5))

//playing a game of two rounds.
// Final score = Score of round#1 * Score of round#2

let calculateFinalScore = product
// console.log(calculateFinalScore(3, 7)) // clear context


let rArea = function (x, y){
    return x * y
}

// console.log(rArea(5,2))


// Function passed as a parameter

function greet(callback){
    callback()
}

function sayHello(){
    console.log("Hello")
}

function sayHola(){
    console.log("Hola")
}

// greet(sayHello)
// greet(sayHola)

// Second example - function passed as a parameter.

function filterNumbers(numbers, filterLogic){
    let filterdNumbers = []
    for(number of numbers){
        if (filterLogic(number)){
            filterdNumbers.push(number)
        }
    }
    return filterdNumbers
}

function even(number){
    return number % 2 == 0
}

function odd(number){
    return number % 2 != 0
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// evenNumbers = filterNumbers(numbers, even)
// console.log(evenNumbers)

// oddNumbers = filterNumbers(numbers, odd)
// console.log(oddNumbers)


// code to filter prime numbers.
function prime(number){
    if (number <= 1){ //1 is not a prime number. 2 is the smallest prine number
        return false
    }
    else if (number <= 3){ //2 and 3 are prime numbers numbers. Doing an explicit check
        return true
    }
    else if (number % 2 == 0){ //Weeding out all the even numbers here
        return false
    }
    else{ //logic to check a prime number
        let limit = parseInt(Math.sqrt(number))
        for(let i = 3; i <= limit; i+=2){
            if (number % i == 0){
                return false
            }
        }
        return true
    }
}

primes = filterNumbers(numbers, prime)
console.log(primes)


 // Prime numbers test code.
 // Generate a random integer from a given range. 
function randomNumberInt(min, max){
    minInt = Math.ceil(min)
    maxInt = Math.floor(max)
    return Math.floor((Math.random() * (maxInt - minInt)) + minInt)
}

let primeNumbers = []
for (let i = 0; i < 100; i++){
    let number = randomNumberInt(1, 999)
    if (prime(number)){
        primeNumbers.push(number)
    }
}
// console.log(primeNumbers)

