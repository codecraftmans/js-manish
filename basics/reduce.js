// ++++++++++++++++++ Reduce +++++++++++++++++++

const myNumers = [1, 2, 3]

const newNums = myNumers.reduce(function (acc, curval){
    console.log(`acc ${acc} and curval ${curval}`);
    
    return acc + curval
},0)

console.log(newNums);


const 
