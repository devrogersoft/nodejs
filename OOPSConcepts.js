class Person { // Class definition 
    constructor(name, age, location){ // constuctor with arguments 
        this.name = name;
        this.age = age;
        this.location = location;
    }
    sayHelloWithVariableDefinition(){ // Class function
        const response = "Hello, my name is "+ this.name + ", I am " + this.age + " years old ,"+ " and I am from " + this.location;
        return response;
    }
    sayHelloWithoutVariableDefinition(){ // Class function
        return `Hello, my name is ${this.name} , I am  ${this.age} years old , and I am from ${this.location}`;
    }

}

for (let index = 0; index < 100; index++) {
    const personN = new Person("Dev"+index, index, "Location "+index); ;
    console.log(personN.sayHelloWithoutVariableDefinition());

}


