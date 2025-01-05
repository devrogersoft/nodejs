const express = require('express');
const fs = require('fs/promises')
const app = express();


app.get('/file', async (req, res) => {          
    const data = await fs.readFile("C:/Users/dev-roger/Documents/cypress/test/testfile.txt","utf-8");    
    await delay(5000);
    console.log(data);
    console.log("Here is the data");
    res.send("file content is : " + data)
})

function delay(ms){
    console.log("HERE IS THE DELAY")
    return new Promise(resolve => setTimeout(resolve, ms));
}
app.listen(8080, "localhost", () => {
    console.log("Server is starting ---");
})