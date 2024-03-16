const name ='subhagya'
const repocount = 19

// console.log(name + repocount + 'value')  // ok but not recommened 


//string interpolation
console.log(`Hello my name is ${name.toUpperCase()} and my github repository count is ${repocount}`)


const gamename = new String ('abcde')
console.log(gamename[0])

console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('t'))


const newString = gamename.substring(0,4)
console.log(newString)
const anotherString = gamename.slice(-5,4)
console.log(anotherString)
const newStringOne = '   subhagya   '
console.log(newStringOne)
console.log(newStringOne.trim())

const url = 'https://subhagya.com/subhagya%20chhabra/'
console.log(url.replace('%20','-'))

console.log(url.includes('ishant'))
const abcd= 'ajf-cajj-cjn-fjjb-ncajnj'
console.log(abcd.split('-'))