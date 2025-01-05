const fs = require('fs/promises');

async function readAndWriteFile(){
    const data = await fs.readFile("C:/Users/dev-roger/Documents/cypress/test/testfile.txt","utf-8");    
    console.log(data);
    console.log("Here is the data");
    
}

console.log("BEFORE ---------")
readAndWriteFile();
console.log("AFTER ---------")
console.log("AFTER 1 ---------")
console.log("AFTER 2 ---------")
console.log("AFTER 2 ---------")
console.log("AFTER 2 ---------")
console.log("AFTER 2 ---------")
console.log("AFTER 2 ---------")
console.log("AFTER 6 ---------")

