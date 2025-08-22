// let fruits=["Biskit","bisleri","coffee","chai","zeher"]
// fruits.forEach((ele,index,arr)=>{
//     if (index==0)
//     console.log(ele,index,arr)
    
// })

// filter(): HOF
// filter function is an array method that creates new array 
// and only return element which passes give test.

// let fruits=["Biskit","bisleri","coffee","chai","zeher"]
// let res=fruits.filter((t)=>t.length>=6)
// let res=fruits.filter((t)=>t.includes("z"))

// console.log(res)

// map():Used to tranform the whole array.
// let fruits=["Biskit","bisleri","coffee","chai","zeher"]
// let res = fruits.map( (z)=>z+" How are you" )
// console.log(res)

// let marks=[20,30,33,44,23,34,54]
// let grace=marks.map((p)=>p+30)


// let pass=grace.filter((p)=>p>=60)
// console.log(pass)

// reduce() :
// let num=[1,2,3,4,5]
// let sum=num.reduce((acc,num)=>acc+num,0)
// console.log(sum)

// step 1 : acc = 0 ,num=1 -> acc=1
// step 2 : acc=1 , num=2 -> acc=3
// step 3: acc=3 , num=3 -> acc= 6