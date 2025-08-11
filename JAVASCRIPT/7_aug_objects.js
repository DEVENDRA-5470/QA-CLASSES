// -------------------- Objects in javascript 
// Objects defination
// Objects creation
// Objects accessing
// Objects updation
// Objects traversing
// Objects built-in methods
// Objects assignment

// Objects defination
// Objects in javascript is data structure used to store data in key:value form.
// Objects has no index they primerly work on key : value .
// Objects are mutable in nature.
// In Objects key must be unique to read and write data correctly.
// In objects we can store any type of ex(primitive and non-primitive)
// Keys must be primitive data types.

// Objects creation
// 1.Using {}.
// let stu_profile={
//     stu_name:"Dev",
//     stu_roll:78678,
//     stu_age:25,
//     stu_marks : 66,
//     stu_hobbies:['coding','cooking',''],
//     stu_desc:{stu1:23,st2:67,stu_arr:[4,5,5,5]},
//     stu_address : 'Delhi',
//     stu_details:function(){
//         return [this.stu_name , this.stu_age , this.stu_marks]
//     },
    
// }


// console.log(stu_profile)
// let res=stu_profile.stu_details()
// console.log(res)

// 2.Using new 
// let my_obj= new Object()

// my_obj.data="Hello"
// my_obj.name="aman"
// my_obj.age=55
// my_obj.stu_details=()=>console.log(my_obj.name)
// console.log(my_obj.stu_details())



// Objects accessing
// let stu_profile={
//     stu_name:"Dev",
//     stu_roll:78678,
//     stu_age:25,
//     stu_marks : 66,
//     stu_hobbies:['coding','cooking',''],
//     stu_desc:{stu1:23,st2:67,stu_arr:[4,5,5,5]},
//     stu_address : 'Delhi',
//     stu_details:function(){
//         return [this.stu_name , this.stu_age , this.stu_marks]
//     },
    
// }
// let res=stu_profile.stu_address;
// let res=stu_profile.stu_hobbies[0];
// console.log(res)

// Objects updation
// stu_profile.stu_address="Gurugram"
// console.log(stu_profile)


// Objects traversing (self assessment).


// Objects built-in methods.
// let stu_profile={
//     stu_name:"Dev",
//     stu_roll:78678,
//     stu_age:25,
//     stu_marks : 66,
//     stu_hobbies:['coding','cooking',''],
//     stu_desc:{stu1:23,st2:67,stu_arr:[4,5,5,5]},
//     stu_address : 'Delhi',
//     stu_details:function(){
//         return [this.stu_name , this.stu_age , this.stu_marks]
//     },
    
// }
// let key=Object.keys(stu_profile)
// console.log(key)

// let key=Object.values(stu_profile)
// console.log(key)

// let key=Object.entries(stu_profile)
// console.log(key)

// freeze () : Freeze an object to cannot delete or change.
// seal() : cannot access to write new element cannot change.
// let stu_profile={
//     stu_name:"Dev",
//     stu_roll:78678,
//     stu_age:25,
//     stu_marks : 66,
//     stu_hobbies:['coding','cooking',''],
//     stu_desc:{stu1:23,st2:67,stu_arr:[4,5,5,5]},
//     stu_address : 'Delhi',
//     stu_details:function(){
//         return [this.stu_name , this.stu_age , this.stu_marks]
//     },
    
// }
// Object.seal(stu_profile)
// Object.freeze(stu_profile)
// stu_profile.stu_address="Dubai"
// stu_profile.stu_food="burgur"



