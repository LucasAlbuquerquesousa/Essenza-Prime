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

// BASE DE DADOS DE PROCEDIMENTOS COMPLETOS
const procedimentosCompleto = {
    'Toxina Botulínica': {
         categoria: 'injetaveis',
         descricao: 'A toxina botulínica é um neuromodulador que age bloqueando a contração muscular, suavizando rugas e linhas de expressão. Ela promove um aspecto mais descansado e rejuvenescido, sem alterar as expressões naturais do rosto.',
         imagem: 'Toxina-botulinica',
        beneficios: [
            'Suavização de rugas e linhas de expressão',
            'Aspecto mais descansado',
            'Rejuvenescimento facial',
            'Preservação das expressões naturais',
            'Resultados progressivos',
            'Efeito não invasivo',
            'Combinável com outros procedimentos'
        ],
        duracao: 'Aplicação rápida de 15 a 30 minutos. Resultados iniciais em 3-7 dias, com efeito completo em 2 semanas. Duração: 3 a 4 meses.',
        indicacoes: 'Indicado para rugas dinâmicas da testa, glabela e região periocular (pés de galinha). Adequado para pessoas que buscam prevenção ou tratamento de envelhecimento.',
        notas: 'Procedimento realizado apenas por profissional qualificado. Avaliação facial prévia essencial. Resultados variam conforme características individuais.',
        tipos: [
            {
                nome: 'Toxina 3 Regiões',
                preco: 'R$ 950,00',
                descricao: 'Aplicada na testa, glabela e ao redor dos olhos (pés de galinha).'
            },
            {
                nome: 'Toxina Full Face',
                preco: 'R$ 1.500,00',
                descricao: 'Tratamento global para equilíbrio e lifting facial completo.'
            },
            {
                nome: 'Toxina para Sudorese',
                preco: 'R$ 2.800,00',
                descricao: 'Indicada para quem sofre com suor excessivo em axilas, mãos ou pés.'
            },
            {
                nome: 'Toxina para Atletas',
                preco: 'R$ 2.500,00 (3 aplicações/ano)',
                descricao: 'Previne rugas e linhas causadas por contrações e exposição solar.'
            }
        ]
    },
    'Bioestimuladores de Colágeno': {
         categoria: 'injetaveis',
         descricao: 'Substâncias injetáveis que estimulam a produção natural de colágeno, promovendo firmeza e melhora do contorno facial e corporal. Utilizamos os mais avançados bioestimuladores do mercado, escolhidos conforme necessidade individual.',
         imagem: 'Bioestimuladores-colageno',
        beneficios: [
            'Estímulo natural de colágeno',
            'Melhora de firmeza facial',
            'Contorno facial aprimorado',
            'Resultados progressivos e duradouros',
            'Efeito natural',
            'Aplicável em corpo e face',
            'Resultados melhoram com o tempo'
        ],
        duracao: 'Sessão de 30 a 45 minutos. Protocolo: geralmente 2 a 3 sessões com intervalo de 4-6 semanas. Resultados progressivos por até 2 anos.',
        indicacoes: 'Indicado para perda de volume, flacidez leve a moderada, rugas profundas, e busca por rejuvenescimento progressivo.',
        notas: 'Procedimento realizado apenas por profissional qualificado. Resultados progridem ao longo de semanas. Evitar exercício intenso por 48 horas.',
        tipos: [
            {
                nome: 'Sculptra',
                composicao: 'Ácido poli-L-lático',
                descricao: 'Bioestimulador de primeira geração que estimula colágeno por até 2 anos.'
            },
            {
                nome: 'Radiesse',
                composicao: 'Hidroxiapatita de cálcio',
                descricao: 'Oferece suporte estrutural imediato enquanto estimula colágeno natural.'
            },
            {
                nome: 'Harmonize Gold',
                composicao: 'Tecnologia híbrida avançada',
                descricao: 'Combina efeito imediato com estímulo progressivo de colágeno.'
            },
            {
                nome: 'Rennova Diamond',
                composicao: 'Tecnologia premium de última geração',
                descricao: 'Resultado mais duradouro e natural com maior longevidade dos efeitos.'
            }
        ]
    },
    'Preenchedores Faciais': {
         categoria: 'injetaveis',
         descricao: 'O ácido hialurônico é usado para preencher rugas, sulcos e restaurar volumes perdidos, trazendo hidratação e contorno facial. Aplicado em lábios, olheiras, mandíbula, queixo, malar e bigode chinês.',
         imagem: 'Preenchimento-facial',
        beneficios: [
            'Preenchimento de rugas e sulcos',
            'Restauração de volumes',
            'Hidratação profunda',
            'Contorno facial aprimorado',
            'Aumento de projeção de lábios',
            'Resultados imediatos',
            'Completamente reversível'
        ],
        duracao: 'Aplicação de 30 a 45 minutos. Resultados imediatos. Duração: 8 a 12 meses conforme material e local.',
        indicacoes: 'Indicado para rugas, perda de volume, olheiras, falta de projeção de lábios, e harmonia facial. Adequado para qualquer idade.',
        notas: 'Procedimento realizado apenas por profissional qualificado. Escolha do material essencial. Evitar sol e atividades intensas por 48 horas.'
    },
    'Rinomodelação': {
         categoria: 'injetaveis',
         descricao: 'Procedimento não cirúrgico que corrige imperfeições do nariz, como ponta caída ou dorso baixo, com resultados imediatos e duradouros (12 a 18 meses).',
         imagem: 'Preenchimento-facial',
        beneficios: [
            'Correção de ponta caída',
            'Elevação de dorso baixo',
            'Harmonia facial',
            'Resultados imediatos',
            'Não cirúrgico',
            'Reversível',
            'Sem tempo de recuperação'
        ],
        duracao: 'Aplicação de 30 a 45 minutos. Resultados imediatos, completamente visíveis após o desinchaço (2-3 dias).',
        indicacoes: 'Indicado para imperfeições nasais leves a moderadas, busca por harmonia facial sem cirurgia. Pode complementar ou substituir cirurgia.',
        notas: 'Procedimento realizado apenas por profissional experiente. Exame facial detalhado antes. Pode haver pequenos edemas por 2-3 dias.'
    },
    'Harmonização Corporal': {
         categoria: 'corporal',
         descricao: 'Tratamento que combina técnicas e ativos para definir o contorno corporal, reduzir medidas e tratar flacidez localizada.',
         imagem: 'Harmonização-corporal',
        beneficios: [
            'Definição de contorno corporal',
            'Redução de medidas',
            'Tratamento de flacidez',
            'Melhora de textura da pele',
            'Potencialização de resultados',
            'Protocolo personalizado',
            'Resultados progressivos'
        ],
        duracao: 'Sessões de 60 a 90 minutos. Protocolo: 1 a 2 vezes por semana durante 8-12 semanas para melhores resultados.',
        indicacoes: 'Indicado para pessoas que buscam definição corporal, redução de medidas e melhora de flacidez localizada.',
        notas: 'Protocolo customizado conforme avaliação individual. Associação com exercício físico potencializa resultados. Avaliação prévia necessária.'
    },
    'Protocolo de Verão': {
         categoria: 'corporal',
         descricao: 'Pacote para tratar e modelar áreas específicas antes do verão. Inclui: 6 sessões de Heccus (ultrassom que quebra gordura), 6 sessões de moderadoras locais (enzimas redutoras), 3 sessões de esvaziadores (drenagem e eliminação de toxinas).',
         imagem: 'Protocolo-verao',
        beneficios: [
            'Redução de gordura localizada',
            'Ativação de metabolismo local',
            'Drenagem eficaz',
            'Eliminação de toxinas',
            'Melhora de celulite',
            'Definição rápida',
            'Preparo para verão'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo completo: 15 sessões em aproximadamente 6-8 semanas.',
        indicacoes: 'Indicado para preparação corporal para verão, redução de medidas, tratamento de celulite e flacidez localizada.',
        notas: 'Protocolo intensivo com resultados visíveis. Hidratação e alimentação saudável essenciais. Acompanhamento profissional importante.'
    },
    'ULTRAFORMER': {
         categoria: 'aparelhos',
         descricao: 'Equipamento de ultrassom micro e macrofocado que atua nas camadas profundas da pele, promovendo lifting facial e estímulo intenso de colágeno. Resultados visíveis a partir da 3ª semana.',
         imagem: 'Bioestimuladores-colageno',
        beneficios: [
            'Lifting facial sem cirurgia',
            'Estímulo intenso de colágeno',
            'Enrijecimento de pele',
            'Redução de rugas',
            'Melhora de flacidez',
            'Resultados progressivos',
            'Longa duração dos resultados'
        ],
        duracao: 'Sessão de 60 a 90 minutos. Protocolo: geralmente 1 a 3 sessões com intervalo de 4-6 semanas para melhores resultados.',
        indicacoes: 'Indicado para flacidez facial, rugas profundas, perda de elasticidade, busca por lifting não cirúrgico.',
        notas: 'Tecnologia de ponta com resultados científicos. Pode causar leve desconforto durante. Resultados iniciais em 3 semanas, melhora contínua por 3-6 meses.'
    },
    'FOTONA': {
         categoria: 'aparelhos',
         descricao: 'Conhecido como a "Ferrari dos lasers", o Fotona utiliza tecnologia de ponta para: Rejuvenescimento facial, Clareamento íntimo e facial, Tratamento de flacidez, poros e textura, Procedimentos corporais e vasculares. Resultados rápidos, seguros e personalizados.',
         imagem: 'Toxina-botulinica',
        beneficios: [
            'Rejuvenescimento facial completo',
            'Clareamento da pele',
            'Redução de poros',
            'Melhora de textura',
            'Tratamento vascular',
            'Versatilidade terapêutica',
            'Resultados rápidos e visíveis'
        ],
        duracao: 'Sessões de 30 a 60 minutos conforme tratamento. Protocolo varia: 4-6 sessões para rejuvenescimento, podendo variar para outros tratamentos.',
        indicacoes: 'Indicado para rejuvenescimento facial, manchas, flacidez, poros dilatados, vasos sanguíneos visíveis, e tratamentos corporais.',
        notas: 'Tecnologia de ponta com múltiplas aplicações. Sem tempo de inatividade. Protetor solar obrigatório após tratamento.'
    }
};

// Função para obter parâmetro da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para decodificar URL
function decodeParameter(param) {
    return decodeURIComponent(param);
}

// Carregar dados do procedimento ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    const procedureName = decodeParameter(getQueryParam('procedure'));

    if (!procedureName || !procedimentosCompleto[procedureName]) {
        // Se não houver procedimento válido, redirecionar para início
        window.location.href = 'index.html#services';
        return;
    }

    const procedure = procedimentosCompleto[procedureName];

    // Preencher conteúdo da página
    document.getElementById('procedureName').textContent = procedureName;
    document.getElementById('navTitle').textContent = procedureName;
    
    // // Carregar imagem ou placeholder (comentado - imagem removida)
    // const procedureImageDiv = document.getElementById('procedureImage');
    // const imagePath = `./assets/${procedure.imagem}.png`;
    // 
    // // Criar elemento de imagem
    // const img = document.createElement('img');
    // img.src = imagePath;
    // img.alt = procedureName;
    // img.style.maxWidth = '100%';
    // img.style.maxHeight = '100%';
    // img.style.objectFit = 'contain';
    // img.style.padding = '1rem';
    // img.onerror = function() {
    //     // Se a imagem não carregar, mostrar placeholder
    //     procedureImageDiv.textContent = procedure.imagem;
    //     procedureImageDiv.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)';
    // };
    // 
    // procedureImageDiv.innerHTML = '';
    // procedureImageDiv.appendChild(img);
    // procedureImageDiv.style.background = '#f5f5f5';
    // procedureImageDiv.style.border = '1px solid #e0e0e0';
    
    document.getElementById('procedureDescription').innerHTML = `<p>${procedure.descricao}</p>`;

    // Preencher tipos se disponíveis
    const typesContainer = document.getElementById('procedureTypes');
    if (procedure.tipos && procedure.tipos.length > 0) {
        let typesHTML = '<h3>Tipos e Preços</h3>';
        typesHTML += '<div style="background-color: #f5f5f5; padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--color-gold); margin-bottom: 2rem;">';
        
        procedure.tipos.forEach(tipo => {
            typesHTML += `
                <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #ddd;">
                    <h4 style="color: var(--color-teal); margin-bottom: 0.5rem; font-size: 1.1rem;">${tipo.nome}</h4>`;
            
            if (tipo.preco) {
                typesHTML += `<p style="color: var(--color-gold); font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem;">${tipo.preco}</p>`;
            }
            
            if (tipo.composicao) {
                typesHTML += `<p style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Composição:</strong> ${tipo.composicao}</p>`;
            }
            
            typesHTML += `<p style="color: var(--color-dark-gray); line-height: 1.6;">${tipo.descricao}</p>`;
            typesHTML += '</div>';
        });
        
        typesHTML += '</div>';
        typesContainer.innerHTML = typesHTML;
    }

    // Preencher benefícios
    const benefitsList = document.getElementById('procedureBenefits');
    procedure.beneficios.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // Preencher outros campos
    document.getElementById('procedureDuration').textContent = procedure.duracao;
    document.getElementById('procedureIndications').textContent = procedure.indicacoes;
    document.getElementById('procedureNotes').textContent = procedure.notas;

    // Atualizar título da página
    document.title = `Essenza Prime - ${procedureName}`;
});
