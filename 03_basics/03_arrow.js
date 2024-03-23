const user = {
    username : 'subhagya',
    price :999,
    welcomeMessage : function(){
        console.log(`welcome to website,${this.username}`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()
// console.log(this)

// this can not be used in functions
/*
function chai(){
    const usename = 'asnjfnj'
    console.log(this.usename)
}
*/
/*
const chai = function (){
    const usename = 'asnjfnj'
    console.log(this.usename)
}
*/
const chai = ()=>{
    const username = "sadjbdj"
    console.log(this)
}
// chai()


// const addtwo = (num1,num2)=>{
//     return num1+num2
// }

// implicit return 
// const addtwo =(num1,num2) => num1+num2

// const addtwo =(num1,num2) => (num1+num2)
const addtwo = (num1,num2) => ({usename : 'subhagya'})

console.log(addtwo(5,2))


const myArray = [2,5,4,8,6,7]
// myArray.forEach()