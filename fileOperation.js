const fs = require('fs');

function readAndWriteFile(){
    try{
    const data = fs.readFileSync("C:/Users/dev-roger/Documents/cypress/test/testfile1.txt", "utf-8");    
    console.log(data);
    } catch(error){
        console.error("Got an error");
    }
}

console.log("BEFORE ---------")
readAndWriteFile();
console.log("AFTER ---------")
