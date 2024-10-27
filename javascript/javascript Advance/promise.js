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


// let login=new Promise((resolve,reject)=>{
//     let user=prompt("Enter value ")
 
      
//     if(user.value==="AAA"){
//         resolve("you are Genius [Fullfilled]")
//     }
//     else{
//         reject("You are the fucking bitch [Error is here]")
//     }
// })
// login.then((mms)=>{
// console.log(mms);

// }).catch((error)=>{
// console.error(error);

// })


let location11 =new Promise((resolve,reject)=>{
    let User = prompt("Enter your location here")
    if(User=="Parour"){
        resolve("yes ,your current location is parour")
    }
    else{
        reject("why are you giving wrong location")
    }
})
location11.then((mss)=>{
    console.log(mss);
    
})
.catch((err)=>{
    console.log(err);
    
})