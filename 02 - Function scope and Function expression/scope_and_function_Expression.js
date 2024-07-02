// function test(){
//     console.log(arguments)
//     console.log(arguments[1])
// }

// test("This", "function", "is", "getting", 6, "arguments")


function test(param){
    console.log(param)
    console.log(arguments)
    console.log(arguments[1])
}

// test("This", "function", "is", "getting", 6, "arguments")


// variable scope

let x1 = 1
const x2 = 2
var x3 = 3
x4 = 4

function testScope(){
   let y1 = 10
   const y2 = 20
   var y3 = 30
   y4 = 40
   {
    let z1 = 100
    const z2 = 200
    var z3 = 300
    z4 = 400
    console.log(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4)
   }
   console.log(x1, x2, x3, x4, y1, y2, y3, y4, z3, z4) // z1, z2

}

// testScope()
// console.log(x1, x2, x3, x4, y4, z4) // y1, y2, y3, z1, z2, z3


// function expression

let testFunction = function(param){ //optional paramter
    console.log(param)
    return true //optional statement

}

testFunction("Hey")















