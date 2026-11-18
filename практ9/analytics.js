document.addEventListener('DOMContentLoaded', () => {
    
    const ctaButton = document.getElementById('cta-btn');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log(`[Аналитика] Событие: Клик по кнопке "Записаться". Время: ${new Date().toLocaleTimeString()}`);
        });
    }

    const startTime = Date.now();

    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        console.log(`[Аналитика] Пользователь провел на странице: ${timeSpent} секунд.`);
    });
});