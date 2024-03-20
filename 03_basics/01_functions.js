function sayMyName (){
    console.log("S")
    console.log("U")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("G")
    console.log("Y")
    console.log("A")
}
// sayMyName()

// function addTwoNumbers (num1,num2){
//     console.log(num1+num2)
// }
function addTwoNumbers (num1,num2){
    // console.log("subhagya")
    return (num1+num2)
}
const result =addTwoNumbers(3,9)
// console.log(result)

function loginUserMessage (username = "Ishant"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("subhagya"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username:"subhagya",
    price :20992556658
}
function handleobjct (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}
// handleobjct(user)
handleobjct({
    username:'ishant',
    price:45
})

const myNewArray = [200,400,300,2000]
function returnSecondValue (getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([400,300,100,4000]))