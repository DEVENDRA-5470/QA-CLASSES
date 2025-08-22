// 1.Class is a blueprint for creating objects.
// contains properties (data) and methods(functions) related to an object.

// class Person{
//     constructor(name,age,address){
//         this.name=name
//         this.age=age
//         this.address=address
//     }

//     show_info(){
//         console.log(`
// Name:${this.name} 
// Age:${this.age}
// address :${this.address}`)
//     }
// }

// const obj1=new Person("Dev",24,"Noida")
// obj1.show_info()

// Task - class Mobile data(mob_name,mob_model,ram,price,brand)
// method (calling,gaming,radio,camera,wifi)


// Encapsulation
// Wrapping data (properties) and methods inside a class.
// You can make data private in js using #.

// class BankAccount{
//     #balance=0;

//     deposite(amt){
//         this.#balance+=amt
//     }

//     getBalance(){
//         return this.#balance
//     }
// }

// const account=new BankAccount()
// account.balance=788
// account.deposite(789898989)
// console.log(account.getBalance())

// Inheritance

class Meta{
    parent="Meta"
}

class Whatsappv1 extends Meta{
    textMsg(){
        console.log("whataappv1 has message feature")
    }
}

class Whatsappv2 extends Whatsappv1{
    vedioCalling(){
        console.log("Whatsaapv2 has vedio calling feature")
    }
}

const user1=new Whatsappv2()
user1.vedioCalling()
user1.textMsg()
console.log(user1.parent)