const textElement = document.querySelector('.animated-text');
let index = 0;
const texts = ['.py', '.js', '.html', '.css'];
const colors = ['#3D7CD9', '#E5FC87', '#FFB258', '#1A75FF'];

setInterval(() => {
    textElement.classList.remove('fade-in');
    textElement.classList.add('fade-out');

    setTimeout(() => {
        textElement.textContent = texts[index];
        textElement.style.color = colors[index];

        index = (index + 1) % texts.length;

        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
    }, 1000);
}, 3000);



document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});