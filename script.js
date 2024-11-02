
// Function that is changing the background
//function changeBackgroundColor() {
//    document.body.style.backgroundColor = "black"; // новый цвет фона #ff69b4 - rose
//}




// Function that is changing the background
function changeBackgroundColor() {
    document.querySelector(".middle-container").style.backgroundColor = "black"; // новый цвет фона DarkSlateGray AliceBlue
}

// Вызов Функции через пять секунд после загрузки страницы
setTimeout(changeBackgroundColor, 5000);





// Function that is changing the background
function changeBackgroundColor2() {
    document.querySelector(".middle-container").style.backgroundColor = "beige"; // новый цвет фона DarkSlateGray AliceBlue
}

// Вызов Функции через десять секунд после загрузки страницы
setTimeout(changeBackgroundColor2, 10000);







//setTimeout(function() {
  // Пустая функция без действий
//}, 5000);


function changeBackgroundColor3() {
    document.querySelector(".bottom-container").style.backgroundColor = "AliceBlue"; // новый цвет фона
}

// Вызов Функции через пятнадцать секунд после загрузки страницы
setTimeout(changeBackgroundColor3, 15000);







function changeBackgroundColor3() {
    document.querySelector(".bottom-container").style.backgroundColor = "DarkGrey"; // новый цвет фона
}

// Вызов Функции через пять секунд после загрузки страницы
setTimeout(changeBackgroundColor3, 20000);









let colors = ["Green", "LightGrey", "White", "Red", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    setTimeout(function() {
        document.querySelector(".bottom-container").style.backgroundColor = colors[i]; // новый цвет фона
    }, 5000 * (i+5)); // вызвать функцию через 5 секунд
}