const addNewTask = document.querySelector('#addTask')
const addNewTaskModal = document.querySelector('#taskModal')

addNewTask.addEventListener('click', (e) => {
  addNewTaskModal.classList.add('active')
})