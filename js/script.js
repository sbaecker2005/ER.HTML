console.log("script.js carregado com sucesso!");

function adicionarAlertaBotao(selector, mensagem) {
    const botao = document.querySelector(selector);
    if (botao) {
        botao.addEventListener('click', function () {
            alert(mensagem);
        });
    } else {
        console.warn(`Botão com seletor '${selector}' não encontrado.`);
    }
}

adicionarAlertaBotao('.cta-button', 'Obrigado por explorar nossa solução! Confira mais detalhes nas seções abaixo.');

function destacarPaginaAtual() {
    const navLinks = document.querySelectorAll('.navigation ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = '#C2F9BB';
            link.style.fontWeight = 'bold';
        }
    });
}
destacarPaginaAtual();

function configurarFormulario() {
    const form = document.querySelector('#subscription-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();

            if (name === '' || email === '') {
                alert('Por favor, preencha todos os campos!');
            } else {
                alert(`Obrigado, ${name}! Sua inscrição foi realizada com sucesso.`);
            }
        });
    } else {
        console.warn("Formulário '#subscription-form' não encontrado.");
    }
}
configurarFormulario();

function configurarCarrossel() {
    const images = document.querySelectorAll('.carousel img');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    if (images.length > 0 && nextButton && prevButton) {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });

        nextButton.addEventListener('click', () => {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = 'block';
        });

        prevButton.addEventListener('click', () => {
            images[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].style.display = 'block';
        });
    } else {
        console.warn("Carrossel não configurado corretamente ou não presente na página.");
    }
}
configurarCarrossel();
