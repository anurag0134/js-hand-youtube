const accountId = 144553
let accountEmail = "anurag11@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState ;


accountEmail = "sajhg@gmail.com"
accountPassword = "3334345"
accountCity = "Chhindwara"

// accountId = 2 // we cannot change accountId because of const keyword
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope

*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])