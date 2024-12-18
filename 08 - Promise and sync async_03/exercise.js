// 1. Write a sequential promise chain where the first function (executor function) resolves to a number and
// the corresponding .then methods (three in a sequence) will add 5 and the last .then method will print the 
// value. Hint: Use Math.floor() and Math.random() to generate a number between 1 to 10


function executorFunc(resolve){
    let number = Math.floor(Math.random() * 10 ) + 1
    console.log(`Resolving with number - ${number}`)
    resolve(number)
}

function addFive(number){
    return number + 5
}

// let obj = new Promise(executorFunc)
// obj.then(addFive)
//    .then(addFive)
//    .then(addFive)
//    .then(console.log)


// 2. Re-write the executor function to delay the execution by 2 seconds. And change the .then method
// by writing a function expression to add five.

function executorFunc1(resolve){
    let number = Math.floor(Math.random() * 10) + 1
    setTimeout(() => {
        console.log(`Resolving with number - ${number}`)
        resolve(number)
    }, 2000)
}

// let obj1 = new Promise(executorFunc1)
// obj1.then((number) => {return number + 5})
//     .then((number) => {return number + 5})
//     .then((number) => {return number + 5})
//     .then(console.log)


// 3. Write a Promise that rejects with an error message and handle the error. 

function executorFunc2(_, reject){
    reject("Rejecting with error message")
}

// let obj2 = new Promise(executorFunc2)
// obj2.catch(console.log)


// 4. Fetch data from 3 different promise objects and print the value of all the Promise objects once
// all of these resolve. Hint: use Promise.all() to wait for all the objects to resolve.
// Use Math.random() to generate a random value for Promise to return 


function executorFunc3(resolve){
    let number = Math.floor(Math.random() * 10 ) + 1
    resolve(number)
}

// let pAllObj = Promise.all([new Promise(executorFunc3),
//                                new Promise(executorFunc3),
//                                new Promise(executorFunc3) ])
// pAllObj.then(console.log)

// 5. Update the above executor function to resolve after a few seconds, use Math.random() to define the
// duration of Promise to resolve. Second, show the result as soon as any one of the promise resolves.

function executorFunc4(resolve){
    let number = Math.floor(Math.random() * 10) + 1
    setTimeout(() => {
        // console.log(`Resolving with number - ${number}`)
        resolve(number)
    }, number * 1000)
}

// let pRaceObj = Promise.race([new Promise(executorFunc4),
//                              new Promise(executorFunc4),
//                              new Promise(executorFunc4) ])
// pRaceObj.then(console.log)

//6. Update the executorFunc4 to resolve when the random number is even otherwise reject.
// Use this with Promise.race function and observe the output.

function executorFunc5(resolve, reject){
    let number = Math.floor(Math.random() * 10) + 1
    setTimeout(() => {
        if (number % 2 == 0)
            resolve(`Resolve with - ${number}`)
        else
            reject(`Reject with - ${number}`)
    }, number * 1000)
}

// let pRaceObj1 = Promise.race([new Promise(executorFunc5),
//                               new Promise(executorFunc5),
//                               new Promise(executorFunc5) ])
// pRaceObj1.then(console.log)
//          .catch(console.log)


// 7. In the above question, use Promise.any() instead of Promise.race(). Observe the behavior and
// document the same.


function executorFunc6(resolve, reject){
    let number = Math.floor(Math.random() * 10) + 1
    setTimeout(() => {
        if (number % 2 == 0){
            console.log(`Resolve with - ${number}`)
            resolve(`Resolve with - ${number}`)
        }
        else{
            console.log(`Reject with - ${number}`)
            reject(`Reject with - ${number}`)
        }
    }, number * 1000)
}
// let pAnyObj1 = Promise.any([new Promise(executorFunc5),
//     new Promise(executorFunc5),
//     new Promise(executorFunc5) ])

// pAnyObj1.then(console.log)
// .catch(console.log)


// 8. Re-write the first question using async/await


function executorFunc7(){
    let number = Math.floor(Math.random() * 10 ) + 1
    console.log(`Resolving with number - ${number}`)
    return Promise.resolve(number)
}
// We do not have to use the async keyword as I am writing synchronous function. 
async function getRandomNumberAndAddValues(){
    let baseNumber = await executorFunc7()  // get a random number
    let finalValue = await addFive(baseNumber)
    finalValue = await addFive(finalValue)
    finalValue = await addFive(finalValue)
    console.log(finalValue)
}
// getRandomNumberAndAddValues()

// 9. Update addFive function to add a delay of few seconds, chosen at random and add the same number to the
// base number and show the result. Add a delay of 1 second when you generate the base number.

async function executorFunc8(){
    return new Promise ((resolve) => { 
        setTimeout(() => {
            let number = Math.floor(Math.random() * 10 ) + 1
            console.log(`Resolving number - ${number}`)
            resolve(number)    
        }, 1000)    
    })
}

async function addRandomNumber(baseNumber){
    return new Promise((resolve) => {
        let number = Math.floor(Math.random() * 10 ) + 1
        setTimeout(() => {
            console.log(`Adding ${number} to ${baseNumber}`)
            resolve(baseNumber + number)    
        }, number * 1000)
    })
}

async function getRandomNumberAndAddRandomValues(){
    let baseNumber = await executorFunc8()  // get a random number
    let finalValue = await addRandomNumber(baseNumber)
    finalValue = await addRandomNumber(finalValue)
    finalValue = await addRandomNumber(finalValue)
    console.log('Final Value - ', finalValue)
}
// getRandomNumberAndAddRandomValues()

// 10. Write a function that returns a random number 5 times. Use a Promise to return the random number.
// Use the concept of async/await to implement the logic.

async function generateRandomNumber(){
    return new Promise((resolve) => {
        let number = Math.floor(Math.random() * 10 ) + 1
        setTimeout(() => {
            resolve(number)    
        },1000)
    })
}

async function getRandomNumbers(count=5){
    let randNumber = 0
    for (i = 0; i < count; i++){
        randNumber = await generateRandomNumber()
        console.log(`Random num. ${i + 1} is - ${randNumber}`)
    }
}
// getRandomNumbers()

