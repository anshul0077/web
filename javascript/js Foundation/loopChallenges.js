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
const city={
paris:40000,
Berlin:35000,
UK:60000,
Canada:30000,
} 

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

