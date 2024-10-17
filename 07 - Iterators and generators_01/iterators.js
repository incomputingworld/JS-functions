// Iterable data types

// let strn = "test"
// for(chr of strn){
//     console.log(chr)
// }

// let numbers = [1,2,3,4,5]
// for (num of numbers){
//     console.log(num)
// }

// Pseudocode of Symbol.iterartor method
// let someObject = {
//     [Symbol.iterator] () {
//         // function body goes here.
//     }
// }

// Pseudocode of next() method
// let someObject = {
//     next() {
//         if(elementsToIterate){
//             data = getRelevantDataFromTheElement
//             pointToTheNextElement
//             return {value: data, done: false}
//         }
//         else{
//             return {value: undefined, done: true}
//         }
//     }
// }



class Book{ // Node of the linked list
    constructor(bookName, author){
        this.bookName = bookName
        this.author = author
        this.next = null
    }
}

// Iterable iterator implementation.
// class BookCollection{ // Iterable iterator
//     constructor(){
//         this.books = null
//         this.currentBook = null 
//     }
//     addNewBook(bookName, author){
//         let newBook = new Book(bookName, author)
//         if (this.books == null)
//             this.books = newBook
//         else{
//             let current = this.books
//             while(current.next != null)
//                 current = current.next
//             current.next = newBook   
//         }
//     }
//     [Symbol.iterator] (){
//         this.currentBook = this.books
//         return this  
//     }
//     next(){
//         if(this.currentBook){
//             let data = `${this.currentBook.bookName} - ${this.currentBook.author}`
//             this.currentBook = this.currentBook.next
//             return {value: data, done: false}   
//         }
//         else
//             return {value: undefined, done: true}
//     }
// }

// // Iterable iterator - testing code
// let myBookCollection = new BookCollection()

// myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
// myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
// myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
// myBookCollection.addNewBook("Book Thief", "Markus Zusak")
// myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

// for (let book of myBookCollection){
//     console.log(book)
// }


// Iterator protocol implementation
class BookCollection{ // Iterator protocol implementation
    constructor(){
        this.books = null
    }
    addNewBook(bookName, author){
        let newBook = new Book(bookName, author)
        if (this.books == null)
            this.books = newBook
        else{
            let current = this.books
            while(current.next != null)
                current = current.next
            current.next = newBook   
        }
    }
    [Symbol.iterator] (){
        let booksIterator = new BookCollectionIterator(this.books)
        return booksIterator    
    }
}

class BookCollectionIterator{
    constructor(books){
        this.currentBook = books
    }
    next(){
        if(this.currentBook){
            let data = `${this.currentBook.bookName} - ${this.currentBook.author}`
            this.currentBook = this.currentBook.next
            return{value: data, done: false}
        }
        else{
            return {value: undefined, done: true}
        }
    }
}
 // testing code 
// let myBookCollection = new BookCollection() // implements iterable iterator

// myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
// myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
// myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
// myBookCollection.addNewBook("Book Thief", "Markus Zusak")
// myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

// for (let book of myBookCollection){
//     console.log(book)
// }

// testing code - multiple iterator objects

let myBookCollection = new BookCollection() 
myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
myBookCollection.addNewBook("Book Thief", "Markus Zusak")
myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

// let bookIterator1 = myBookCollection[Symbol.iterator]()
// let bookIterator2 = myBookCollection[Symbol.iterator]()

// console.log("bookIterator1 - ", bookIterator1.next())
// console.log("bookIterator2 - ", bookIterator2.next())
// console.log("bookIterator1 - ", bookIterator1.next())
// console.log("bookIterator2 - ", bookIterator2.next())


// Iterable Iterator - behavior when two iterator objects are used.

class BookCollection1{ // Iterable iterator
    constructor(){
        this.books = null
        this.currentBook = null 
    }
    addNewBook(bookName, author){
        let newBook = new Book(bookName, author)
        if (this.books == null)
            this.books = newBook
        else{
            let current = this.books
            while(current.next != null)
                current = current.next
            current.next = newBook   
        }
    }
    [Symbol.iterator] (){
        this.currentBook = this.books
        return this  
    }
    next(){
        if(this.currentBook){
            let data = `${this.currentBook.bookName} - ${this.currentBook.author}`
            this.currentBook = this.currentBook.next
            return {value: data, done: false}   
        }
        else
            return {value: undefined, done: true}
    }
}

// Iterable iterator - testing code
let myBookCollection1 = new BookCollection1()

myBookCollection1.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
myBookCollection1.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
myBookCollection1.addNewBook("The Joy of X", "Steven Strogatz")
myBookCollection1.addNewBook("Outliers", "Malcom Gladwel")
myBookCollection1.addNewBook("The Invisible Man", "H.G. Wells")
myBookCollection1.addNewBook("Book Thief", "Markus Zusak")
myBookCollection1.addNewBook("Pre-suasion", "Robert Caildini")

// Both iterator objects interfere with each other. 
let bookIterator1 = myBookCollection1[Symbol.iterator]()
let bookIterator2 = myBookCollection1[Symbol.iterator]()

console.log("bookIterator1 - ", bookIterator1.next())
console.log("bookIterator2 - ", bookIterator2.next())
console.log("bookIterator1 - ", bookIterator1.next())
console.log("bookIterator2 - ", bookIterator2.next())