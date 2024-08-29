//+++++++++++++++++++++ Filter , map , Reduce ++++++++++++++++++++++

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const newnums = arr.filter((num)=>num>4)

// console.log(newnums);

// +++++++++++++++++++++++ Notes +++++++++++++++++++++++++
/*
Filter returns the value
Filter are only used to find the true or false

*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const mybooks = books.filter((search)=> search.genre ==='History')

const mybooks = books.filter((search)=>{
   return search.publish>=1981 && search.genre ==='Fiction'
})
// console.log(mybooks);




// +++++++++++++++++++++++++++ Reduce ++++++++++++++++++++++++++



// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map((nums)=>{return nums+10})

// console.log(newNums);

//+++++++++++++++++++++++ Using filter method ++++++++++++++++++++=

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.filter((nums)=>{
//     if(nums>=1)
//         console.log(nums+10);
        
// })

// console.log(newNums);


//+++++++++++++++++++++++ chaning +++++++++++++++++

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers
                        .map((nums)=> nums*10)
                        .map((nums)=> nums+1)
                        .filter((nums)=> nums>=40)

                        console.log(newNums);
                        



