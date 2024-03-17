// singleton (made by constructors)
// Object.create() 
// non-singleton (made by literals)

// object literals

const mysym = Symbol('key1')
const jsUser ={
    name : 'subhagya',
    "full name" : 'subhagya chhabra',
    [mysym] : 'mykey1',
    age : 18,
    location : 'sangrur',
    email : 'subhagyachhabra18718@gmail.com',
    IsLoggedin : false,
    LastloginDays : ['moday','satuday']
}

// console.log(jsUser.name)
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mysym])
jsUser.email=("subhagya.chhabra@gmail.com")
// Object.freeze(jsUser)
jsUser.email= 'subhagyachhabraitlab@gmail.com';
// console.table(jsUser)
// console.log(jsUser)

jsUser.greeting = function (){
    console.log("Hello JsUser!")
}
jsUser.greetingTwo = function (){
    console.log(`Hello JsUser! ,${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())