const marvel = ["superman","batman","spiderman"]
const dc = ["nagraj","dr doom","ironman"]
// marvel.push(dc);
// console.log(marvel);
// const all = marvel.concat(dc) // concat limitaion only used one array
const all = [...marvel,...dc] //spread operator
console.log(all);


const other_array = [1, 2, 3, [4, 5, 6 ], 7 , [8, 9, [10, 11]]];
const another_array = other_array.flat(Infinity);
console.log(another_array);

console.log(Array.from("manish"));



