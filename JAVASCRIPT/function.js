// What is function in javascript.
// 1.Every Function has thier own purpose.
// 2.Function is a group of code which does a specific task.
// 4.Function can be reused.
// 5.Easy to debug and improve code quality.

// Types of function in js.
// 1.Inbuilt-function (methods). ex- console.log()
// 2.UDF (User-defined-function) function(),arrow function.

// function defination
// function calling
// parameters : types
// arguments : types
// return keyword
// categories of function 
// closures( nested function)
// Hoisting 
// Scoping

//--------------------------------------------------------------

// 1.Traditional function.
// function sayHello(){ // Defination
//     console.log("I am saying hello to all ! ") // statements (logic)
// }
// sayHello() // calling

//--------------------------------------------------------------

// 2.Arrow function (Annonymous function)
// let sayHello=()=>(console.log("I am saying hello to all ! with arrwo function"),console.log("i am next"))
// sayHello()

// let add=(a,b)=>(console.log(a+b),console.log(a-b),console.log(a*b));
// add(10,20)

//--------------------------------------------------------------
// 3.Function Expression

// let hello=function(){
//     console.log("I am from function expression")
// }
// hello()

//--------------------------------------------------------------

// 4.IIFE : Immidiate invoked function expression. (always define at top level)
// (function(){
//     console.log("I AM IIFE...!")
// })()

// 5.HOF : Higher-order-function : A function that take another as its (callback function) arguments.

// function say_to_user(callback){
//     console.log(callback)
//     let name = "Saurav"
//     callback(name)
    
// }

// function sayHello(name){
//     console.log(`Hello ${name}`)
// }

// let sayHello=(name)=>(console.log(`Hello ${name}`))

// say_to_user(sayHello)




// take nothing return nothing.
// function add(){
//     let a=20;
//     let b=60;
//     let res=a+b;
//     console.log(`Sum of ${a} and ${b} : ${res}`)
// }
// let t=add()
// console.log(t)

// take nothing return something
// function add(){
//     let a=20;
//     let b=60;
//     let res=a+b;
//     return res;
// }
// let t=add()
// console.log(t+500)
// console.log(typeof(t))

// take something return something
// function add(a=0,b=0){ // Default parameter
//     let n1=a;
//     let n2=b;
//     let res=n1+n2;
//     return res;
// }
// let t=add(45,45) // positional args
// console.log(t)

// take something return nothing
// function add(a=0,b=0){ // Default parameter
//     let n1=a;
//     let n2=b;
//     let res=n1+n2;
//     console.log(`Sum of ${a} and ${b} : ${res}`)
// }
// let t=add(45,45) // positional args
// console.log(t)

// Write a four function  (menu based program)
// 1.add number 2.sub 3.mul 4.divide
