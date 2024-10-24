//example 1
// note:- In arrow fxn we use this then it will give the global context and when we use the standard fxn and use this inside it will give the current context mean who is calling 
document.getElementById("changeTextButton").addEventListener('click',()=>{
let paragraph=document.getElementById('myParagraph')
paragraph.innerHTML="The paragraph is Changed"
})

//example 2


document.getElementById('highlightFirstCity').addEventListener('click',function(){
 let ul= document.getElementById('citiesList')
 if(ul.classList.contains('highlight')){

   ul.firstElementChild.classList.remove('highlight')
 }
 else{

   ul.firstElementChild.classList.add('highlight')
 }

})

//example 3
document.querySelector('#changeOrder').addEventListener('click',function(){
  let coffee=document.querySelector('#coffeeOrder')
  coffee.firstElementChild.innerHTML="Espresso"
  coffee.firstElementChild.style.backgroundColor="red"

  
})

//example 4
document.querySelector("#addNewItem").addEventListener('click',function(){

  let sl=document.querySelector("#shoppingList")
  let li=document.createElement('li')
  li.textContent="Donutt"
  sl.appendChild(li)
})

//example 5

document.querySelector("#removeLastTask").addEventListener('click',function(){
  let tl=document.querySelector('#taskList')
tl.lastElementChild.remove()
})

//example 6

document.querySelector("#clickMeButton").addEventListener('click',function(){
  alert("HEllo")
})

//example 7
document.querySelector('#teaList').addEventListener('click',function(e){
  if(e.target.matches(".teaItem")){

    alert('You selecte:'+ e.target.textContent)
  }

})
//example 8