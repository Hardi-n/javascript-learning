const myArr =[1,2,3,4,5,4]
const heros =['shaktiman','naagraj']
const myArr2 = new Array(1,4,5,7,6,8)
// console.log(myArr)

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(8)  //push in starting
// myArr.shift()     //pop from starting

console.log(myArr.includes(9))
console.log(myArr.indexOf(34))
console.log(myArr.indexOf(4))
const newArray = myArr.join() //joins the array and converts into string
console.log(myArr) //type of object
console.log(newArray) //typeof string


//slice , splice

console.log("a" , myArr)

const myn1 = myArr.slice(1,3) //do not includes 3 and also not changes the original array.
console.log("b" , myArr)
console.log(myn1)
const myn2 = myArr.splice(1,3) //includes 3 and also deeply removes the portion or array from original array
console.log('c',myArr)
console.log(myn2)

