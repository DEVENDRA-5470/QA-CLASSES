// alert()
// let c=0
// let myinter=setInterval(function(){
//     c+=1
//     document.getElementById("set").innerText=`I am Setinterval at :${c}`


//     if(c==10){
//     clearInterval(myinter)
//     }
// },1000)


// function run(){
//     document.writeln("I am running....")
// }
// let mynewinter=setInterval(run,1000)
 

// let mynewinter=setInterval(()=>document.writeln("I am running..."),100)
        

// let interid=setInterval(()=>{
//     document.writeln("I am running...")
// },1000)

// setTimeout(()=>{
//     // clearInterval(interid)
//     document.writeln("Your Time is Up ❌")
// },5000)

// setTimeout(()=>{
//     // clearInterval(interid)
//     document.writeln("")
// },10000)

// let elem=document.getElementById("set")
// c=1
// function mydiv(){
//     c+=10
//     elem.style.width=`${c}px`
//     elem.style.background="green"
// }

// let mydivinter=setInterval(mydiv,10)

// c=0
// let mydemo=setInterval(()=>{
//     c+=10
//     elem.style.width=`${c}%`
//     elem.style.background="green"

//     if (c>=100){
//         clearInterval(mydemo)
//         console.log(c)
//     }
// },1000)


function demoimg(){
let myimg=document.createElement("img")
document.body.append(myimg)
myimg.src="data:image/png;base64,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"
}

function jadu(){
    setInterval(demoimg,1000)

}