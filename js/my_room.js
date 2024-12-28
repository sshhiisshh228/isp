// Получение данных из sessionStorage
let login = sessionStorage.getItem("login"); // Получаем логин пользователя
let date = sessionStorage.getItem("date"); // Получаем дату
let sex = sessionStorage.getItem("sex"); // Получаем пол
let result = sessionStorage.getItem("result"); // Получаем результат

// Проверяем, существуют ли логин и дата
if (!login || !date) {
    // Если логин или дата отсутствуют, перенаправляем пользователя на страницу входа
    window.location.href = "./html/Hogwarts_express.html";
} else {
    // Если логин и дата существуют, отображаем полученные данные на странице
    document.getElementById("username").innerText = login; // Устанавливаем логин в элемент с id "username"
    document.getElementById("username2").innerText = login; // Устанавливаем логин в элемент с id "username2"
    document.getElementById("date").innerText = date; // Устанавливаем дату в элемент с id "date"
    document.getElementById("sex").innerText = sex; // Устанавливаем пол в элемент с id "sex"
    document.getElementById("result").innerText = result; // Устанавливаем результат в элемент с id "result"
}

// Функция для очистки данных из sessionStorage
function clearDate() {
    sessionStorage.removeItem("login"); // Удаляем логин из sessionStorage
    sessionStorage.removeItem("date"); // Удаляем дату из sessionStorage

    // Перенаправляем пользователя на страницу входа после очистки данных
    window.location.href = "./Hogwarts_express.html";
}

// Добавляем обработчик события 'click' на кнопку с id "logout"
// При клике вызывается функция clearDate
document.getElementById("logout").addEventListener('click', clearDate);