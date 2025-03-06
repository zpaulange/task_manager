const addNewTask = document.querySelector('#addTask')
const addNewTaskModal = document.querySelector('#taskModal')

addNewTask.addEventListener('click', () => {
  addNewTaskModal.classList.add('active')
})