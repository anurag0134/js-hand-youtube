let score = "33abc"

console.log(typeof score)
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0

let isLoggedIn = 1

let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn); //output True

//1 => true; 0 => false
// " " => false
// "anurag" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);