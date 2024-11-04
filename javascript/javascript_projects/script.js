let todoInput= document.querySelector("#todo-input")
let taskBtn= document.querySelector("#add-task-btn")
let todoList= document.querySelector("#todo-list")

taskBtn.addEventListener('click',()=>{
 let newTask=[]
 let task=todoInput.value.trim()
 if(task==="") return;
 let allTask={
  id:Date.now(),
  tasks:task,
  completed:false,
 }
 newTask.push(allTask)
 todoInput.value=""
 console.log(newTask);
 appendchild(task)
})
function appendchild(task){
let li=document.createElement('li')
li.innerHTML=`${task} <button>Delete</button>`
todoList.append(li)
}
