// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// CARROSSEL HERO
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[n].classList.add('active');
    indicators[n].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

// Auto-avança o carrossel a cada 5 segundos
setInterval(nextSlide, 5000);

// Filtro de serviços removido - todos os serviços agora são mostrados

// EXPANDIR/RECOLHER DETALHES DO SERVIÇO
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const card = button.closest('.service-card');
        const procedureName = card.querySelector('h3').textContent;

        // Redirecionar para página de procedimento
        window.location.href = `procedure.html?procedure=${encodeURIComponent(procedureName)}`;
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Verificar se há foto quando a página carrega
window.addEventListener('load', () => {
    // Aqui você pode adicionar lógica para verificar imagens
    console.log('Página carregada - Essenza Prime');
});

// BASE DE DADOS DE PROCEDIMENTOS COM SCORES
const procedimentos = {
    injetaveis: [
        { nome: 'Toxina Botulínica', score: 85 },
        { nome: 'Bioestimuladores de Colágeno', score: 80 },
        { nome: 'Preenchedores Faciais', score: 75 },
        { nome: 'Rinomodelação', score: 90 }
    ],
    corporal: [
        { nome: 'Harmonização Corporal', score: 70 },
        { nome: 'Protocolo de Verão', score: 75 }
    ],
    aparelhos: [
        { nome: 'ULTRAFORMER', score: 95 },
        { nome: 'FOTONA', score: 88 }
    ]
};

// FORMULÁRIO E MANIPULAÇÃO
const form = document.getElementById('agendamentoForm');
const procedimentoSelect = document.getElementById('procedimento');
const telefoneInput = document.getElementById('telefone');

// Formatar telefone com DDD automático
telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length >= 2) {
        value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
    }

    e.target.value = value;
});

// Função para obter o score do procedimento selecionado
function obterScore(procedimento) {
    const allProcs = Object.values(procedimentos).flat();
    const proc = allProcs.find(p => p.nome === procedimento);
    return proc ? proc.score : 0;
}

// GERENCIAR MODAIS
const confirmacaoModal = document.getElementById('confirmacaoModal');
const erroModal = document.getElementById('erroModal');
const fecharModal = document.getElementById('fecharModal');
const fecharErroModal = document.getElementById('fecharErroModal');

function mostrarModalSucesso() {
    confirmacaoModal.classList.add('active');
}

function fecharModalSucesso() {
    confirmacaoModal.classList.remove('active');
}

function mostrarModalErro() {
    erroModal.classList.add('active');
}

function fecharModalErro() {
    erroModal.classList.remove('active');
}

fecharModal.addEventListener('click', fecharModalSucesso);
fecharErroModal.addEventListener('click', fecharModalErro);

// Fechar modal ao clicar fora dele
confirmacaoModal.addEventListener('click', (e) => {
    if (e.target === confirmacaoModal) {
        fecharModalSucesso();
    }
});

erroModal.addEventListener('click', (e) => {
    if (e.target === erroModal) {
        fecharModalErro();
    }
});

// Enviar formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const procedimento = procedimentoSelect.value;
    const score = obterScore(procedimento);

    // Preparar dados para enviar
    const dados = {
        nome: nome,
        telefone: telefone,
        email: email,
        procedimento: procedimento,
        score: score,
        data: new Date().toISOString()
    };

    try {
        const response = await fetch('https://n8n.srv997821.hstgr.cloud/webhook-test/form-essenza', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            mostrarModalSucesso();
            form.reset();
        } else {
            mostrarModalErro();
        }
    } catch (error) {
        console.error('Erro:', error);
        mostrarModalErro();
    }
}); 