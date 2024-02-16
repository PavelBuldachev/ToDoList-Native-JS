// Функция для отображения всплывающего окна
function showPopup() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

// Функция для скрытия всплывающего окна
function hidePopup() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Функция для обработки кликов за пределами всплывающего окна
document.getElementById('overlay').addEventListener('click', function (event) {
    if (event.target == this) {
        hidePopup();
    }
});