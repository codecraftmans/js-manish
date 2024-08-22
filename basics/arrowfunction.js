//Explicit Arrow function when we used curly braces we need to written Return funciton

const add = (num1,num2) => {
    return num1 + num2
}
// console.log(add(3,8))


//Implicit Arrow function when we dont used curly braces we dont need to written return function

const addtwonumber = (num1,num2) => (num1+num2)
// console.log(addtwonumber(3,5))


// passing object in function

const user = {
    username : "manish" ,
    price : 399,
    islogged  : true

}
function tinder (value){
    return value

}
// console.log(tinder(user.username))
// console.log(tinder(user.islogged));


