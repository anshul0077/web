document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
let expense=JSON.parse(localStorage.getItem("EXPENSE")) ||[]
renderList()
let totalAmount=calculate()
console.log(totalAmount);

expenseForm.addEventListener('click',(e)=>{
e.preventDefault()
const name=expenseNameInput.value.trim()
const amount=parseInt(expenseAmountInput.value.trim())
if(name !=="" && !isNaN(amount) && amount>0){
  const newExpense={
    id:Date.now(),
    name:name,
    amount:amount,
  }
  expense.push(newExpense)
  saveToLocal()
  renderList()
 updateTotal()
  //clear input
  expenseNameInput.value=""
  expenseAmountInput.value=""

}

}) 
function renderList(){
  expense.forEach((e)=>{
    let li=document.createElement('li')
    li.innerHTML=` <span>${e.name}--$${e.amount}</span>  <button data-id=${e.id} >Delete</button>`
    expenseList.appendChild(li)
      

  })

}

expenseList.addEventListener('click',(e)=>{
  if(e.target.tagName==="BUTTON"){
    e.target.parentElement.remove()
   exId= parseInt(e.target.getAttribute('data-id'))
    expense=expense.filter((items)=>items.id !== exId)
    saveToLocal()
    updateTotal()
    renderList()
  }
  
})
function updateTotal(){
  totalAmount=calculate()
  totalAmountDisplay.textContent=totalAmount.toFixed(2)
}

function calculate(){
  let total=0
return expense.reduce((acc,expense)=>acc+expense.amount,total)
}
function saveToLocal(){
  localStorage.setItem("EXPENSE",JSON.stringify(expense))
}
});
