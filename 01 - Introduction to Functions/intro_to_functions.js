
function firstFunction(){
    console.log("Hi There")
}


// firstFunction()


function test(param_1, param_2){
    console.log(param_1, param_2)
}


arg_1 = "Hey!!"
arg_2 = "There"

// test() // Will this work?
// test(arg_1) // Will this work?
// // Yes, the statements will work.

// test("Hi!", "There", "How", "are", "you")

function testDefaultValues(person, param= "is a", occupation){
    console.log(`${person} ${param}, ${occupation}`)
}

// testDefaultValues()
// testDefaultValues("Amit")
// testDefaultValues("Amit", "Engineer")
// testDefaultValues("Amit", "is an", "engineer")

// return statements

function noReturnStatement(){

}

function returnWithNoValue(){
    return
}

function returnValue(){
    return 10
}

function returnValues(){
    return [1, 2, 3]
}

console.log("Function has no return statement - " + noReturnStatement())
console.log("Function has a return statement - " + returnWithNoValue())
console.log("Function has a return statement with a value- " + returnValue())
console.log("Function returns multiple values - " + returnValues )