function add(num1,num2){
    // console.log(num1+num2);
    let result = num1 + num2
    return result
    

}


let result = add(2,3)
// console.log("result : ", result);

function login(username){
    return `${username} just logg in `
}
// console.log(login("manish"));

// if the user not enter any name

function loggedin(username="sam"){
    // if(username===undefined)
    if(!username)
    {
        
        
        return `${username} please enter your name`
    }
    return `${username} just logged in `
}
// console.log(loggedin("manish"));


// apply rest operator or spread operator in functions

function mycart(... num1){  //the use of this operator we can pass multiple values 

    return num1
}
// console.log(mycart(200 , 8000,4000));

// when an object pass in function

const user = {
    username = "mansih"
}



