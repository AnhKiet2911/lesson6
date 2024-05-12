//step lay ra the div
const todoContainer = document.querySelector('.todo_container')

fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/Tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(todos => {
  // Do something with the list of tasks
  todos.forEach(
    (todo) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add("todo-Item");
        todoItem.innerHTML =
        `
            <p>${todo.createdAt}</p>
            <p>${todo.name}</p>
            <p>${todo.id}</p>

        `
        todoContainer.appendChild(todoItem);
  });
}).catch(error => {
  // handle error
})