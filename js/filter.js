// Добавляем класс active-link к ссылке "Все задачи" по умолчанию
window.onload = function () {
    document.getElementById('allTasks').classList.add('active-link');
};

// Добавьте слушателей событий к ссылкам фильтра
document.getElementById('allTasks').addEventListener('click', function () {
    filterTasks('all');
    setActiveLink(this);
});

document.getElementById('activeTasks').addEventListener('click', function () {
    filterTasks('active');
    setActiveLink(this);
});

document.getElementById('completedTasks').addEventListener('click', function () {
    filterTasks('completed');
    setActiveLink(this);
});

function setActiveLink(link) {
    // Получаем все ссылки фильтра
    var filterLinks = document.querySelectorAll('.filter a');

    // Удаляем класс active-link со всех ссылок
    filterLinks.forEach(function (link) {
        link.classList.remove('active-link');
    });

    // Добавляем класс active-link ко кликнутой ссылке
    link.classList.add('active-link');
}

function filterTasks(filter) {
    // Находим все задачи
    var tasks = document.querySelectorAll('.task');

    // Проходимся по каждой задаче
    tasks.forEach(function (task) {
        // Находим чекбокс для задачи
        var checkbox = task.querySelector('.checkbox');

        // Проверяем фильтр и установливаем соответствующее свойство отображения задачи
        if (filter === 'all') {
            task.style.display = 'flex';
        } else if (filter === 'active' && checkbox.checked) {
            task.style.display = 'none';
        } else if (filter === 'completed' && !checkbox.checked) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    });
}