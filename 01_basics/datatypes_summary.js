// JAVASCRIPT is a dynamically typed language

// Primitive : all primitive types are call by value


// 7 types : String, Number, Boolean, null, undefined,Symbol, BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345343524423343423n;

 
// Reference (NOn Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "ironman"]
{
    name: "anurag",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}