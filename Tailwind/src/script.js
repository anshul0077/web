
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
       <div class="h-96 rounded-3xl w-[700px] hidden bg-red-900 fixed top-52 left-96 z-10"></div>
            <div class="view-recipe">
                <button class="recipe-button shadow-lg bg-green-500 p-3 rounded-lg pl-6 pr-6">View Recipe</button>
            </div>
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


recipeDataContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="BUTTON"){
      
    }
    else{
        console.log("nopie");
        
    }

})
