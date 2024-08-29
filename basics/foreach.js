// For Each loop


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


coding.forEach((item,index,arr)=>{   //for each loop contain three values item , index, array
    console.log(item,index,arr);
    
})


//++++++++++++++++++++++ Objects in Array ++++++++++++++++++++++++

const mycoding = [
    {
        languagename: "Javascript",
        languagefilename:"js"

    }  ,

    {
        languagename: "Python",
        languagefilename:"py"

    }  ,
    {
        languagename: "java",
        languagefilename:"java"

    }  


]

mycoding.forEach((item)=> {
    console.log(item.languagefilename);
    console.log(item.languagename);
    
    
})


//+++++++++++++++++++++++++++++++Notes++++++++++++++++++++++++

/*

for each loop not returns any value

*/