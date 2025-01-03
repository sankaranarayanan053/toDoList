const todoList = [];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todo, index) => {
    const HTML = `
      <div>${todo.task}</div>
      <div>${todo.dueDate}</div>
      <button class = "todo-delete js-delete-todo">Delete</button>`;
    todoListHTML += HTML;
  })

  console.log(todoListHTML);

  document.querySelector('.js-todolist').innerHTML = todoListHTML;


  document.querySelector('.js-add-input')
    .addEventListener('click', () => {
      addToDoList();
    });

  document.querySelectorAll('.js-delete-todo')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();

      })
    })
}



function addToDoList() {
  const inputElement = document.querySelector('.js-todo-input');
  const task = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate-input');
  const dueDate = dateInputElement.value

  todoList.push({
    task,
    dueDate
  });
  console.log(todoList);

  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}











