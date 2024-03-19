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
console.log(loginUserMessage("subhagya"))
console.log(loginUserMessage())