function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeWithDelay(){
    console.log("WAITING-----");
    await delay(5000);
    console.log("COMPLETED");
}

executeWithDelay();