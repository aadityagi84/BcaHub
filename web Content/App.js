document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addButton = document.getElementById('addButton');
  const tasksList = document.getElementById('tasks');

  addButton.addEventListener('click', addTask);

   function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.className = 'taskItem';
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
      `;
      tasksList.appendChild(taskItem);
      taskInput.value = '';
     const deleteButton = taskItem.querySelector('.deleteButton');
      deleteButton.addEventListener('click', () => {
        tasksList.removeChild(taskItem);
      });
    }
  }
});