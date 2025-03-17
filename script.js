const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <span class="edit">Edit</span>
      <span class="delete">Delete</span>
    </div>
  `;

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });

  li.querySelector('.edit').addEventListener('click', () => {
    const newText = prompt('Edit task:', taskText);
    if (newText !== null && newText.trim() !== '') {
      li.querySelector('span').textContent = newText;
    }
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
