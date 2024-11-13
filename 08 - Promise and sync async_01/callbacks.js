// Synchronous callback
function filterNumbers(numbers, filterLogic){
  let result = []
  for(num of numbers){
    if(filterLogic(num)){
      result.push(num)
    }
  }
  return result
}

function isEven(num){
  return num % 2 == 0
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
// let evenNumbers = filterNumbers(numbers, isEven)
// console.log(evenNumbers)

function isOdd(num){
  return num % 2 != 0
}

// let oddNumbers = filterNumbers(numbers, isOdd)
// console.log(oddNumbers)

function firstTask(){
  console.log("First Task")
}

function secTask(){
  for (let num = 0; num < 10000000000; num++);
  console.log("Second Task")
}

function thirdTask(){
  console.log("Third Task")
}

// function doTasks(){
//   firstTask()
//   secTask()
//   thirdTask()
// }
// doTasks()

function doTasks2(){
  firstTask()
  setTimeout(secTask, 0)
  thirdTask()
}

// doTasks2()
// Asynchronous callback
function fetchData(){
  for(let i = 0; i < 1000000000; i++);
  console.log("Data fetched.")
}
function processData(){
  console.log("Processing data.")
}
function doOtherTask(){
  console.log("Continue working. Not waiting for data processing.")
}

function processTasks(callback){
  console.log("Fetching data...")
  setTimeout(() =>{
    fetchData()
    callback()
  }, 0)
  doOtherTask()
}

// processTasks(processData)

// callback hell - example

let fs = require('fs')
fs.readFile("08 - Promise and sync async_01\\file1.txt", "utf8", function (err, data1) { // 1
    if (err) throw err;
    fs.readFile("08 - Promise and sync async_01\\file2.txt", "utf8", function (err, data2) { // 2
        if (err) throw err;
        fs.readFile("08 - Promise and sync async_01\\file3.txt", "utf8", function (err, data3) { // 3
            if (err) throw err;
            fs.writeFile("08 - Promise and sync async_01\\output.txt", data1 + data2 + data3, "utf8", function (err) { // 4
                if (err) throw err;
                console.log("Done! Read all the files");
            }); // 4
        }); // 3
    }); // 2
}); // 1





