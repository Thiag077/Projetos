// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu'); // Seleciona o botão do menu mobile.
const navLinks = document.getElementById('nav-links'); // Seleciona a lista de links de navegação.

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna a classe 'active' na lista de links.
});

// Animação ao Rolar a Página
AOS.init({
    duration: 1000, // Define a duração das animações em milissegundos.
    once: true, // As animações ocorrem apenas uma vez.
});

// Lightbox (Galerias de Imagens)
lightbox.option({
    resizeDuration: 200, // Define a duração do redimensionamento das imagens.
    wrapAround: true, // Permite navegar em loop pelas imagens.
});

// Botão "Voltar ao Topo"
const backToTopButton = document.getElementById('back-to-top'); // Seleciona o botão "Voltar ao Topo".

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block'; // Exibe o botão quando a rolagem é maior que 300px.
    } else {
        backToTopButton.style.display = 'none'; // Oculta o botão quando a rolagem é menor que 300px.
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0, // Rola a página até o topo.
        behavior: 'smooth' // Rola suavemente.
    });
});

// Validação de Formulário
const form = document.getElementById('contact-form'); // Seleciona o formulário de contato.

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário.
    alert('Formulário enviado com sucesso!'); // Exibe uma mensagem de sucesso.
});

// Manipulação de Datas
const dataAtual = new Date(); // Cria um objeto de data com a data e hora atuais.
const anoAtual = dataAtual.getFullYear(); // Retorna o ano atual.
console.log(anoAtual); // Exibe o ano atual no console.

// Armazenamento Local
localStorage.setItem('nome', 'João'); // Armazena um valor no localStorage.
const nome = localStorage.getItem('nome'); // Recupera o valor armazenado.
console.log(nome); // Exibe o valor no console.
// 1. Carregar conteúdo dinamicamente
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

// 2. Manipular datas com Moment.js (biblioteca externa)
const dataAtual = moment().format('DD/MM/YYYY'); // Formata a data atual.
console.log(dataAtual);

// 3. Validar formulários com expressões regulares
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valida e-mails.
if (!emailRegex.test(emailInput.value)) {
    alert('Por favor, insira um e-mail válido.');
}

// 4. Criar um contador regressivo
const dataFinal = new Date('2023-12-31').getTime();
const contador = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    console.log(`Faltam ${dias} dias!`);
    if (diferenca < 0) clearInterval(contador);
}, 1000);

// 5. Manipular eventos de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Tecla ESC pressionada!');
    }
});

// 6. Criar um modal personalizado
const abrirModal = document.getElementById('abrir-modal');
const fecharModal = document.getElementById('fechar-modal');
const modal = document.getElementById('modal');

abrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 7. Animações com GSAP (biblioteca externa)
gsap.to('.elemento', { duration: 1, x: 100, opacity: 0.5 });

// 8. Manipular o localStorage
localStorage.setItem('usuario', 'João'); // Armazena um valor.
const usuario = localStorage.getItem('usuario'); // Recupera o valor.
console.log(usuario);

// 9. Criar um slider manual
let slideIndex = 0;
function mostrarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}
mostrarSlide(slideIndex);

// 10. Criar um efeito de parallax
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.parallax').style.transform = `translateY(${scrollY * 0.5}px)`;
});