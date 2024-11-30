// 1. Implement a promise that resolves after 2 seconds and returns "Success". Print this value

function executorFunc(resolve){
  setTimeout(() => {
    resolve("Success")
  }, 2000)
}

function showSuccessMessage(message){
  console.log(message)
}

// let promiseObj = new Promise(executorFunc)
// promiseObj.then(showSuccessMessage)

// 2. Modify the above code (separately) to handle failure and return "Failed". 
// Print this value in two ways. Using .then method and .catch method.

function executorFunc1(reject){
  setTimeout(() => {
    reject("Failed")
  }, 2000)
}

function showErrorMessage(message){
  console.log(message)
}

// Using .then to manage error
// let promiseObj1 = new Promise(executorFunc1)
// promiseObj1.then(showSuccessMessage, showErrorMessage)

// using .catch to manage error
// let promiseObj1 = new Promise(executorFunc1)
// promiseObj1.then(showSuccessMessage)
//            .catch(showErrorMessage)


// 3. Write 4 functions. Each executes in one second and resolved with a message "Success".
// Chain these functions and finally print all the success messages

function genericTask(resolve, message=""){
  setTimeout(() => {
    resolve(message + "Success ")
  }, 1000)
}

function task1(resolve){
  genericTask(resolve)
}

function task2(message){
  return new Promise((resolve) => {
    genericTask(resolve, message)
  })
}

function task3(message){
  return new Promise((resolve) => {
    genericTask(resolve, message)
  })
}

function task4(message){
  return new Promise((resolve) => {
    genericTask(resolve, message)
  })
}

let tasksResult = new Promise(task1)
tasksResult.then(task2)
           .then(task3)
           .then(task4)
           .then(showSuccessMessage)