function getInitialNumber(resolve, reject){
  console.log(`Executor function resolves to 3`)
  resolve(3)
}
function square(x){
  console.log(`Square - ${x * x}`)
  return x * x
}
function addTen(x){
  console.log(`addTen - ${x + 10}`)
  return x + 10
}
function multiplyWithThree(x){
  console.log(`multiplyWithThree - ${x * 3}`)
  return x * 3
}
function showResult(data){
  console.log(`Final value is ${data}`)
}
// Sequential - promise chaining 
// let calculateValue = new Promise(getInitialNumber)
// calculateValue.then(square)
//               .then(addTen)
//               .then(multiplyWithThree)
//               .then(showResult)


// Parallel - promise chaining 
// let calculateValue1 = new Promise(getInitialNumber)
// calculateValue1.then(square)
// calculateValue1.then(addTen)
// calculateValue1.then(multiplyWithThree)
// calculateValue1.then(showResult)


function firstTask(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{ reject("Rejected FirstTask") }, 1000) })
}
function secTask(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{ resolve("SecondTask") }, 2000) })
}
function thirdTask(){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{ resolve("ThirdTask") }, 2000) })
}
function rejected(data){
  console.log(`Error with values - ${data}`)
  console.log(data.errors)
}
function fulfilled(data){
  console.log(`Success with values`)
  for (obj of data)
    console.log(obj)
}
// Promise.allSettled example
let promiseAnyObj = Promise.allSettled([secTask(), firstTask(), thirdTask()])
promiseAnyObj.then(fulfilled)


// console.log(data.errors)  // use this with promise.any. .errors is an array

// Promise.allSelected example
// let promiseAllSelectedObj = Promise.allSettled([firstTask(), secTask(), thirdTask()])
// promiseAllSelectedObj.then(fulfilled)


// Promise.all example
// let promiseAllObj = Promise.all([firstTask(), secTask(), thirdTask()])
// promiseAllObj.then(fulfilled)
//              .catch(rejected)


// Promise.race example
// let promiseRaceObj = Promise.race([firstTask(), secTask(), thirdTask()])
// promiseRaceObj.then(fulfilled)
//              .catch(rejected)

// const fs = require('fs/promises');
// const fs1 = require('fs');

// let data = null
// fs.readFile("08 - Promise and sync async_02\\file3.txt", "utf8", function(err, data){
//   if (err){
//     console.log(err)
//     return null
//   }
//   return data
// })


// async function readFileAsync() {
//   let data = await fs.readFile('08 - Promise and sync async_02\\file3.txt', 'utf8')
//   console.log(data)
// }

// readFileAsync()

