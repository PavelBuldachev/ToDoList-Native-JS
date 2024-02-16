function loadTasks() {
    // Получение задач из Local Storage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Получаем контейнер с задачами
    var tasksContainer = document.getElementById('tasksContainer');

    // Очищаем текущие задачи
    tasksContainer.innerHTML = '';

    // Пройдимся по каждой задаче и создаем элементы DOM
    tasks.forEach(function (task) {

        var newDiv = document.createElement('div');
        newDiv.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = task.completed;

        var taskText = document.createElement('div');
        taskText.className = 'task-text';
        taskText.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p>`;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.className = 'delete-btn';

        deleteButton.addEventListener('click', function () {
            if (confirm('Вы действительно хотите удалить задачу?')) {
                var index = tasks.findIndex(function (t) {
                    return t.title === task.title && t.description === task.description;
                });
                if (index !== -1) {
                    tasks.splice(index, 1);
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    this.parentElement.remove();
                }
            }
        });

        newDiv.appendChild(checkbox);
        newDiv.appendChild(taskText);
        newDiv.appendChild(deleteButton);

        tasksContainer.appendChild(newDiv);
    });
}

// Вызовите функцию loadTasks при загрузке страницы
window.onload = function () {
    loadTasks();
    document.getElementById('allTasks').classList.add('active-link');
};