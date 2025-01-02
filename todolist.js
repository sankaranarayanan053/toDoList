const todoList = [{}];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todo,index) => {
    const HTML = `
      <div>${todo.task}</div>
      <div>${todo.dueDate}</div>
      <button onclick="
        todoList.splice(${index},1);
        renderTodoList();" 
      class = "todo-delete">Delete</button>`;
    todoListHTML += HTML;  
  })

  console.log(todoListHTML);
  
  document.querySelector('.js-todolist').innerHTML = todoListHTML;
}
  
  
  function addToDoList() {
    const inputElement = document.querySelector('.js-todo-input');  
    const task = inputElement.value;

    const dateInputElement = document.querySelector('.js-duedate-input');
    const dueDate = dateInputElement.value
  
    todoList.push({task,
      dueDate
    });
    console.log(todoList);
  
    inputElement.value = '';
    dateInputElement.value= '';
    renderTodoList();
  }
  

  


  
  
  
  

 
