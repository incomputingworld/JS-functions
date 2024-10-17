// 1. Write a iterator that generate a range of numbers. The function should accept two arguments
// which define the start and end of the range. the range should include both start and end number
class RangeIterator{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    [Symbol.iterator](){
        return this
    }
    next(){
        if (this.start <= this.end){
            return {value: this.start++, done: false}
        }
        else{
            return {value: undefined, done: true}
        }
    }
} 

let zeroToTen = new RangeIterator(0, 10)
// for (let num of zeroToTen){
//     console.log(num)
// }

// 2. Write the same code again and this time write a separate iterator class
class RangeNumbers{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    [Symbol.iterator](){
        return new RangeNumbersIterator(this.start, this.end)
    }
} 

class RangeNumbersIterator{
    constructor(start, end){
        this.start = start
        this.end = end
    }
    next(){
        if (this.start <= this.end){
            return {value: this.start++, done: false}
        }
        else{
            return {value: undefined, done: true}
        }
    }
}

let elevenToTwenty = new RangeIterator(11, 20)
// for (let num of elevenToTwenty){
//     console.log(num)
// }

// 3. Write an iterator to reverse a string
class ReverseString{
    constructor(inputString){
        this.inputString = inputString
        this.index = 0
    }
    [Symbol.iterator] (){
        return { // returns an anonymous object that implements the next() method.
            inputString: this.inputString, // initialize the object
            index: this.inputString.length - 1, // initialize the object
            next: function () {
                if (this.index >= 0){
                    return {value: this.inputString[this.index--], done: false}
                }
                else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

let reverseThis = new ReverseString("Sunil")
for(chr of reverseThis){
    console.log(chr)
}