let slider; // Переменная для хранения ссылки на слайдер

// Функция для инициализации bxSlider
function initializeSlider() {
    if (!slider) { // Инициализируем только один раз
        slider = $('.slider').bxSlider({
            pagerCustom: '.slider-nav',
            infiniteLoop: false,
            hideControlOnEnd: true,
        });
    } else {
        slider.reloadSlider(); // Перезагружаем слайдер
    }
}

//City Runner
const content = document.getElementById("content");
const showButton = document.getElementById("showButton"); // Кнопка для показа
const hideButton = document.getElementById("hideButton"); // Кнопка для скрытия

//Build and Explore
const contentBaE = document.getElementById("contentBaE");
const showButtonBaE = document.getElementById("showButtonBaE"); // Кнопка для показа
const hideButtonBaE = document.getElementById("hideButtonBaE"); // Кнопка для скрытия

//Gear Dash
const contentGD = document.getElementById("contentGD");
const showButtonGD = document.getElementById("showButtonGD"); // Кнопка для показа
const hideButtonGD = document.getElementById("hideButtonGD"); // Кнопка для скрытия

//Gear Dash
const contentEX = document.getElementById("contentEX");
const showButtonEX = document.getElementById("showButtonEX"); // Кнопка для показа
const hideButtonEX = document.getElementById("hideButtonEX"); // Кнопка для скрытия

//Skipit
const contentSI = document.getElementById("contentSI");
const showButtonSI = document.getElementById("showButtonSI"); // Кнопка для показа
const hideButtonSI = document.getElementById("hideButtonSI"); // Кнопка для скрытия

//Crystal Magic
const contentCM = document.getElementById("contentCM");
const showButtonCM = document.getElementById("showButtonCM"); // Кнопка для показа
const hideButtonCM = document.getElementById("hideButtonCM"); // Кнопка для скрытия

//Knife Challenge
const contentKC = document.getElementById("contentKC");
const showButtonKC = document.getElementById("showButtonKC"); // Кнопка для показа
const hideButtonKC = document.getElementById("hideButtonKC"); // Кнопка для скрытия

//Cut Fruit
const contentCF = document.getElementById("contentCF");
const showButtonCF = document.getElementById("showButtonCF"); // Кнопка для показа
const hideButtonCF = document.getElementById("hideButtonCF"); // Кнопка для скрытия

//KolobokAR
const contentKA = document.getElementById("contentKA");
const showButtonKA = document.getElementById("showButtonKA"); // Кнопка для показа
const hideButtonKA = document.getElementById("hideButtonKA"); // Кнопка для скрытия

//Skyline News
const contentSN = document.getElementById("contentSN");
const showButtonSN = document.getElementById("showButtonSN"); // Кнопка для показа
const hideButtonSN = document.getElementById("hideButtonSN"); // Кнопка для скрытия

//Portfiolio
const contentP = document.getElementById("contentP");
const showButtonP = document.getElementById("showButtonP"); // Кнопка для показа
const hideButtonP = document.getElementById("hideButtonP"); // Кнопка для скрытия

//Skyline News
showButtonSN.addEventListener("click", () => {
    contentSN.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonSN.addEventListener("click", () => {
    contentSN.classList.remove("active");
});

//Portfolio
showButtonP.addEventListener("click", () => {
    contentP.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonP.addEventListener("click", () => {
    contentP.classList.remove("active");
});

//City Runner
showButton.addEventListener("click", () => {
    content.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButton.addEventListener("click", () => {
    content.classList.remove("active");
});

//Build and Explore
showButtonBaE.addEventListener("click", () => {
    contentBaE.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonBaE.addEventListener("click", () => {
    contentBaE.classList.remove("active");
});

//GearDash
showButtonGD.addEventListener("click", () => {
    contentGD.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonGD.addEventListener("click", () => {
    contentGD.classList.remove("active");
});

//Exsider
showButtonEX.addEventListener("click", () => {
    contentEX.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonEX.addEventListener("click", () => {
    contentEX.classList.remove("active");
});

//Skipit
showButtonSI.addEventListener("click", () => {
    contentSI.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonSI.addEventListener("click", () => {
    contentSI.classList.remove("active");
});

//Crystal Magic
showButtonCM.addEventListener("click", () => {
    contentCM.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonCM.addEventListener("click", () => {
    contentCM.classList.remove("active");
});

//Knife Challenge
showButtonKC.addEventListener("click", () => {
    contentKC.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonKC.addEventListener("click", () => {
    contentKC.classList.remove("active");
});

//Cut Fruit
showButtonCF.addEventListener("click", () => {
    contentCF.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonCF.addEventListener("click", () => {
    contentCF.classList.remove("active");
});

//KolobokAR
showButtonKA.addEventListener("click", () => {
    contentKA.classList.add("active");
    initializeSlider(); // Повторная инициализация или перезагрузка
});
hideButtonKA.addEventListener("click", () => {
    contentKA.classList.remove("active");
});
