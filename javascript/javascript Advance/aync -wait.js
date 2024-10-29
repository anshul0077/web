
function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             reject({name:"Anshul",age:20})
        },2000)

        // reject("Mishappening in Fetching user data")
    })
}
 let data=fetchUserData()
// data                           OLD STUFF
// .then()
// .catch()


async function userData1(){
try {
    console.log("fetch data successfully");
    let data1= await fetchUserData()
    console.log(data1);
    
    
} catch (error) {
   
    console.log(error);
    
}
}
userData1()