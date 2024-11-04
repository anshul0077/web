document.addEventListener('DOMContentLoaded',()=>{
  let todoInput= document.querySelector("#todo-input")
  let taskBtn= document.querySelector("#add-task-btn")
  let todoList= document.querySelector("#todo-list")
  let newTask= JSON.parse( localStorage.getItem("tasks")) || []
  newTask.forEach(element=> renderTask(element));
  taskBtn.addEventListener('click',()=>{
   let task=todoInput.value.trim()
   if(task==="") return;
   let allTask={
    id:Date.now(),
    tasks:task,
    completed:false,
   }
   newTask.push(allTask)
   saveTask()
   todoInput.value=""
   renderTask()
   console.log(newTask);
  
  })
  function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(newTask))
  }
  function renderTask(element){
    console.log(element);
    
  }
  
  
})
