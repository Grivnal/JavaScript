const todoInput = document.getElementById('todo-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');
        const clearBtn = document.getElementById('clear-btn');

        function loadTodos() {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            todos.forEach(todo => renderTodoItem(todo));
        }

        function saveTodos() {
            const todos = [];
            document.querySelectorAll('.todo-item').forEach(item => {
                todos.push({
                    text: item.querySelector('span').textContent,
                    completed: item.classList.contains('completed')
                });
            });
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        function renderTodoItem(todo) {
            const li = document.createElement('li');
            li.className = 'todo-item';
            if (todo.completed) li.classList.add('completed');

            const span = document.createElement('span');
            span.textContent = todo.text;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => {
                li.classList.toggle('completed');
                saveTodos();
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                li.remove();
                saveTodos();
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        }

        addBtn.addEventListener('click', () => {
            const text = todoInput.value.trim();
            if (text) {
                renderTodoItem({ text, completed: false });
                saveTodos();
                todoInput.value = '';
            }
        });

        clearBtn.addEventListener('click', () => {
            todoList.innerHTML = '';
            saveTodos();
        });

        loadTodos();