const addNewTask = document.querySelector('#addTask');
const taskModal = document.querySelector('#taskModal');
const taskModalClose = document.querySelector('#taskModalClose');

addNewTask.addEventListener('click', () => {
  taskModal.classList.add('active');
});

taskModalClose.addEventListener('click', () => {
  taskModal.classList.remove('active');
});