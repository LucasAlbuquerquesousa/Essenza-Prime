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

// FILTRO DE SERVIÇOS
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona active ao botão clicado
        button.classList.add('active');

        // Pega a categoria
        const category = button.getAttribute('data-filter');

        // Mostra/oculta cards
        serviceCards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

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
    corporal: [
        { nome: 'Massagem Relaxante', score: 20 },
        { nome: 'Drenagem Modeladora', score: 35 },
        { nome: 'Drenagem Linfática', score: 30 },
        { nome: 'Drenagem Pós-operatória', score: 45 },
        { nome: 'Intradermoterapia', score: 50 },
        { nome: 'Hidrolipoclasia', score: 60 },
        { nome: 'Harmonização Glútea', score: 75 }
    ],
    facial: [
        { nome: 'Limpeza de Pele', score: 25 },
        { nome: 'Drenagem Linfática Facial', score: 28 },
        { nome: 'Drenagem Pós-operatória Facial', score: 48 },
        { nome: 'Peeling Ultrassônico', score: 65 },
        { nome: 'Intradermoterapia Facial', score: 55 },
        { nome: 'Lipo de Papada', score: 70 },
        { nome: 'Ultrassom Microfocado', score: 85 }
    ],
    equipamentos: [
        { nome: 'Criolipólise de Placas', score: 80 },
        { nome: 'Lipocavitação', score: 65 },
        { nome: 'Criofrequência', score: 75 },
        { nome: 'Depilação a Laser', score: 55 },
        { nome: 'Inkie', score: 72 }
    ]
};

// FORMULÁRIO E MANIPULAÇÃO
const form = document.getElementById('agendamentoForm');
const tipoProcedimentoSelect = document.getElementById('tipoProcedimento');
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

// Preencher procedimentos ao selecionar tipo
tipoProcedimentoSelect.addEventListener('change', (e) => {
    const tipo = e.target.value;

    // Limpar opções anteriores
    procedimentoSelect.innerHTML = '';

    if (tipo) {
        const opcoes = procedimentos[tipo];

        // Adicionar opção padrão
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = 'Selecione um procedimento';
        procedimentoSelect.appendChild(optionDefault);

        // Adicionar procedimentos específicos do tipo
        opcoes.forEach(proc => {
            const option = document.createElement('option');
            option.value = proc.nome;
            option.textContent = proc.nome;
            option.setAttribute('data-score', proc.score);
            procedimentoSelect.appendChild(option);
        });
    } else {
        const optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.textContent = 'Selecione um tipo de procedimento primeiro';
        procedimentoSelect.appendChild(optionDefault);
    }
});

// Função para obter o score do procedimento selecionado
function obterScore(tipo, procedimento) {
    const procs = procedimentos[tipo];
    const proc = procs.find(p => p.nome === procedimento);
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
    const tipo = tipoProcedimentoSelect.value;
    const procedimento = procedimentoSelect.value;
    const score = obterScore(tipo, procedimento);

    // Preparar dados para enviar
    const dados = {
        nome: nome,
        telefone: telefone,
        email: email,
        tipoProcedimento: tipo,
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
            procedimentoSelect.innerHTML = '<option value="">Selecione um tipo de procedimento primeiro</option>';
        } else {
            mostrarModalErro();
        }
    } catch (error) {
        console.error('Erro:', error);
        mostrarModalErro();
    }
}); 