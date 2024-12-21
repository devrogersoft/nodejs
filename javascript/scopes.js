var globalVar = "I am a global variable";
let globalLet = "I am a global let variable";
const globalConst = "I am a global const variable";

function checkScopes() {
    var functionVar = "I am a function var variable";
    let functionLet = "I am a function let variable";
    const functionConst = "I am a function const variable";
    
    if (true) {
        var blockVar = "I am a block var variable (function-scoped)";
        let blockLet = "I am a block let variable";
        const blockConst = "I am a block const variable";
        
        console.log("=============Inside if block===============");
        console.log(globalVar);   
        console.log(globalLet);   
        console.log(globalConst); 
        console.log(functionVar); 
        console.log(functionLet); 
        console.log(functionConst); 
        console.log(blockVar);    
        console.log(blockLet);    
        console.log(blockConst);  
    }
    
    console.log("==========Outside if block but inside function===========");
    console.log(globalVar);   
    console.log(globalLet);   
    console.log(globalConst); 
    console.log(functionVar); 
    console.log(functionLet); 
    console.log(functionConst); 
}

checkScopes();

console.log("================Outside the function==================");

console.log(globalVar);    
console.log(globalLet);    
console.log(globalConst);  
