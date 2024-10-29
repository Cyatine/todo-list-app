// script.js
document.addEventListener('DOMContentLoaded', () => {
    const todoItems = document.getElementById('todo-items');
    const form = document.getElementById('edit-todo-form');

    // Sample static items
    const todos = ['Study for M3 Exam', 'Walk the dog', 'Complete homework'];

    // Populate the todo items
    function loadTodos() {
        todoItems.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            todoItems.appendChild(li);
        });
    }

    // Save edited todo on form submission
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent page refresh
            const editedItem = document.getElementById('todo-item').value;
            // Update the first todo for demonstration
            if (editedItem) {
                todos[0] = editedItem; // Update first todo
                loadTodos(); // Reload the todos
                alert('Todo updated successfully!');
                form.reset(); // Reset the form
            }
        });
    }

    loadTodos(); // Initial load of todo items
});
