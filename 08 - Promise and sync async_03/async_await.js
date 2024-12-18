
async function test(){
  return "Test String"
}

// obj = test()
// console.log(obj)
// console.log(typeof(obj))


function fetchData(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {resolve("Data Fetched")}, 2000)
  })
}

async function processData(){
  let data = await fetchData()
  console.log(`Processing data... ${data}`)
}


// processData()


let fs = require("fs")
function readDataFile(fileName){
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data)=>{
      if (err)
        reject(err)
      else
        resolve(data)
    })
  })
}

async function readFiles(){
  let data1 = await readDataFile("08 - Promise and sync async_03\\file1.txt")
  let data2 = await readDataFile("08 - Promise and sync async_03\\file2.txt")
  let data3 = await readDataFile("08 - Promise and sync async_03\\file3.txt")
  console.log(data1, data2, data3)
}

// readFiles()



// Sample of promise chaining
// let promiseObj = new Promise (readFirstFile)
// promiseObj.then(readSecondFile)
//           .then(readThirdFile)
//           .then(console.log)




async function fetchDataFromURL(){
  let url = "https://example.org/products.json"
  try{
    let response = await fetch(url)
    if (!response.ok){
      throw new Error(`Response status : ${response.status}`)
    }
  }
  catch(error){
    console.log(error.message)
  }
}

// fetchDataFromURL()




async function readFilesUsingPromiseAll(){
  let allFiles = [readDataFile("08 - Promise and sync async_03\\file1.txt"),
    readDataFile("08 - Promise and sync async_03\\file2.txt"),
    readDataFile("08 - Promise and sync async_03\\file3.txt")
  ]

  let allData = await Promise.all(allFiles)
  console.log(allData.join(" "))
}

readFilesUsingPromiseAll()







