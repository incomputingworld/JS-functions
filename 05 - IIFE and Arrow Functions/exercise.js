// 1. Write an arrow function named "divide". It takes two parameters x and y.
// It should check for division by zero and return null in such case.
// Otherwise the function returns the result

const divide = (x, y) => {
    if (y == 0){
        console.log("Divide by zero error")
        return null
    }
    return x / y
}
// console.log(divide(10, 2))
// divide(10, 0)

// 2. Write an arrow function calculates the cube of a given number and returns
// the result implicitly.

let cube = x => x * x * x
console.log(cube(5))

// 3. Write an arrow function the accepts two parameters, name and age. And
// the function returns a "person" object
const createAPerson = (name, age) => {
    return {
        "name": name,
        "age": age
    }
} 
person = createAPerson("Sunil", 35)
// console.log(person, typeof(person))

// 4. In the given object, add a new arrow method to increment the age of a person.
// let person = {
//     "fullName": "Sunil",
//     age : 35
// }
let user = {
    "fullName": "Sunil",
    age : 35,
    addYear: function (){
        let incAge = () => {
            this.age += 1
        }
        incAge()
    }
}
user.addYear()
// console.log(user)

// 5. Write an arrow function that adds variable number of arguments passed and
// returns a sum of these numbers.
const addAll = (...args) =>{
    let sum = 0
    for (let i = 0; i < args.length; i++ ) {
        sum += args[i];
    }
    return sum
}
console.log(addAll(1, 2, 3, 4, 5))

// 5. Given an array of numbers, add the numbers using forEach method. Use an array
// function in as the parameter to the forEach method

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0
numbers.forEach(element => {
    sum += element
});
console.log(sum);

// 6. Write an IIFE that adds two numbers and returns the result of the same

let result = (function(x, y){
    return x + y
})(10, 15)
console.log(result);

// 7. write an IIFE that create one private variable which cannot be accessed 
// outside a function. And we should have methods to manipulate the variable.

let privateVarManage = (function (){
    let privateVar = "This is a private variable"
    return {
        show: function() {
            console.log(privateVar)
        },
        change: function (newMessage){
            privateVar = newMessage
        }
    }
})();
privateVarManage.show()
privateVarManage.change ("Welcome")
privateVarManage.show();

// 8. Is it possible to write an arrow function as an IIFE

(() => {
    console.log("Writing an arrow function as an IIFE")
})();

// 9. Enumerate differences among call, bind and apply method.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Method	Invokes Immediately?	Accepts Arguments	Returns New Function?	Use Case
// call()       Yes	                Arguments as a list	        No	                When you want to invoke a function immediately with a 
//                                                                                  specific this context and arguments.
// apply()	    Yes	                Arguments as an array	    No	                When you want to invoke a function immediately and the 
//                                                                                  arguments are already in an array.
// bind()	    No	                Arguments as a list	        Yes	                When you want to create a new function with a specific 
//                                                                                  this value or pre-set arguments for later use.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function greet11(message, punctuation="."){
    console.log(`Hi! ${this.name}, ${message}${punctuation}`)
}
greet11.call({name: "Sunil"}, "Call: How are you") // Hi! Sunil, How are you

greet11.apply({name: "Rahul"}, ["Apply: How are you"])

const greetAmit = greet11.bind({name: "Amit"},"Bind: How are you", "!")
greetAmit()