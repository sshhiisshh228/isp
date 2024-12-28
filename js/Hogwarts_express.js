// Получаем форму с именем "form_one"
let Hogwarts_express  = document.forms.form_one;

// Добавляем обработчик события 'submit' к форме
Hogwarts_express.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения введенных данных
    let login = document.getElementById("login_input").value; // Логин
    let date = document.getElementById("date_input").value; // Дата
    let sex = document.getElementById("sex").value; // Пол

    // Получаем массив элементов для вывода ошибок
    let erorr = document.getElementsByClassName('erorr_output');
    
    // Скрываем все элементы с классом 'erorr_output'
    for (i = 0; i < erorr.length; i++) {
        erorr[i].style.opacity = 0; // Устанавливаем непрозрачность на 0
    }

    // Проверяем валидность введенных данных
    if ((Hogwarts_express.elements.login_input.validity.valid && Hogwarts_express.elements.date_input.validity.valid) && 
        (Hogwarts_express.elements.login_input.value.length >= 4 && Hogwarts_express.elements.login_input.value.length <= 10)) {
        
        // Если данные валидны, сохраняем их в sessionStorage
        sessionStorage.setItem("login", login);
        sessionStorage.setItem("date", date);
        sessionStorage.setItem("sex", sex);
        sessionStorage.setItem("result", 0);
        
        // Перенаправляем пользователя на главную страницу Гарри Поттера
        window.location.href = "../HarryPotter.html";
    }

    // Проверка условий валидности логина
    if (!Hogwarts_express.elements.login_input.validity.valid || 
        !(Hogwarts_express.elements.login_input.value.length >= 4 && Hogwarts_express.elements.login_input.value.length <= 10)) {
        
        // Если данные не валидны, отображаем соответствующую ошибку
        erorr[0].style.opacity = 1; // Устанавливаем непрозрачность первого элемента ошибок на 1
    }

    // Проверка условий валидности даты
    if (!Hogwarts_express.elements.date_input.validity.valid) {
        // Если дата не валидна, отображаем соответствующую ошибку
        erorr[1].style.opacity = 1; // Устанавливаем непрозрачность второго элемента ошибок на 1
    }
});