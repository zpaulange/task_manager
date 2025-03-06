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
  initTask:()=>{
    const task = localStorage.getItem('tasks')
    /* if(task) return JSON.parse(task)
    localStorage.setItem('tasks', JSON.stringify([])) */
  }
}

TASK.initTask()

