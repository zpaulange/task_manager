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
      mainTask.innerHTML = `
        <section class="box box-center">
          <h1>Aucune tache disponible...</h1>
        </section> 
      `
    }
  }
}

TASK.initTask()


