const accountID = 12345565
let accountEmail = 'subhagya.chhabra@gmail.com'
var accountPassword = '123456'
accountCity = 'Sangrur'
let accountState 
// accountID = 45454 // not allowed 
accountEmail = 'subhagya18718@gmail.com'
accountPassword = '41414141'
accountCity = 'Noida'
/*
    prefer not to use var , because of issue in block scope and functional scope
*/
console.log(accountID)
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])