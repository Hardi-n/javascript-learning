// # Primitive (call by value)

// 7types: string, number , boolean,null,undefined,symbol,bigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId  = Symbol('123')

console.log(id==anotherId)


const bignumber = 22132412413453534n; //bigInt
// # referenced (Non - primitive)

// types: Array , Objects , Functions


const heros = ['shaktiman' , 'naagraj', 'doga']

let object = {
    name : 'subhagya',
    age : 12,
}


const myFunction = function(){
    console.log('Hello World!')
}

console.log(typeof bignumber)