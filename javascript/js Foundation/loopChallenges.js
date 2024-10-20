let selectedTeas=[]
let teas=['green tea','black tea','chai','oolong tea']
for(let i=0;i<teas.length;i++){
    if(teas[i]=='chai'){
        break;
    }
    selectedTeas.push(teas[i])
    

}
console.log(selectedTeas);

// 2
let visitedCity=[]
let cities=['Paris','Landon','New York','Berlin']
for(let i=0;i<cities.length;i++){
    if(cities[i]==='Paris'){
        continue;
    }
    visitedCity.push(cities[i])
}
console.log(visitedCity);

//3
let number=[1,2,3,4,5]
let smallNumber=[]
for (const num of number) {
    if(num ===4){
        break
    }
    smallNumber.push(num)
}
console.log(smallNumber);

//4
let tteas=['chai','green tea','Herbal tea','black tea']
let prefferdTeas=[]
for (const tt of tteas) {
    if(tt==='herbal tea' || tt==='Herbal tea'){
        continue;
    }
    prefferdTeas.push(tt)
}

console.log(prefferdTeas);

//5
const citypopulation={
paris:40000,
UK:60000,
Canada:30000,
Berlin:35000,
} 




const newCity={}
for (const city in citypopulation) {
    // console.log(citypopulation[city]);
    if(city=='Berlin'){
        break;
    }
    newCity[city]=citypopulation[city]
    
}
console.log(newCity);

//6
let worldcities={
 
   "sydney":5000000,
   "Toyko":9000000,
   "Berlin":3500000,
   "Paris":2200000,
}
let largeCities={}
for (const wciti in worldcities) {
    if(worldcities[wciti]< 3000000){
        continue;
    }
     largeCities[wciti]=worldcities[wciti]
  
}
console.log(largeCities);

//7
let arrr=['earl grey','green tea','chai','oolong tea']
let availabletea=[]
arrr.forEach(e => {
    if(e=="chai"){
    return
    }
    availabletea.push(e)
});
console.log(availabletea);

//8
let citycollection=["sydney","Toyko","Berlin", "Paris"]
let traveledcity=[]
citycollection.forEach(e => {
    if(e=="sydney"){
        return
    }
    traveledcity.push(e)

});
console.log("traveled city",traveledcity);

// 9
let num=[2,5,7,9,]
let doublenumber=[]
for(let i=0;i<num.length;i++){
    if(num[i]==7){
        continue
    }
    doublenumber.push(num[i]*2)
}
console.log(doublenumber);


