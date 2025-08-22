// array ,string ,objects ,oops, dom.
// Array defination
// Array creation
// Array accessing
// Array updation
// Array traversing
// Array built-in methods
// Array assignment

// What is array and its properties.
// Array is an dynamic data structure in javascript used to store multiple data/value/information of different types of data in a single variable/object.

// Properties
// 1.Array are mutable in nature.
// 2.Array are indexed,ordered and can be sliced.
// 3.Array can be hetrogenous and homogenous.
// 4.Dyanmic memory management allocation.

// Array creation
// 1.using new Array().
// 2.Using [].

// let stu_marks=[45,89,55,89,39,53,68] // homogenous
// console.log(stu_marks)

// let new_stu_marks=new Array("dev","aman") // homogenous
// console.log(new_stu_marks)

// let stu_details=[45,90,true,false,"noida sec-15",['metro city']] // hetrogenous
// console.log(stu_details)


// Array accessing
// let stu_details=[45,90,true,false,"noida sec-15",['metro city',['aman',"shivam",'shubham']],[90,100,40,50,60]]
// console.log(stu_details.length)
// console.log(stu_details[5][1][2])
// console.log(stu_details[5][1][1])


// let new_arr=[ [3,8,0,['d','e','g'],'aman',89] ,90]
// console.log(new_arr[0][3][2])


// Array updation
// let stu_marks=[45,89,55,89,39,53,68]
// stu_marks[5]=300000;
// stu_marks[5]="shivam"
// console.log(stu_marks)

// let new_arr=[ [3,8,0,['d','e','g'],'aman',89] ,90]
// new_arr[0][4]="javascript"
// console.log(new_arr)


// let new_arr1=[ [3,8,0,['d','e','g'],'aman',89] ,90]
// new_arr1[4]="how are you"
// console.log(new_arr1)


// Array traversing
// // for loop
// let stu_marks=[45,89,55,89,39,53,68]
// for (let i=0 ; i<stu_marks.length ;i++){
//     console.log(stu_marks[i])
// }


// // while loop
// let stu_marks=[45,89,55,89,39,53,68]
// let i=0;
// while (i<stu_marks.length){
//     console.log(stu_marks[i])
//     i++
// }

// // do while loop
// let stu_marks=[45,89,55,89,39,53,68]
// let i=0;
// do{
//     console.log(stu_marks[i])
//     i++;
// }while(i<stu_marks.length)


// // for of
// let stu_marks=[45,89,55,89,39,53,68]
// for (v of stu_marks){
//     console.log(v)
// }

// for in 
// let stu_marks=[45,89,55,89,39,53,68]
// for (i in stu_marks){
//     console.log(stu_marks[i])
// }

// let stu_marks=[45,89,55,89,39,53,68]
// let first=stu_marks[0]
// let last=stu_marks[stu_marks.length-1];
// stu_marks[0]=last;
// stu_marks[stu_marks.length-1]=first;
// console.log(stu_marks)

// Array built-in methods
 // push() : add element at last of the array.
// let stu_marks=[45,89,55,89,39,53,68]
// stu_marks.push([7879898,8,'a'])
// console.log(stu_marks)

// unshift() : add element at starting of the array.
// let stu_marks=[45,89,55,89,39,53,68]
// stu_marks.unshift(889889)
// console.log(stu_marks)


// shift() : remove element at the startring from the array.
// let stu_marks=[45,89,55,89,39,53,68]
// let out=stu_marks.shift()
// console.log(stu_marks)
// console.log(out)

// pop() : remove element at the end from the array.
// let stu_marks=[45,89,55,89,39,53,68]
// let out=stu_marks.pop()
// console.log(stu_marks)
// console.log(out)

// includes() :Check availability of element present the array.
// let stu_marks=[45,89,55,89,39,53,68]
// let out=stu_marks.includes(98)
// console.log(out)

// reverse() : reverse the array.
// let stu_marks=[45,89,55,89,39,53,68]
// let out=stu_marks.reverse()
// console.log(out)

// indexOf():
// let stu_marks=[45,89,55,89,39,53,68,89,78,55,89]
// let out=stu_marks.indexOf(89,4)
// console.log(out)

// lastindexOf()
// let stu_marks=[45,89,55,89,39,53,68,89,78,55,89]
// let out=stu_marks.lastIndexOf(55)
// console.log(out)

// at():
// let stu_marks=[45,89,55,89,39,53,68,89,78,55,89]
// let out=stu_marks.at(4)
// console.log(out)

// concat()
// let stu_marks=[45,89,55,89,39,53,68,8,78,55,89]
// let stu_new_marks=[45,89,55,89,39,53,68,89,78,55,89]
// let res=stu_marks.concat(stu_new_marks);
// console.log(res)

// sort()
// let stu_marks=[45,89,55,89,39,53,68,18,78,55,89]
// let res=stu_marks.sort();
// console.log(res)

// let stu_marks=[45,89,55,89,39,53,68,18,78,55,89]
// let res=stu_marks.sort((a,b)=>b-a);
// console.log(res)


// slice(start,end):Return new sub array.
// let stu_marks=[45,89,55,89,39,53,68,8,78,55,89]
// let res=stu_marks.slice(0,-3)
// console.log(res)

// copyWithin()
// let stu_marks=[10,20,30,40,50,60]
// let res=stu_marks.copyWithin(3)
// console.log(res)


// Filter()
// let stu_marks=[10,20,30,40,50,60]
// function callback(a){
//     return a>30
// }
// let res=stu_marks.filter(callback)
// console.log(res)

// fill()
// let stu_marks=[10,20,30,40,50,60]
// let res=stu_marks.fill("vishesh",3)
// console.log(res)

// splice()


// [2 x 1 =2 ,2 x 2 = 4]
// let data = require('prompt-sync')();
// let num=data("Enter you data : ")
// let my_arr=[];
// for (let i=1; i<=10 ;i++){
//     my_arr.push(`${num} x ${i} = ${num*i}`)
// }

// console.log(my_arr)


// flat()
// let my_arr=[12,78,[34,90,[78,90,76,['a','b','c']]],[7,90,10,[7800]]];
// let res=my_arr.flat(Infinity)
// console.log(res)

// let my_arr=[12,78,,,,,5,,,,,6,,,7,,8,,,888,,,888];
// let res=my_arr.flat()
// console.log(res)

// some()
// let stu_marks=[10,20,30,40,50,60]
// let res=stu_marks.some(a=>a>50)
// console.log(res)

// let stu_marks=[10,11,20,30,40,50,60]
// let res=stu_marks.find(a=>a<10)
// console.log(res)

// Array Structuring and Destructuring . (... rest operators)

// Array Dstructuring : This refers to extracting values from an array into various variable.
// let arr="789dfdsd"
// let my_new=[...arr]
// console.log(my_new.length)

// basic stru
// let fruits=["apple","mango","banana","grapes","lemon"]
// let [a,b,c]=fruits;
// console.log(a)
// console.log(b)
// console.log(c)

// skkiping values
// let fruits=["apple","mango","banana","grapes","lemon"]
// let [a,b,,c]=fruits;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Default value
// let [x=0,y=0,z=0]=[100,230,780];
// console.log(x)
// console.log(y)
// console.log(z)

// swapping values
// let x=5 , y=10;
// [x,y]=[y,x];
// console.log(x)
// console.log(y)

// function getadd(){
//     return [20,30,40,50,90]
// }
// let [a,,b,,c]=getadd()
// console.log(a+b+c);

let data="protien"




