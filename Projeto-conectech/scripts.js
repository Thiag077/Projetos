// Animação ao rolar a página
AOS.init({
    duration: 1000,
    once: true,
});

// Menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em um link (para dispositivos móveis)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Fechar o menu ao clicar fora (para dispositivos móveis)
document.addEventListener('click', (e) => {
    const isClickInside = navLinks.contains(e.target) || mobileMenu.contains(e.target);
    if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validação do formulário
const form = document.getElementById('contact-form');
const emailInput = form.querySelector('input[type="email"]');
const phoneInput = form.querySelector('input[type="tel"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!emailInput.value.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        emailInput.focus();
        return;
    }

    if (phoneInput.value.length < 10 || !/^\d+$/.test(phoneInput.value)) {
        alert('Por favor, insira um número de telefone válido (apenas números, com DDD).');
        phoneInput.focus();
        return;
    }

    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slider de Projetos
let slideIndex = 0;
const slides = document.querySelectorAll('.projetos-slider .slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

// Botões de navegação
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Iniciar o slider
showSlides();
setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos