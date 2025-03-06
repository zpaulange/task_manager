const addNewTask = document.querySelector('#addTask')
const addNewTaskModal = document.querySelector('#taskModal')
const closeModal = document.querySelector('#closeModal')

addNewTask.addEventListener('click', (e) => {
  e.preventDefault()
  addNewTaskModal.classList.add('active')
})

closeModal.addEventListener('click', (e) => {
  e.preventDefault()
  addNewTaskModal.classList.remove('active')
})

const TASK = {
  initTask:function(){
    const task = localStorage.getItem('tasks')
    if(task){
      return JSON.parse(task)
    }else{
      localStorage.setItem('tasks', JSON.stringify([]))
    }
    /* if(task) return JSON.parse(task)
    localStorage.setItem('tasks', JSON.stringify([])) */
  },
  displayTask:()=>{
    const taskList = TASK.initTask()
    const mainTask = document.querySelector('#main-task__content')
    if(taskList.length > 0){

    }else{
      mainTask.style.display = 'block'
      mainTask.innerHTML = `
        <section class="box box-center">
          <h1>Aucune tache disponible...</h1>
        </section> 
      `
    }
  },
  addTask:()=>{
    const addTaskForm = document.querySelector('.form')
    addTaskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const taskTitle = addTaskForm.querySelector('input[name="taskTitle"]').value
      const taskDescription = addTaskForm.querySelector('textarea[name="taskDescription"]').value
      const taskDate = addTaskForm.querySelector('input[name="taskDate"]').value
      const task = {
        title: taskTitle,
        description: taskDescription,
        date: taskDate
      }
    })
  }
}

TASK.initTask()
TASK.displayTask()

