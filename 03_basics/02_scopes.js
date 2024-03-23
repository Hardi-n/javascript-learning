// let a =10
// const b = 20
// var c = 30

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
  const userName = 'subhagya'
  function two(){
    const website = 'subhagya.io'
    console.log(userName)
  }
  // console.log(website)
  two()
}
// one()

if(true){
  const username = 'subhagya'
  if(username==='subhagya'){
    const website = ' subhagya.io'
    console.log(username+website)
  }
  // console.log(website)
}
// console.log(username)

// ++++++++++++++++++++++++++++++++++++++hoisting++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
  return num+1
}


const addtwo = function (num){
  return num+2
}
addtwo(2)