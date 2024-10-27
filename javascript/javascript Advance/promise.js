// let response = new Promise((resolve,reject)=>{
//     let sucess=true
//     if(sucess){
//         resolve("Login sucessfully")
//     }
//     else{
//         reject("Login failed")
//     }

// })
// response.then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
// console.error(error);

// })


// let exersice1= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              resolve("You complete your promise")
//         },2000)
// })
// exersice1.then((message)=>{
// console.log(message);

// })

// let onePromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("first Promise is done")
//     },1000)
  
    
// })
// onePromise.then((mms)=>{
// console.log(mms);

// })


let login=new Promise((resolve,reject)=>{
    let user=prompt("Enter value ")
      let u= Number(user)
      console.log(typeof u);
      
    if(u===Number){
        resolve("you are Genius [Fullfilled]")
    }
    else{
        reject("You are the fucking bitch [Error is here]")
    }
})
login.then((mms)=>{
console.log(mms);

}).catch((error)=>{
console.log(error);

})
