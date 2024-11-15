document.addEventListener("DOMContentLoaded", function() {
    let slider;

    function initializeSlider() {
        console.log("bxSlider:", $.fn.bxSlider);
        console.log("Элементы с классом 'slider':", $('.slider').length);
    
        if (typeof $.fn.bxSlider === "function") {
            if (!slider) {
                console.log("Создаём новый слайдер.");
                slider = $('.slider').bxSlider({
                    pagerCustom: '.slider-nav',
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                });
            } else {
                console.log("Переинициализация слайдера.");
                if (typeof slider.reloadSlider === "function") {
                    slider.reloadSlider();
                } else {
                    console.error("Метод reloadSlider отсутствует. Создаём слайдер заново.");
                    slider = $('.slider').bxSlider({
                        pagerCustom: '.slider-nav',
                        infiniteLoop: false,
                        hideControlOnEnd: true,
                    });
                }
            }
        } else {
            console.error("bxSlider не подключен.");
        }
    }

    function toggleContent(content, showButton, hideButton) {
        if (content && showButton && hideButton) {
            showButton.addEventListener("click", () => {
                content.classList.add("active");
                initializeSlider();
            });
            hideButton.addEventListener("click", () => {
                content.classList.remove("active");
            });
        } else {
            console.warn("Некоторые элементы не найдены:", { content, showButton, hideButton });
        }
    }


    const sections = [
        { content: document.getElementById("contentSN"), showButton: document.getElementById("showButtonSN"), hideButton: document.getElementById("hideButtonSN") },
        { content: document.getElementById("contentBAI"), showButton: document.getElementById("showButtonBAI"), hideButton: document.getElementById("hideButtonBAI") },
        { content: document.getElementById("contentP"), showButton: document.getElementById("showButtonP"), hideButton: document.getElementById("hideButtonP") },
        { content: document.getElementById("contentN"), showButton: document.getElementById("showButtonN"), hideButton: document.getElementById("hideButtonN") },
        { content: document.getElementById("contentES"), showButton: document.getElementById("showButtonES"), hideButton: document.getElementById("hideButtonES") },
        { content: document.getElementById("contentMC"), showButton: document.getElementById("showButtonMC"), hideButton: document.getElementById("hideButtonMC") },
        { content: document.getElementById("content"), showButton: document.getElementById("showButton"), hideButton: document.getElementById("hideButton") },
        { content: document.getElementById("contentBaE"), showButton: document.getElementById("showButtonBaE"), hideButton: document.getElementById("hideButtonBaE") },
        { content: document.getElementById("contentGD"), showButton: document.getElementById("showButtonGD"), hideButton: document.getElementById("hideButtonGD") },
        { content: document.getElementById("contentEX"), showButton: document.getElementById("showButtonEX"), hideButton: document.getElementById("hideButtonEX") },
        { content: document.getElementById("contentSI"), showButton: document.getElementById("showButtonSI"), hideButton: document.getElementById("hideButtonSI") },
        { content: document.getElementById("contentCM"), showButton: document.getElementById("showButtonCM"), hideButton: document.getElementById("hideButtonCM") },
        { content: document.getElementById("contentKC"), showButton: document.getElementById("showButtonKC"), hideButton: document.getElementById("hideButtonKC") },
        { content: document.getElementById("contentCF"), showButton: document.getElementById("showButtonCF"), hideButton: document.getElementById("hideButtonCF") },
        { content: document.getElementById("contentKA"), showButton: document.getElementById("showButtonKA"), hideButton: document.getElementById("hideButtonKA") }
    ];

    sections.filter(section => section.content && section.showButton && section.hideButton)
    .forEach(section => {
        toggleContent(section.content, section.showButton, section.hideButton);
    });
});
