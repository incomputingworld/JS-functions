
// Concept of generator function.
// function * myGenerator(){
//     console.log("Yielding 1")
//     yield 1
//     console.log("Yielding 2")
//     yield 2
// }

// iterObj = myGenerator() // returns a generator object
// console.log(iterObj.next()) // output Yielding 1; { value: 1, done: false }
// console.log(iterObj.next()) // output Yielding 2; { value: 2, done: false }
// console.log(iterObj.next()) // output { value: undefined, done: true }


// Generator implementation - as a function.

// function * myCounter(maxValue){
//     let i = 0
//     while(i <= maxValue){
//         yield i++
//     }
//     return undefined
// }

// let twoCount = myCounter(2)
// console.log(twoCount.next())
// console.log(twoCount.next())
// console.log(twoCount.next())
// console.log(twoCount.next())
// console.log(twoCount.next())

// Generator implementation - as a function expression.

//function * myCounter(maxValue){
// let myCounter = function * (maxValue){
//     let i = 0
//     while(i <= maxValue){
//         yield i++
//     }
//     return undefined
// }

// let twoCount = myCounter(2)
// console.log(twoCount.next())
// console.log(twoCount.next())
// console.log(twoCount.next())
// console.log(twoCount.next())
// console.log(twoCount.next())


// Generator implementation - as an attribute of an object.
// let counter = {
//     maxValue: 0,
//     *generator() {
//         let i = 0
//         while(i <= this.maxValue){
//             yield i++
//         }
//     }
// }

// counter.maxValue = 3
// let iter = counter.generator()
// for (let num of iter){
//     console.log(num)
// }


// Generator implementation - as a method of a class.
// class Counter {
//     constructor(maxValue){
//         this.maxValue = maxValue
//     }
//     *generator(){
//         let i = 0
//         while(i <= this.maxValue){
//             yield i++
//         }
//     }
// }

// let counterObj = new Counter(3) // create an object of the class
// let iter = counterObj.generator() // get the iterator object
// for (let num of iter){
//     console.log(num)
// }



// Generator function to iterate book collection.

class Book{
    constructor(bookName, author){
        this.bookName = bookName
        this.author = author
        this.next = null
    }
}

// class BookCollection {
//     constructor(){
//         this.books = null
//         this.currentBook = null
//     }
//     addNewBook(bookName, author){
//         let newBook = new Book(bookName, author)
//         if(this.books == null){
//             this.books = newBook
//         }
//         else{
//             let currentBook = this.books
//             while (currentBook.next != null){
//                 currentBook = currentBook.next
//             }
//             currentBook.next = newBook
//         }
//     }
//     * [Symbol.iterator] (){ // iterable iterator
//         this.currentBook = this.books
//         while(this.currentBook != null){
//             let book = `${this.currentBook.bookName} - ${this.currentBook.author}`
//             this.currentBook = this.currentBook.next
//             yield book
//         }
//     }
// }

// let myBookCollection = new BookCollection()

// myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
// myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
// myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
// myBookCollection.addNewBook("Book Thief", "Markus Zusak")
// myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

// for(let book of myBookCollection){
//     console.log(book)
// }

// let booksIter = myBookCollection[Symbol.iterator]()
// console.log(booksIter.next())
// console.log(booksIter.next())
// console.log(booksIter.next())

// Iterator protocol
// class BooksIterator{
//     constructor(books){
//         this.currentBook = books
//     }
//     *listBooks(){
//         while (this.currentBook != null){
//             let book = `${this.currentBook.bookName} - ${this.currentBook.author}`
//             this.currentBook = this.currentBook.next
//             yield book
//         }
//     }
// }

// class BookCollection {
//     constructor(){
//         this.books = null
//         // this.currentBook = null
//     }
//     addNewBook(bookName, author){
//         let newBook = new Book(bookName, author)
//         if(this.books == null){
//             this.books = newBook
//         }
//         else{
//             let currentBook = this.books
//             while (currentBook.next != null){
//                 currentBook = currentBook.next
//             }
//             currentBook.next = newBook
//         }
//     }
//     [Symbol.iterator] (){
//         let booksIter = new BooksIterator(this.books)
//         return booksIter.listBooks()
//     }       
// }

// let myBookCollection = new BookCollection()

// myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
// myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
// myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
// myBookCollection.addNewBook("Book Thief", "Markus Zusak")
// myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

// for(let book of myBookCollection){
//     console.log(book)
// }


// yield *

// function * myCounter(){
//     yield * [1, 2, 3]
//     yield 4
// }

// for(let num of myCounter()){
//     console.log(num)
// }

function * myCounter(){
    yield * myCounter2()
    yield 4
}

function * myCounter2(){
    yield 1
    yield 2
    yield 3
}

for(let num of myCounter()){
    console.log(num)
}

