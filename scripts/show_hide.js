document.addEventListener("DOMContentLoaded", function() {
    let slider;

    function initializeSlider() {
        if (!slider) {
            slider = $('.slider').bxSlider({
                pagerCustom: '.slider-nav',
                infiniteLoop: false,
                hideControlOnEnd: true,
            });
        } else {
            slider.reloadSlider();
        }
    }

    function toggleContent(content, showButton, hideButton) {
        showButton.addEventListener("click", () => {
            content.classList.add("active");
            initializeSlider();
        });
        hideButton.addEventListener("click", () => {
            content.classList.remove("active");
        });
    }

    const sections = [
        { content: document.getElementById("contentSN"), showButton: document.getElementById("showButtonSN"), hideButton: document.getElementById("hideButtonSN") },
        { content: document.getElementById("contentBAI"), showButton: document.getElementById("showButtonBAI"), hideButton: document.getElementById("hideButtonBAI") },
        { content: document.getElementById("contentP"), showButton: document.getElementById("showButtonP"), hideButton: document.getElementById("hideButtonP") },
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

    sections.forEach(section => {
        toggleContent(section.content, section.showButton, section.hideButton);
    });
});
