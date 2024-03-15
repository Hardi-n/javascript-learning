// Dates

let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toISOString())
// console.log(mydate.toDateString()) //best1 method to use date 
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString()) //best 2
// console.log(mydate.toLocaleString()) //best3
// console.log(mydate.toTimeString())

let myCreatedDate = new Date(2023,7,3)
let myCreatedDate2 = new Date(2023,7,3,16,15,45)
// console.log(new Date("2023-08-03").toLocaleString())
// console.log(new Date("01-08-2023").toLocaleString())
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toLocaleString())


let TimeStamp = Date.now()
// console.log(TimeStamp)
// console.log(myCreatedDate.getTime())

//for seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

// console.log(`date is ${newDate.getDate()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default' ,{
    weekday:'long',
    second:'2-digit',
    // timeStyle:'medium',
})
console.log(newDate.toLocaleString())