//string, number, boolean, object, array, function

let testVariable = "sampleString"

commonLogPrinter(testVariable);

let testVariable2 = 1;

commonLogPrinter(testVariable2);

let testVariable3 = true;

commonLogPrinter(testVariable3);

let testVariable4 = {key : "value"};

commonLogPrinter(testVariable4);

let testVariable5 = [1,2,3];

commonLogPrinter(testVariable5);


function commonLogPrinter(variable){
    console.log("Type of ", variable, " is : " ,typeof variable)
}


commonLogPrinter(commonLogPrinter);

let testVariable6;

commonLogPrinter(testVariable6);

testVariable6 = "initial value"

commonLogPrinter(testVariable6);

