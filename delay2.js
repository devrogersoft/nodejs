const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


function sendEmail(emailId, filePath) {
    console.log("EMAIL SENDING FOR EMAIL ID  STARTED !" + emailId);
    delay(5000); 
    console.log("EMAIL SENDING FOR EMAIL ID COMPLETED ! " + emailId);
}

function generateReport(accountId, fromDate, toDate, emailId) {
    console.log("REPORT GENERATION IN PROGRESS FOR ACCOUNT ID " + accountId);
    delay(5000); 
    console.log("REPORT GENERATION COMPLETED FOR ACCOUNT ID " + accountId);
    sendEmail(emailId, "fp "+ accountId );

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

generateReport(111, 'fromDate', 'toDate', 'emailId');
generateReport(1111, 'fromDate', 'toDate', 'emailId');
generateReport(1112, 'fromDate', 'toDate', 'emailId');
