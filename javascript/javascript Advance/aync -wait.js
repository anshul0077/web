
let userData= new Promise((reslove,reject)=>{
setTimeout(()=>{
        reslove({name:"Anshul",age:20})
},2000)
})
userData.then((reslove)=>{
    console.log(reslove);
    
})
async function userData1(){
    
}