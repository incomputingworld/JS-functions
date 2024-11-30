//Structure of a promise constructor

// function executorFunction(resolve, reject){
//   // This is the asynchronous code that we pass to Promise constructor function.
//   executionIsSuccess = true
//   if (executionIsSuccess) // code execution is a success
//     resolve("Data passed to consumer") // changes state of the Promise to fulfilled.
//   else
//     reject("Failure")  // changes state of the Promise to rejected.
// }

// const myPromise = new Promise(executorFunction)


// Structure of a promise consumer - .then
// myPromise.then(handlerFunction) // call this when promise resolves

// function handlerFunction(input_data){
//   // This can be a normal function or an async function.
//   // When a normal function, with a return statement, JavaScript wraps the value and returns it
//   // as a promise object. If there no return statement, nothing propagates to the next consumer.
//   // When an async function, it return a new Promise object by calling a Promise constructor function
  
//   console.log(input_data) // input received from resolve()
// }


// First example showing callback hell
function taskA(callback){
  setTimeout( () =>{
    callback("TaskA output;")
  }, 1000)
}
function taskB(data, callback){
  setTimeout(() => {
    callback(data + "taskB output;")
  }, 1000)
}
function taskC(data, callback){
  setTimeout(() => {
    callback(data + "taskC output;")
  }, 1000)
}
function executeTasks(){
  taskA((message1) => {
    taskB(message1, (message2) => {
      taskC(message2, (message3) => {
        console.log(message3)
      })
    })
  })
}
// executeTasks()
// Function modified to use Promise
function taskA1(resolve, reject){
  setTimeout(()=>{
    resolve("taskA1 output; ")
  }, 1000)    
}
function taskB1(data){
  return data + " taskB1 output; "  
}
function taskC1(data){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(data + " taskC1 output; ")
    }, 1000)    
  })
}
function showOutput(input){
  console.log(input)
}
// let taskPromise = new Promise(taskA1)
// taskPromise.then(taskB1)
//            .then(taskC1)
//            .then(showOutput)

// Second example - callback hell vs Promise
// let fs = require('fs')
// fs.readFile("08 - Promise and sync async_02\\file1.txt", "utf8", function (err, data1) { // 1
//     if (err) throw err;
//     fs.readFile("08 - Promise and sync async_02\\file2.txt", "utf8", function (err, data2) { // 2
//         if (err) throw err;
//         fs.readFile("08 - Promise and sync async_02\\file3.txt", "utf8", function (err, data3) { // 3
//             if (err) throw err;
//             fs.writeFile("08 - Promise and sync async_02\\output.txt", data1 + data2 + data3, "utf8", function (err) { // 4
//                 if (err) throw err;
//                 console.log("Done! Read all the files");
//             }); // 4
//         }); // 3
//     }); // 2
// }); // 1

// Second example implementing as a promise
function readFirstFile(resolve, reject){
  fs.readFile("08 - Promise and sync async_02\\file1.txt", "utf8", function (err, data1) {
    if (err) { reject(err) }
    else { resolve(data1) }
  }) 
}
function readSecondFile(input){
  return new Promise((resolve,reject)=>{
    fs.readFile("08 - Promise and sync async_02\\file2.txt", "utf8", function (err, data2) {
      if (err) { reject(err) }
      else { resolve(data2) }
    })
  })
}
function readThirdFile(input){
  data = fs.readFileSync("08 - Promise and sync async_02\\file3.txt", "utf8")
  return input + data  
}
function writeDataToFile(allData){
  fs.writeFileSync("08 - Promise and sync async_02\\output1.txt", allData, "utf8")
}


// let booksPromise = new Promise(readFirstFile)
// booksPromise.then(readSecondFile)
//             .then(readThirdFile)
//             .then(writeDataToFile)


// let fs = require('fs')
// fs.readFile("08 - Promise and sync async_02\\file1.txt", "utf8", function (err, data1) { // 1
//     if (err) throw err;
//     fs.readFile("08 - Promise and sync async_02\\file2.txt", "utf8", function (err, data2) { // 2
//         if (err) throw err;
//         fs.readFile("08 - Promise and sync async_02\\file3.txt", "utf8", function (err, data3) { // 3
//             if (err) throw err;
//             fs.writeFile("08 - Promise and sync async_02\\output.txt", data1+data2+data3, "utf8", function (err) { // 4
//                 if (err) throw err;
//                 console.log("Done! Read all the files");
//             }); // 4
//         }); // 3
//     }); // 2
// }); // 1


// Example - handling error message
function executorFunction1(resolve, reject){
  reject("Failed execution.")
  // resolve("Successful execution.")
}
function showErrorMessage(input){
  console.log(`Error Message - ${input}`)
}
function showSuccessMessage(input){
  console.log(`Success Message - ${input}`)
}
function finallyCleanup(){
  console.log(`Do the clean at this point`)
}

//Handling error using .then
// let execFunc = new Promise(executorFunction1)
// execFunc1.then(showSuccessMessage, showErrorMessage)


//Handling error using .catch
// let execFunc1 = new Promise(executorFunction1)
// execFunc1.then(showSuccessMessage)
//          .catch(showErrorMessage)


//Handling error using .finally
let execFunc1 = new Promise(executorFunction1)
execFunc1.then(showSuccessMessage)
         .catch(showErrorMessage)
         .finally(finallyCleanup)

