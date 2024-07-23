
// variable scope

let x1 = 1  // local scope
const x2 = 2  // local scope
var x3 = 3  // local scope
x4 = 4  // global scope

function testScope() {
    let y1 = 10  // function scope
    const y2 = 20  // function scope
    var y3 = 30  // function scope
    y4 = 40  // global scope
    {
        let z1 = 100  // block scope
        const z2 = 200  // block scope
        var z3 = 300  // function scope
        z4 = 400  // global scope
        console.log(x1, x2, x3, x4, y1, y2, y3, y4, z1, z2, z3, z4)
    }
    console.log(x1, x2, x3, x4, y1, y2, y3, y4, z3, z4) // z1, z2
}

// testScope()
// console.log(x1, x2, x3, x4, y4, z4) // y1, y2, y3, z1, z2, z3


// pass by Value/Reference
let car = {
    make: "Suzuki",
    model: "Ciaz",
    color: "Borwn",
    year: 2020
}

///////////////////////////////////////////////////////////
function objScope(obj){
    console.log(obj)
    obj = { user: "ICW" }
    console.log(obj)
}

objScope(car)
console.log(car)
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// function objPropScope(obj){
//     obj.make = "Toyota"
// }

// console.log(car)
// objPropScope(car)
// console.log(car)
///////////////////////////////////////////////////////////