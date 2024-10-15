//challenges

//1

let sum=0
let i=1
while(i<=5){
    sum+=i
    i++
}
console.log(sum);

// 2
let countdown=[]
let j=5
while (j>0) {
    countdown.push(j)
    j--
}
console.log(countdown);
//3

// let teaCollection=[]
// let user
// do {
//  user=prompt("Enter your favourite tea (type stop to end)")
//     if(user !== 'stop'){
//         teaCollection.push(user)
//     }
// } while (user !== 'stop');
// console.log(teaCollection);

//4
let total=0
let l=1
do {
    total+=l
    l++
} while (l<=3);
console.log(total);

//5
let arr=[2,4,6]
let mulitarr=[]
for(let i=0;i<arr.length;i++){
  mulitarr.push( arr[i]*2)
    
}
console.log(mulitarr);
//6
let listcity=[]
let larray=['Paris','New York','Tokyo','London']
for(let i=0;i<larray.length;i++){
   listcity.unshift(larray[i])
}
console.log(listcity);
