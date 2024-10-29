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