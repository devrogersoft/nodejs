const a = 40;
const b = 20;

if (a<b) {
    console.log("B is larger than A");
}else{
    console.log("A is larger than B");
}

const caseValue = "value1";

switch (caseValue) {
    case "value1":
        console.log("Value is value1")
        break;
    case "value2":
        console.log("Value is value2")
        break;             
    default:
        console.log("This will execute at the end if nothing is valid case")
        break;
}

const numb = 3;
if(numb == 1){
    console.log("Value is 1")
}else if(numb == 2){
    console.log("Value is 2")
}else if(numb == 3){
    console.log("Value is 3")
}