const sum = require('./utility/utility.js');

// core module
const filesystem = require('fs');

let checkingAccountBalance = 211
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)