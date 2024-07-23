// Hoisting
// Use the below source code and change the variable defintion using different keywords and
// without using the keyword. Observe the behaviour. Recall why this happens.
function checkHoisting(){
    console.log(x)
    const x = 10
    console.log(x)
}
// checkHoisting()

//Scope of variable
let num = 10
function testVarScope(num){
    console.log(num) // What is the expected output?
    num = 100
}
// testVarScope(num)
// // Guess the expected outupt and why?
// console.log(num) // What is the expected output

// 
function testVarScope_1(){
    for (let counter = 0; counter < 10; counter++);
    console.log(counter) // What is the expected output?
}
// testVarScope_1()

function testVarScope_2(){
    var x = 1
    let y = 2
    {
        var x = 11
        let y = 22
        console.log(x, y) // What is the expected output and why?
    }
    console.log(x, y) // What is the expected output and why?
}
// testVarScope_2()

//pass by value - primitiive data type
function updateValue(value){
    value = 1000
}
// let x = 100
// updateValue(x)
// console.log(x) // What is the expected output and why? 

//pass by reference - user-defined object.
function updateProperty(obj){
    obj.user = "Test User"
}
// let userObj = {user: "ABC"}
// console.log(userObj) // What is the expected output
// updateProperty(userObj)
// console.log(userObj) // What is the expected output and why?

function updateReference(obj){
    obj = {singer: "Freddie Mercury"}
}
let newObj = {user: "ABC"}
// console.log(newObj) // What is the expected output
// updateReference(newObj)
// console.log(newObj) // What is the expected output and why?

function updateArrayElement(arr){
    arr[0] = 50
}
// numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// updateArrayElement(numbers)
// console.log(numbers) // What is the expected output and why?

function updateArray(arr){
    arr = [10, 20, 30, 40, 50]
}
// numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// updateArray(numbers)
// console.log(numbers) // What is the expected output and why? 
