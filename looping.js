//Recursive fun = Function calls itself

//0! = 1
// 5! = 
function factorial(n){
    if(n == 0){
        return 1;
    }
    return n * factorial(n-1)
}

const valueToTest = 110;

//console.log("Factorial of", valueToTest, " is : ", factorial(valueToTest));


//Higher Order fn = Argument is a function

const add = (a,b) => a + b; 
const sub = (a,b) => a - b;

const val1 = 1;
const val2 = 2;

//console.log(add(val1, val2))
//console.log(sub(val1, val2))

function applyOperation(a, b, operation){
    
    return operation(a,b);
}

console.log(applyOperation(val1, val2, add))
console.log(applyOperation(val1, val2, sub))


//Currying