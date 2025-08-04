// let kuch_bhi = Math.random()*10000;
// console.log(parseInt(kuch_bhi))

// 0 - 10 range
// let zero_ten = Math.floor(Math.random()*11)
// console.log(zero_ten)

// min - max 
// function get_min_max(min,max){
//     return Math.floor(Math.random()*(max-min+1))+min;
// }

// for (let i=0 ; i<=10 ; i++){
//     console.log(get_min_max(10,15))
// }


// random element from array
let arr=["khusi","vaishnvi","laxmi","sunaina","kanchan"]
let count_v=0
let new_arr=[]
for (let i = 0 ;i <=10 ; i++){
    let randm_name=arr[Math.floor(Math.random()*arr.length)]
    if (randm_name=="vaishnvi"){
        count_v=count_v+1
        new_arr.push(randm_name)
    }
    

}
console.log(count_v)
let v=0;
for (let i=0 ; i<new_arr.length ; i++){
    if(new_arr[i].includes('a') || new_arr[i].includes('e') || new_arr[i].includes('i')){
        v++
    }
}
console.log(v)