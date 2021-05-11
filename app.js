const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");

loadEventListeners ();
 
 function loadEventListeners (){
   // Add Task
   form.addEventListener ("submit", addTask);
   // Remove Task
   taskList.addEventListener ("click", removeTask);
   // Clear tasks
   clearButton.addEventListener ("click", clearTasks);
  // Filter Tasks
  filter.addEventListener ("keyup", filterTasks)
 }

 function addTask(e){
if (taskInput.value === ""){
  alert("Add Task");
}
 const li = document.createElement("li");

 li.className = "collection-item";
 
 li.appendChild(document.createTextNode(taskInput.value))

  const link = document.createElement("a");

 link.className = 'delete-item secondary-content';

 link.innerHTML= '<i class= "fa fa-remove"></i>';

 li.appendChild(link); 
 taskList.appendChild(li)

 //store in local storage 
 storeTaskInLocalStorage(taskInput.value);

 taskInput.value=""

e.preventDefault() 
 }

// store task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
} else{
  tasks = JSON.parse(localStorage.getItem("tasks"));
}
tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));
}

 function removeTask(e){
   if(e.target.parentElement.classList.contains('delete-item')){
     if(confirm('Are You Sure'))
     {
     e.target.parentElement.parentElement.remove();
     }
   }
  
 }
 function clearTasks (){
    taskList.innerHTML = ""
 }
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach
(function (task){
  const item= task.firstChild.textContent;
  if(item.toLowerCase().indexOf(text) != -1){
    task.style.display= "block";
  }
    else{
      task.style.display ="none";
    }
});
}