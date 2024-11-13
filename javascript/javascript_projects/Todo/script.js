document.addEventListener('DOMContentLoaded',()=>{
  let todoInput= document.querySelector("#todo-input")
  let taskBtn= document.querySelector("#add-task-btn")
  let todoList= document.querySelector("#todo-list")
  let newTask= JSON.parse( localStorage.getItem("tasks")) || []
  let allTask
  newTask.forEach(element=> renderTask(element));
  taskBtn.addEventListener('click',()=>{
   let task=todoInput.value.trim()
   if(task==="") return;
    allTask={
    id:Date.now(),
    tasks:task,
    completed:false,
   }
   newTask.push(allTask)
   saveTask()
   todoInput.value=""
   renderTask(allTask)
   console.log(newTask);
  
  })
  function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(newTask))
  }
  function renderTask(element){
    console.log(element.tasks);
    const li=document.createElement('li')
    li.setAttribute("data-id",element.id)
    li.innerHTML=`<span>${element.tasks}</span> <button>Delete</button> `

    todoList.appendChild(li)
  li.addEventListener('click',(e)=>{
    if(e.target.tagname==="BUTTON") return;
    element.completed=!element.completed
    li.classList.toggle("completed")
    saveTask()
  })
  li.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation(); //prevent toggle from firing
    tasks = tasks.filter((t) => t.id === task.id);
    li.remove();
    saveTasks();
  });

  
  }
  
  
})
