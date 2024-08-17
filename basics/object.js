const mysum = Symbol("my1")

const employe = {
    name : "manish",
    employeid : 121,
    Gamil : "mj1011451@gmail.com",
    [mysum] : "dfdf"
}
console.log(employe.name); // method of accesing the object value
console.log(employe["Gamil"]); // another maethod of accesing the object
console.log(typeof employe["mysum"]);

employe.employeid = 32322; //if we want to change the value of ey =
console.log(employe);

employe.greetings= function(){
    console.log("welcom");
    console.log(`welcome ${this.name}`); //this means the object jo usi me h 
    
    
}
console.log(employe.greetings());



