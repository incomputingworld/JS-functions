// 1. Write a function that accepts a number as a parameter. The function should
// return True if it is a multiple of both 3 and 5. Use this function as a callback function 
// and use with the function filterNumbers to return an array of numbers that are multiple of both 3 and 5

function multipleOfThreeAndFive(num){
  return (num % 3 == 0 && num % 5 == 0)
}

function filterNumbers(numbers, filterLogic){
  let result = []
  for(num of numbers){
    if(filterLogic(num)){
      result.push(num)
    }
  }
  return result
}

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let new_array = filterNumbers(numbers, multipleOfThreeAndFive)
// console.log(new_array)

// 2. Write a function "fetchData" that accepts a callback function and executes the same after a delay of 2 seconds
// to simulate the delay in fetching data from a DB server.
function fetchData(callback){
  setTimeout(() =>{
    callback("Data fetched.")}, 2000)
} 

function test(message){
  console.log(message)
}

// fetchData(test)

// 3. Write two functions "taskOne" and "taskTwo". The function taskOne should execute after a delay of 1 second.
// The function taskTwo should execute with a delay of 2 seconds after the first task completes.
// Both the tasks should be chained.

function firstTask(callback) {
  setTimeout(() => {
    callback("Task 1 complete");
  }, 1000);
}

function secondTask(callback) {
  setTimeout(() => {
    callback("Task 2 complete");
  }, 2000);
}

// Chaining the callbacks
// firstTask((message1) => { // callback is an anonymous function that accepts a parameter. And calls console.log with this parameter 
//   console.log(message1);  
//   secondTask((message2) => { // Chains the second task. It executes when the first one completes. 
//     console.log(message2);
//   });
// });


// 4. Error handling with callback
// Write a function 'fetchDataWithErr'. This function executes with a delay of 2 seconds.
// It checks the value of a variable 'flag'. If it is true, it indicates data fetch is a success.
// The callback function receives an error object and data object.
// On successful fetch the callback should display the data otherwise it should show the error message.

flag = true // toggle this value to see the change in code behavior
function fetchDataWithErr(callback){
  setTimeout(()=> {
    if (flag)
      callback(null, "Data fetched.")
    else
      callback({error: flag, message: "Failed to fetch the data."}, null)
  }, 2000)
}

// fetchDataWithErr((error, data)=>{
//   if(error){
//     console.log(error.message)
//   }
//   else
//     console.log(data)
// })

// 5. Callback Hell
// Write three functions 'taskA', 'taskB' and 'taskC'. Each representing a task.
// All these tasks should execute in a sequence with a delay of 1 second. 
// Output of all the tasks should propagate to the next task and the taskC should display the result of all the tasks

function taskA(callback){
  setTimeout(()=>{
    callback("taskA output;")
  }, 1000)
}

function taskB(data, callback){
  setTimeout(()=>{
    callback(data + " taskB output;")
  }, 1000)
}

function taskC(data, callback){
  setTimeout(()=>{
    callback(data + " taskC output;")
  }, 1000)
}

function executeTasks(){
  taskA((message1)=>{
    taskB(message1, (message2)=>{
      taskC(message2, (message3)=>{
        console.log(message3)
      })
    })
  })
}
executeTasks()