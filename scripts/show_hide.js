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

    //City Runner
    const content = document.getElementById("content");
    const showButton = document.getElementById("showButton"); 
    const hideButton = document.getElementById("hideButton"); 

    //Build and Explore
    const contentBaE = document.getElementById("contentBaE");
    const showButtonBaE = document.getElementById("showButtonBaE"); 
    const hideButtonBaE = document.getElementById("hideButtonBaE"); 

    //Gear Dash
    const contentGD = document.getElementById("contentGD");
    const showButtonGD = document.getElementById("showButtonGD"); 
    const hideButtonGD = document.getElementById("hideButtonGD"); 

    //Gear Dash
    const contentEX = document.getElementById("contentEX");
    const showButtonEX = document.getElementById("showButtonEX"); 
    const hideButtonEX = document.getElementById("hideButtonEX"); 

    //Skipit
    const contentSI = document.getElementById("contentSI");
    const showButtonSI = document.getElementById("showButtonSI"); 
    const hideButtonSI = document.getElementById("hideButtonSI"); 

    //Crystal Magic
    const contentCM = document.getElementById("contentCM");
    const showButtonCM = document.getElementById("showButtonCM"); 
    const hideButtonCM = document.getElementById("hideButtonCM"); 

    //Knife Challenge
    const contentKC = document.getElementById("contentKC");
    const showButtonKC = document.getElementById("showButtonKC"); 
    const hideButtonKC = document.getElementById("hideButtonKC"); 

    //Cut Fruit
    const contentCF = document.getElementById("contentCF");
    const showButtonCF = document.getElementById("showButtonCF");
    const hideButtonCF = document.getElementById("hideButtonCF"); 

    //KolobokAR
    const contentKA = document.getElementById("contentKA");
    const showButtonKA = document.getElementById("showButtonKA"); 
    const hideButtonKA = document.getElementById("hideButtonKA"); 

    //Skyline News
    const contentSN = document.getElementById("contentSN");
    const showButtonSN = document.getElementById("showButtonSN"); 
    const hideButtonSN = document.getElementById("hideButtonSN"); 

    //Portfolio
    const contentP = document.getElementById("contentP");
    const showButtonP = document.getElementById("showButtonP"); 
    const hideButtonP = document.getElementById("hideButtonP");

    //BrevigoAI
    const contentBAI = document.getElementById("contentBAI");
    const showButtonBAI = document.getElementById("showButtonBAI"); 
    const hideButtonBAI = document.getElementById("hideButtonBAI"); 


    //Skyline News
    showButtonSN.addEventListener("click", () => {
        contentSN.classList.add("active");
        initializeSlider(); 
    });
    hideButtonSN.addEventListener("click", () => {
        contentSN.classList.remove("active");
    });

    //Brevigo AI
    showButtonBAI.addEventListener("click", () => {
        contentBAI.classList.add("active");
        initializeSlider(); 
    });
    hideButtonBAI.addEventListener("click", () => {
        contentBAI.classList.remove("active");
    });

    //Portfolio
    showButtonP.addEventListener("click", () => {
        contentP.classList.add("active");
        initializeSlider();
    });
    hideButtonP.addEventListener("click", () => {
        contentP.classList.remove("active");
    });

    //City Runner
    showButton.addEventListener("click", () => {
        content.classList.add("active");
        initializeSlider(); 
    });
    hideButton.addEventListener("click", () => {
        content.classList.remove("active");
    });

    //Build and Explore
    showButtonBaE.addEventListener("click", () => {
        contentBaE.classList.add("active");
        initializeSlider(); 
    });
    hideButtonBaE.addEventListener("click", () => {
        contentBaE.classList.remove("active");
    });

    //GearDash
    showButtonGD.addEventListener("click", () => {
        contentGD.classList.add("active");
        initializeSlider();
    });
    hideButtonGD.addEventListener("click", () => {
        contentGD.classList.remove("active");
    });

    //Exsider
    showButtonEX.addEventListener("click", () => {
        contentEX.classList.add("active");
        initializeSlider(); 
    });
    hideButtonEX.addEventListener("click", () => {
        contentEX.classList.remove("active");
    });

    //Skipit
    showButtonSI.addEventListener("click", () => {
        contentSI.classList.add("active");
        initializeSlider(); 
    });
    hideButtonSI.addEventListener("click", () => {
        contentSI.classList.remove("active");
    });

    //Crystal Magic
    showButtonCM.addEventListener("click", () => {
        contentCM.classList.add("active");
        initializeSlider(); 
    });
    hideButtonCM.addEventListener("click", () => {
        contentCM.classList.remove("active");
    });

    //Knife Challenge
    showButtonKC.addEventListener("click", () => {
        contentKC.classList.add("active");
        initializeSlider();
    });
    hideButtonKC.addEventListener("click", () => {
        contentKC.classList.remove("active");
    });

    //Cut Fruit
    showButtonCF.addEventListener("click", () => {
        contentCF.classList.add("active");
        initializeSlider(); 
    });
    hideButtonCF.addEventListener("click", () => {
        contentCF.classList.remove("active");
    });

    //KolobokAR
    showButtonKA.addEventListener("click", () => {
        contentKA.classList.add("active");
        initializeSlider(); 
    });
    hideButtonKA.addEventListener("click", () => {
        contentKA.classList.remove("active");
    });
});
