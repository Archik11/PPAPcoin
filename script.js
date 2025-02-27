document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.info-box, .roadmap-item, .step');
    hiddenElements.forEach((el) => observer.observe(el));

    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация плавающих объектов
    const floatingObjects = document.querySelectorAll('.float-item');
    floatingObjects.forEach((obj, index) => {
        obj.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
        obj.style.animationDelay = `${index * 0.5}s`;
    });

    // Параллакс эффект для фона
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        document.querySelectorAll('.float-item').forEach(item => {
            const offsetX = (mouseX - 0.5) * 30;
            const offsetY = (mouseY - 0.5) * 30;
            item.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
});