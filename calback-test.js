
const fs = require('fs')

console.log("Before read file function-------> ")

fs.readFile("test.json", 'utf8', function(err, data) {
    if(err) {
        console.error('Read Error : ', err);
    }
    else {
        console.log('File content :', data);
    }
    end()
})

function end(){
    console.log("After read file function-------> ")

}
