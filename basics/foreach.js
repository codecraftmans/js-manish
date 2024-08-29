const coding = ["js","cpp","python","java","cotlin"]

// coding.forEach((item)=>{                    //for each loop using call back function , this time we define this by arrow function this by
                                        
    // console.log(item);
    
// })

coding.forEach(function (item){
    // console.log(item);
    
})

function printme (item) {
    console.log(item);
    
}

coding.forEach(printme)