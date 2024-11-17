document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  let expense=JSON.parse(localStorage.getItem("EXPENSE")) ||[]
  maintotal()
renderList()
function maintotal(){
  let totalmain=(JSON.parse(localStorage.getItem("Total")))
  totalAmountDisplay.textContent=totalmain

}
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
  renderList()
  updateTotal()
  saveToLocal()
  maintotal()
  //clear input
  expenseNameInput.value=""
  expenseAmountInput.value=""

}

}) 
function renderList(){
  expenseList.innerHTML=""
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
    updateTotal()
    saveToLocal()
    maintotal()
    renderList()
  }
  
})
let totalAmount
function updateTotal(){
  totalAmount=calculate()
}


function calculate(){
  let total=0
return expense.reduce((acc,expense)=>acc+expense.amount,total)
}
function saveToLocal(){
  localStorage.setItem("EXPENSE",JSON.stringify(expense))
  localStorage.setItem("Total",JSON.stringify(totalAmount))
}

});
