function freeFireData(){
return new Promise((reslove,reject)=>{
    setTimeout(() => {
        reslove("Free Fire Data Fetched")
    }, 3000);
})
}
function PubgData(){
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove("Pubg Data Fetched")
        }, 2000);
    })
}

async function gameData() {
    try {
        console.log("Fetching Games data");
        // let fdata= await freeFireData()
        // let pdata= await PubgData()
        let [fdata,pdata]= await Promise.all([freeFireData(),PubgData()])
        console.log(fdata);
        console.log(pdata);
        console.log("Fetched Game data successfully");
    
    } catch (error) {
        console.error("Failed to fetching games data",error)
    }
}
gameData()





// another fun with phone data

function iphonedata(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve('"Fetch iphone data",{Model:"Iphone 16",Brand:"Iphone",prize:"1,50,000"}')
    },5000)
})
}
function samsungData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve('Fetch Samsung data"{Model:"S 24 Ultra",Brand:"Samsung",prize:"1,20,000"}')
        },2000)
    })
}
async function fetchSamartPhone() {
    try {
        console.log("Phones data fetching ....");
        let [iData,sData]= await Promise.all([iphonedata(),samsungData()])
        console.log(iData);
        console.log(sData);
        console.log("Fetched phone data Sucessfully");
        
        
        
    } catch (error) {
        console.erro("Failed to fetch Phone data");
        
    }
}
fetchSamartPhone()