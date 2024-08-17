//singleton

const tinderuser = {}

tinderuser.name = "mansih"
tinderuser.email = "mansih#123"
tinderuser.isloggedin = false

// console.log(tinderuser);

//object contains another object

const anotheruser = {
    id : 232323,
    mail :" mj1022212@gamil.com",
    username : {
        firstname : "manish",
        lastname  : "joshi"


    },
    ph: 392898932938398


}
// console.log(anotheruser);

const obj1 ={A : 1,B:2, c : 2 }

const obj2 ={d: 1,e:2, f : 2 }

const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(tinderuser)); //find all the keys of object
console.log(Object.values(tinderuser));
console.log(Object.hasOwnProperty('name'));


