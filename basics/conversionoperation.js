// 1.  Changed string to number

// let score = "33"
// console.log(score); // output 33
// console.log(typeof score); // string
// let valueInNumber = Number(score); // this will change the string data in number
// console.log(valueInNumber); // still 33
// console.log(typeof valueInNumber); // conversion operation performed and the value of string is changed in number

// 2.  changed boolean value into number

// let score = true;
// console.log(score); //simply print the value of score 
// console.log(typeof score); // the type of data store in score is boolean
// let valueInNumber = Number(score); //this conversion change the boolean type of data to its number value 1
// console.log(valueInNumber); // the score value was converted into Number =1
// // console.log(typeof score);

// let score = "354abc"
// console.log(score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);


let score = "2323abc";
console.log(typeof score); // in this time the type of number is string
let valueInNumber = Number(score); //we convert the value of score 2323abc 
console.log(valueInNumber);   // the conversion of string 2323abc is not a Number , 
console.log(typeof valueInNumber); // why the number is changed into number

