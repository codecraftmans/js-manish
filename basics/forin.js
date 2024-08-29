const employe = {
    name : "manish",
    employeid : 121,
    Gamil : "mj1011451@gmail.com"
}
for (const key in employe) {
    console.log(`${key} for ${employe[key]}`);
    
}

//for in loops for array

const myarray = ["js","cpp","py","c","java"]

for (const key in myarray) {
   console.log(myarray[key]);
   
}