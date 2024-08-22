// apply rest operator or spread operator in functions

function mycart(... num1){  //the use of this operator we can pass multiple values 

    return num1
}
// console.log(mycart(200 , 8000,4000));

// when an object pass in function

const user = {
    username : "manish",
    price : 399

}
function handleobject(anyobject){
    // return value

console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleobject(user)

// when we dont want to create a variable directly passing the object

handleobject({
    username: "manish",
    price: 3909
})

//Array in function

let mynewarray = [300,400,500]

 function handlarray(anyarray){
     console.log(anyarray[0]);
      return anyarray[3]

 handlarray(mynewarray)
 console.log(handlarray(mynewarray([393,7877])));
 

