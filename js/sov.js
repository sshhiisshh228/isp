// Получаем форму с именем "test_form"
let test = document.forms.test_form;

// Добавляем обработчик события 'submit' к форме
test.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    let count = 0; // Переменная для подсчета правильных ответов
    let answer = document.getElementsByClassName('true'); // Получаем элементы, которые должны изменять цвет
    let answer2 = document.getElementsByClassName('true_text'); // Получаем элементы текста с правильными ответами

    // Проверка валидности ответов на вопросы 4, 5 и 6
    if (test.elements.q4.validity.valid) {
        count++; // Увеличиваем счетчик на 1, если ответ валиден
    }
    if (test.elements.q5.validity.valid) {
        count++; // Увеличиваем счетчик на 1, если ответ валиден
    }
    if (test.elements.q6.validity.valid) {
        count++; // Увеличиваем счетчик на 1, если ответ валиден
    }

    // Проверяем правильность ответов на вопросы 1, 2 и 3
    if (test.elements.q1.value == "true") {
        count++; // Увеличиваем счетчик, если ответ верный
    }
    if (test.elements.q2.value == "true") {
        count++; // Увеличиваем счетчик, если ответ верный
    }
    if (test.elements.q3.value == "true") {
        count++; // Увеличиваем счетчик, если ответ верный
    }

    // Изменяем цвет фона для элементов с классом 'true'
    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = "#b4b4b4"; // Устанавливаем цвет фона
    }

    // Увеличиваем непрозрачность текста с правильными ответами
    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.opacity = 1; // Устанавливаем непрозрачность для отображения текста
    }

    // Сохраняем количество правильных ответов в sessionStorage
    sessionStorage.setItem("result", count);

    // Отображаем количество правильных ответов на странице
    document.getElementById("result-main").innerText = "result: " + count;
});

// Функция для сброса всех ответов и очистки результата
function reset() {
    let answer = document.getElementsByClassName('true'); // Получаем элементы, которые изменяли цвет
    let answer2 = document.getElementsByClassName('true_text'); // Получаем текстовые элементы с правильными ответами
    sessionStorage.setItem("result", 0); // Сбрасываем результат в sessionStorage

    // Восстанавливаем фон для элементов с классом 'true'
    for (i = 0; i < answer.length; i++) {
        answer[i].style.backgroundColor = ""; // Сбрасываем цвет фона
    }

    // Уменьшаем непрозрачность текста с правильными ответами
    for (i = 0; i < answer2.length; i++) {
        answer2[i].style.opacity = 0; // Устанавливаем непрозрачность в 0
    }

    // Очищаем текст результата на странице
    document.getElementById("result-main").innerText = "";

    // Сбрасываем значения всех радиокнопок для вопросов 1, 2 и 3
    test.elements.q1[0].checked = false
    test.elements.q1[1].checked = false
    test.elements.q1[2].checked = false
    test.elements.q1[3].checked = false

    test.elements.q2[0].checked = false
    test.elements.q2[1].checked = false
    test.elements.q2[2].checked = false
    test.elements.q2[3].checked = false

    test.elements.q3[0].checked = false
    test.elements.q3[1].checked = false
    test.elements.q3[2].checked = false
    test.elements.q3[3].checked = false

    // Очищаем текстовые поля для вопросов 4, 5 и 6
    test.elements.q4.value = "";
    test.elements.q5.value = "";
    test.elements.q6.value = "";
}

// Добавляем обработчик события 'click' для кнопки сброса
document.getElementById("reset").addEventListener('click', reset);