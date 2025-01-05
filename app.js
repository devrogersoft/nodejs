const dev = {
    name : "Dev",
    age : 28,
    location : "Kochi",
    maritalStatus : true,
    loanAccounts : [{
        accountId : 123,
        amount : 20000
    }],
    geoLocation : [19.0, 55.9]
};

console.log(Object.keys(dev))
dev.geoLocation.push(44.0);
console.log(dev) 