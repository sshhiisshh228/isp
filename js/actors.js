let y = 1;
const array1 = document.getElementsByClassName('def-actor');

function showActor(index) {
    for (let i = 0; i < array1.length; i++) {
        array1[i].style.display = (i === index) ? 'block' : 'none';
    }
    document.getElementById("actor-num").innerText = (index + 1) + "/" + array1.length;
}

showActor(y - 1); // Показать первого актера

document.getElementById('btn_forward_actor').addEventListener('click', () => {
    y = (y % array1.length) + 1; // Циклический переход вперед
    showActor(y - 1);
});

document.getElementById('btn_backward_actor').addEventListener('click', () => {
    y = (y - 2 + array1.length) % array1.length + 1; // Циклический переход назад
    showActor(y - 1);
});