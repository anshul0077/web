
let searchBtn=document.querySelector("#search-btn")
let searchInput=document.querySelector("#search-input")


let recipeDataContainer=document.querySelector(".recipe-data")
 async function fetchdata(name){
    let data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let response= await data.json()
    console.log(response);
    

    
    let clutter=""
    response.meals.forEach(e => {
        console.log(e.strMeal);
        console.log(e.strMealThumb);
       console.log(e.strInstructions);
        
       clutter+=`<div  class="-z-10 cards h-[75%] text-white  mb-2 flex  items-center justify-around p-4 flex-col shadow-xl rounded-xl w-[32%] bg-green-800">
            <div class="recipe-img h-3/5  flex items-center justify-center rounded-none w-full ">
<img class="rounded-2xl h-full" src="${e.strMealThumb}" alt="">
            </div>
            <div class="title">
                <h2 class="text-2xl">Dish Name:&nbsp ${e.strMeal}</h2>
                <p class="text-lg">${e.strArea} Dish</p>
                <p>Belongs to <span class="text-teal-400 text-lg font-mono font-bold">${e.strCategory}</span> category</p>
            </div>
       
         
                <button  class="recipe-button shadow-lg bg-green-500 p-3 rounded-lg pl-6 pr-6">View Recipe</button>
    
        </div>`
        
    });
    recipeDataContainer.innerHTML=clutter
    
 } 
searchBtn.addEventListener('click',(e)=>{
e.preventDefault()
 let query=searchInput.value.trim()
fetchdata(query)
  setTimeout(dishCount,2000)
})

function dishCount(){
    let countContainer=document.querySelector(".count-container")
    let itemCount= recipeDataContainer.childElementCount
    countContainer.innerHTML=` <div class="dish-count text-black font-mono text-xl">Total Dishes <span class="text-teal-600 font-bold">${itemCount}</span></div>`

}


let over=document.querySelector(".over")
recipeDataContainer.addEventListener('click',(e)=>{
if(e.target.tagName==="DIV"){
       over.style.display="flex"
       over.style.margin="0px 0px 0px 0px"
}

})
let closepopup=document.querySelector(".close")
closepopup.addEventListener('click',()=>{
    over.style.margin="0px 0px 0px -2000px"
})
// inputs

let dishname=document.querySelector(".dishname")
let dishcate=document.querySelector(".dishcate")
let dishdesc=document.querySelector(".dishdesc")
let dishLocal=document.querySelector(".dishlocal")
let dishimg=document.querySelector(".image")
let mssg=document.querySelector(".messanger")





//
let addrbnt=document.querySelector("#addbtnrecipe")
let addrecipebtn=document.querySelector(".addrecipebtn")
let recipePopup=document.querySelector(".add-recipe-popup")
let closerecipe=document.querySelector(".addrecipeclose")
let yourbtn=document.querySelector(".YourRecipe")
let wrapper=document.querySelector(".wrapper")
addrbnt.addEventListener('click',()=>{
    gettingvalues()
    mssg.style.display="flex"
    setTimeout(() => {
    mssg.style.display="none"
        
    },2000);

    
})

function gettingvalues(){
let dishname1=dishname.value
let dishcate1=dishcate.value
let dishdesc1=dishdesc.value
let dishLocal1=dishLocal.value
let dishimg1=dishimg.value
let mss1=mssg.value
console.table(mss1,dishLocal1,dishname1)

}
yourbtn.addEventListener('click',()=>{
    wrapper.style.display="none"
})
recipePopup.style.display="none"
addrecipebtn.addEventListener('click',()=>{
recipePopup.style.display="flex"
    
})
closerecipe.addEventListener("click",()=>{
    recipePopup.style.display="none"
    
})
function viewRecipe(){
recipeDataContainer.addEventListener('click',(e)=>{

    console.log(e.target.tagName);
})

}
setTimeout(viewRecipe(), 4000);


