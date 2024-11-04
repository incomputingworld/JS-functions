// 1. Write a generator function that takes a starting number and increments it infinitely.
// In case a user does not mention a starting number take Zero (0) as a default value.
function * infiniteCounter(start=0){
    let count = start
    while(true){
        yield count++
    }
}
// let counter = infiniteCounter(1)
// console.log(counter.next()) // outputs - { value: 1, done: false }
// console.log(counter.next()) // outputs - { value: 2, done: false }
// console.log(counter.next()) // outputs - { value: 3, done: false }
// console.log(counter.next()) // outputs - { value: 4, done: false }
// console.log(counter.next()) // outputs - { value: 5, done: false }


// 2. Write a generator function that accepts an array as an argument and yields the
// elements of an array.
function * arrayIterator(arr){
    for(let element of arr){
        yield element
    }
}

// let numbers = [1, 2, 3, 4, 5]
// let numIterator = arrayIterator(numbers)
// console.log(numIterator.next()) // outputs - { value: 1, done: false }
// console.log(numIterator.next()) // outputs - { value: 2, done: false }
// console.log(numIterator.next()) // outputs - { value: 3, done: false }
// console.log(numIterator.next()) // outputs - { value: 4, done: false }
// console.log(numIterator.next()) // outputs - { value: 5, done: false }
// console.log(numIterator.next()) // outputs - { value: undefined, done: true }

// 3. Write a generator function that yields a prime number
function * primeNumber(){
    let number = 2
    while(true){
        if (isPrime(number)){
            yield number 
        }
        number++
    }
}

function isPrime(num){
    if (num < 2){
        return false
    } 
    if (num > 2 && num % 2 == 0){ // even numbers, except 2, are not prime numbers.
        return false
    }
    let limit = Math.ceil(Math.sqrt(num))
    for(let i = 3; i <= limit; i += 2){
        if (num % i == 0){
            return false
        }
    }
    return true
}
// let nextPrime = primeNumber()
// console.log(nextPrime.next()) // outputs - { value: 2, done: false }
// console.log(nextPrime.next()) // outputs - { value: 3, done: false }
// console.log(nextPrime.next()) // outputs - { value: 5, done: false }
// console.log(nextPrime.next()) // outputs - { value: 7, done: false }
// console.log(nextPrime.next()) // outputs - { value: 11, done: false }
// console.log(nextPrime.next()) // outputs - { value: 13, done: false }
// console.log(nextPrime.next()) // outputs - { value: 17, done: false }
// console.log(nextPrime.next()) // outputs - { value: 19, done: false }
// console.log(nextPrime.next()) // outputs - { value: 23, done: false }
// console.log(nextPrime.next()) // outputs - { value: 29, done: false }


// 4. Write a generator function that yields a factorial starting from 1
function * factorialGenerator(){
    let num = 1
    let result = 1
    while (true){
        result *= num
        num++
        yield result
    }
}
// let factorial = factorialGenerator()
// console.log(factorial.next()) // outputs - { value: 1, done: false }
// console.log(factorial.next()) // outputs - { value: 2, done: false }
// console.log(factorial.next()) // outputs - { value: 6, done: false }
// console.log(factorial.next()) // outputs - { value: 24, done: false }
// console.log(factorial.next()) // outputs - { value: 120, done: false }