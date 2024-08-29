const array = [1,2,3]
for (const num of array) {
    console.log(num);
    
    
}

const greetings = "hello world"

for (const greet of greetings) {
    console.log(`all is greetings ${greet}`); 
}


//maps

const map = new Map()
map.set('in', "India")
map.set('Eng', "England")
map.set('fr', "france")

console.log(map);
for (const [Key , value] of map) {
    console.log(Key , ':-' , value);
}