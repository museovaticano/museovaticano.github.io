document.addEventListener('DOMContentLoaded', function () {
    // --- Menú desplegable ---
    const exploreBtn = document.getElementById('explore-btn');
    const exploreMenu = document.getElementById('explore-menu');

    // Alternar la visibilidad del menú
    exploreBtn.addEventListener('click', function () {
        exploreMenu.classList.toggle('show'); // Mostrar u ocultar el menú
    });

    // Cerrar el menú si el usuario hace clic fuera del mismo
    document.addEventListener('click', function (event) {
        if (!exploreBtn.contains(event.target) && !exploreMenu.contains(event.target)) {
            exploreMenu.classList.remove('show'); // Asegurarse de cerrarlo
        }
    });

    // --- Carrusel ---
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0; // Diapositiva actual
    const totalSlides = slides.length; // Total de diapositivas

    // Actualizar posición del carrusel
    function updateCarousel() {
        const offset = -currentSlide * 100; // Mover el carrusel por porcentajes
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Navegación siguiente
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    // Navegación anterior
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // --- Botón copiar enlace ---
    const copyBtn = document.getElementById('copy-btn');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const currentUrl = window.location.href;
            navigator.clipboard.writeText(currentUrl)
                .then(() => alert('Enlace copiado: ' + currentUrl))
        });
    }

    // --- Animación de botones ---
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('animated-button');
        }, index * 200); // Retraso escalonado
    });
});
