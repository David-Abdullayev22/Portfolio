document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы фильтров, элементов для отображения и сообщение для показа, если ничего не найдено
    const filters = document.querySelectorAll('.filter');
    const items = document.querySelectorAll('.item-content');
    const noResults = document.querySelector('.no-results');

    // Для каждого фильтра добавляем обработчик, который будет вызывать функцию фильтрации при изменении фильтра
    filters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // Функция применяет активные фильтры к элементам
    function applyFilters() {
        // Создаем объект для хранения выбранных фильтров
        let activeFilters = {
            game: [],
            websites: [],
            ai: [],
            chatbots: []
        };

        // Заполняем объект активных фильтров на основе выбранных фильтров (чекбоксов)
        filters.forEach(filter => {
            if (filter.checked) {
                activeFilters[filter.dataset.filter].push(filter.value);
            }
        });

        let visibleItems = 0; // Считаем количество видимых элементов

        // Проходим по каждому элементу и проверяем, соответствует ли он активным фильтрам
        items.forEach(item => {
            const itemGame = item.dataset.game ? item.dataset.game.split(' ') : [];
            const itemWebsites = item.dataset.websites ? item.dataset.websites.split(' ') : [];
            const itemAi = item.dataset.ai ? item.dataset.ai.split(' ') : [];
            const itemChatbots = item.dataset.chatbots ? item.dataset.chatbots.split(' ') : [];

            // Проверяем, соответствует ли элемент хотя бы одному выбранному фильтру
            const gameMatch = activeFilters.game.length === 0 || activeFilters.game.some(filter => itemGame.includes(filter));
            const websitesMatch = activeFilters.websites.length === 0 || activeFilters.websites.some(filter => itemWebsites.includes(filter));
            const aiMatch = activeFilters.ai.length === 0 || activeFilters.ai.some(filter => itemAi.includes(filter));
            const chatbotsMatch = activeFilters.chatbots.length === 0 || activeFilters.chatbots.some(filter => itemChatbots.includes(filter));

            // Если элемент соответствует фильтрам, отображаем его, иначе скрываем
            if (gameMatch && websitesMatch && aiMatch && chatbotsMatch) {
                item.style.display = 'block';
                visibleItems++;
            } else {
                item.style.display = 'none';
            }
        });

        // Если ни один элемент не соответствует фильтрам, показываем сообщение "Ничего не найдено"
        if (visibleItems === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
});

