const addNewTask = document.querySelector('#addTask')
const addNewTaskModal = document.querySelector('#taskModal')

addNewTask.addEventListener('click', (e) => {
  e.preventDefault()
  addNewTaskModal.classList.add('active')
})