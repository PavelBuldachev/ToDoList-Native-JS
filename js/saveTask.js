function saveTask() {
    // Получение значения из инпутов
    var title = document.querySelector('input[placeholder="Заголовок новой задачи"]').value;
    var description = document.querySelector('input[placeholder="Описание новой задачи"]').value;

    // Создание объекта новой задачи
    var newTask = {
        title: title,
        description: description,
        completed: false
    };

    // Получаем существующие задачи из Local Storage или инициализируем пустой массив
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Добавляем новую задачу в массив
    tasks.push(newTask);

    // Сохраняем обновленный массив задач в Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Создаем div для задачи
    var newDiv = document.createElement('div');
    newDiv.className = 'task';

    // Создаем чекбокс
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = newTask.completed; // Set the checkbox state based on task completion

    // Создаем div для заголовка и описания
    var taskText = document.createElement('div');
    taskText.className = 'task-text';
    taskText.innerHTML = `<h3>${newTask.title}</h3><p>${newTask.description}</p>`;

    // Создаем кнопку удаления
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'delete-btn';

    // Добавляем слушателя событий для кнопки удаления
    deleteButton.addEventListener('click', function () {
        // Показать диалоговое окно подтверждения
        if (confirm('Вы действительно хотите удалить задачу?')) {
            // Если пользователь подтверждает, удаляем задачу из массива и Local Storage
            var index = tasks.findIndex(function (t) {
                return t.title === newTask.title && t.description === newTask.description;
            });
            if (index !== -1) {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                this.parentElement.remove();
            }
        }
    });

    // Добавляем все элементы в созданный div
    newDiv.appendChild(checkbox);
    newDiv.appendChild(taskText);
    newDiv.appendChild(deleteButton);

    // Добавьте созданный div в контейнер задач
    var tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.appendChild(newDiv);

    // Очищаем поля инпутов
    var inputs = document.querySelectorAll('.popup-container input');
    inputs.forEach(function (input) {
        input.value = '';
    });

    // Скрываем всплывающее окно
    hidePopup();
}