// assets/js/webemconta.js PARA TER UM FAQS QUE ABRE UMA ABINHA ABAIXO
function toggleFaq(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Alterna a exibição do conteúdo
    content.style.display = content.style.display === "block" ? "none" : "block";

    // Altera a rotação da seta
    arrow.style.transform = content.style.display === "block" ? "rotate(90deg)" : "rotate(0deg)";
}




/*AQUI É PRO FALE CONOSCO */

function openWhatsApp() {
    const phoneNumber = '5562998500559'; // Coloque o número de telefone com código de país
    const message = encodeURIComponent('Olá, gostaria de mais informações.');
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
}




/* O EMAIL DO FALE CONOSCO*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    console.log("Formulário submetido."); // Verifica se o evento está disparando

    // Pegue os dados do formulário
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    const userMessage = document.getElementById('user-message').value;

    console.log("Dados capturados: ", userName, userEmail, userMessage); // Verifica se os dados estão sendo capturados corretamente

    // Configuração dos parâmetros do email
    const templateParams = {
        from_name: userName,
        reply_to: userEmail,
        message: userMessage
    };

    // Enviar email usando o EmailJS
    emailjs.send("service_pdokt44", "template_p7owvrf", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);  // Verifica se o email foi enviado
            document.getElementById('response-message').textContent = "Obrigado pela mensagem! Entraremos em contato em breve.";
            document.getElementById('contact-form').reset(); // Limpar o formulário após envio
        }, function(error) {
            console.error('FAILED...', error);  // Exibe erro no console se houver falha
            document.getElementById('response-message').textContent = "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.";
        });
});







/*CARROSEL DE IMAGENS*/



const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const carouselButtons = document.querySelectorAll('.carousel-button');
let currentImageIndex = 0;

// Exibir a primeira imagem
images[currentImageIndex].classList.add('active');

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ocultar a imagem atual
        images[currentImageIndex].classList.remove('active');

        // Atualizar o índice da imagem atual
        if (button.classList.contains('next')) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }

        // Exibir a nova imagem
        images[currentImageIndex].classList.add('active');
    });
});










/* DO NOSSO TRABALHO */



document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('.close');
    const galeriaItems = document.querySelectorAll('.galeria-item');

    galeriaItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const src = this.getAttribute('data-src');

            if (type === 'image') {
                modalImage.src = src;
                modalImage.style.display = 'block';
                modalVideo.style.display = 'none';
            } else if (type === 'video') {
                modalVideo.src = src;
                modalVideo.style.display = 'block';
                modalImage.style.display = 'none';
            }

            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImage.src = '';
        modalVideo.src = '';
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImage.src = '';
            modalVideo.src = '';
        }
    });
});








