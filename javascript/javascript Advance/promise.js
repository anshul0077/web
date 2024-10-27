let response = new Promise((resolve,reject)=>{
    let sucess=true
    if(sucess){
        resolve("Login sucessfully")
    }
    else{
        reject("Login failed")
    }

})
response.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
console.error(error);

})
