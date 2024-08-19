const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('sendEmail', (emailId, filePath) => {
    console.log("EMAIL SENDING FOR EMAIL ID  STARTED !" + emailId);
    delay(5000); 
    console.log("EMAIL SENDING FOR EMAIL ID COMPLETED ! " + emailId);
})


eventEmitter.on('generateReport', (accountId, fromDate, toDate, emailId)=> {
    console.log("ANOTHER EVENT PROCESSING STARTED FOR EMAIL ID   !" + emailId);
})


eventEmitter.on('generateReport', (accountId, fromDate, toDate, emailId)=> {
    console.log("REPORT GENERATION IN PROGRESS FOR ACCOUNT ID " + accountId);
    delay(5000); 
    console.log("REPORT GENERATION COMPLETED FOR ACCOUNT ID " + accountId);
    eventEmitter.emit('sendEmail',emailId, "fp "+ accountId);
})


eventEmitter.emit('generateReport', 123, '10/12/12', '10/12/22', 'test@test.com');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

