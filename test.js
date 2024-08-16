function performOperation(a, b) { // Fn 
    const result = a + b;  
    callback(result);
}

function printResult(result) {
    console.log('The result is:', result);
}

function printResult1(result, one) { //Fn 
    console.log(('The result1 is:'+ result) + " "+ one);
}

performOperation(5, 10, printResult1);

//console.log(printResult("Test Result"))