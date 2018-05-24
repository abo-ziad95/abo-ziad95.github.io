const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clear = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');

loadEventLis();

function loadEventLis () {
   form.addEventListener('submit', addTask);
   taskList.addEventListener('click', removeTask)
   clear.addEventListener('click', clearTasks)
   filter.addEventListener('keyup', filterTasks)
   document.addEventListener('DOMContentLoaded', getTasks)
}


function getTasks(){
	let tasks
	if(localStorage.getItem('tasks') === null){
      tasks = []
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
    tasks.forEach( function(el) {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(el));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fas fa-times"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
    });

}

function addTask(e){
  if (taskInput.value === '') {
  	alert('add task')
  	return
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fas fa-times"></i>';
  li.appendChild(link);
  taskList.appendChild(li);

  addToLocalStorage(taskInput.value);
  taskInput.value = '';
  e.preventDefault()
}

function addToLocalStorage(task){
	let tasks
	console.log(task)
	if(localStorage.getItem('tasks') === null){
      tasks = []
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.push(task)
	localStorage.setItem('tasks', JSON.stringify(tasks))
	console.log(localStorage.getItem('tasks'))
}

function removeTask (e) {
	if(e.target.parentElement.classList.contains('delete-item')){
		if( confirm('are u sure?') ){
			e.target.parentElement.parentElement.remove()

			ramoveTaskFromLS(e.target.parentElement.parentElement)
		}
	}
}


function ramoveTaskFromLS (item) {
	 	let tasks
	if(localStorage.getItem('tasks') === null){
      tasks = []
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}

    tasks.forEach( function(task, index) {
    	if(item.textContent === task){
           tasks.splice(index, 1)
    	}
    });

    localStorage.setItem('tasks', JSON.stringify(tasks))

}

function clearTasks () {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild)
	}
	localStorage.clear()
}

function filterTasks (e) {
	const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task) {
    	const item = task.firstChild.textContent
    	if(item.toLowerCase().indexOf(text) != -1){
          task.style.display = 'block'
    	}else {
    		task.style.display = 'none'
    	}
    });


}