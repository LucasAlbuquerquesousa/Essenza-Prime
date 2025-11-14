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
    'Massagem Relaxante': {
        categoria: 'corporal',
        descricao: 'A massagem relaxante é uma técnica terapêutica que trabalha os músculos e tecidos do corpo através de movimentos suaves e coordenados. Este procedimento contribui para a redução de tensões musculares acumuladas no dia a dia, promovendo relaxamento profundo e bem-estar geral.',
        imagem: 'Massagem Relaxante',
        beneficios: [
            'Redução significativa de tensões musculares',
            'Alívio de dores e incômodos localizados',
            'Melhora da circulação sanguínea',
            'Estimulação da produção de endorfinas',
            'Redução do estresse e ansiedade',
            'Melhora na qualidade do sono',
            'Sensação de bem-estar e relaxamento profundo'
        ],
        duracao: 'Cada sessão tem duração de 50 a 60 minutos. Recomenda-se uma sessão por semana para melhores resultados, podendo variar conforme necessidade individual.',
        indicacoes: 'Ideal para pessoas que buscam relaxamento, alívio de tensões musculares, redução de estresse e bem-estar geral. Indicado para todos os tipos de pele e biotipo.',
        notas: 'Procedimento realizado apenas após avaliação individual. Resultados variam conforme a resposta individual do corpo. Repouso adequado e hidratação são recomendados após a sessão.'
    },
    'Drenagem Modeladora': {
        categoria: 'corporal',
        descricao: 'A drenagem modeladora é uma técnica combinada que une movimentos de drenagem do sistema linfático com modelagem corporal. Este procedimento estimula a circulação linfática, contribuindo para melhora do contorno corporal e redução de inchaços localizados.',
        imagem: 'Drenagem Modeladora',
        beneficios: [
            'Melhora visível do contorno corporal',
            'Redução de inchaços e retenção de líquidos',
            'Estimulação da circulação linfática',
            'Redução de celulite e flacidez',
            'Melhora da textura da pele',
            'Aumento de elasticidade cutânea',
            'Sensação de pernas mais leves'
        ],
        duracao: 'Sessões com duração média de 60 minutos. Protocolo recomendado: 2 a 3 sessões por semana para potencializar resultados.',
        indicacoes: 'Indicado para pessoas com inchaços, celulite, flacidez corporal ou que buscam melhorar o contorno do corpo. Particularmente eficaz em pernas, glúteos e braços.',
        notas: 'Procedimento individualizado conforme avaliação prévia. Biotipo, hábitos de vida e cuidados pessoais influenciam os resultados. Avaliação profissional necessária para definir protocolo.'
    },
    'Drenagem Linfática': {
        categoria: 'corporal',
        descricao: 'A drenagem linfática é uma técnica especializada que estimula o sistema linfático do corpo. Através de movimentos suaves e rítmicos, contribui para a melhora da circulação linfática, auxiliando na redução de inchaços, edemas e desconfortos corporais.',
        imagem: 'Drenagem Linfática',
        beneficios: [
            'Redução eficaz de inchaços e edemas',
            'Alívio de desconfortos corporais',
            'Estímulo do sistema imunológico',
            'Melhora da circulação linfática',
            'Eliminação de toxinas do corpo',
            'Melhora da textura da pele',
            'Sensação de leveza corporal'
        ],
        duracao: 'Sessões de 50 a 60 minutos. Frequência recomendada: 1 a 2 vezes por semana, conforme necessidade.',
        indicacoes: 'Indicado para pessoas com inchaços nas pernas, pós-operatório, retenção de líquidos ou desconfortos corporais. Beneficia pessoas com linfedema ou predisposição.',
        notas: 'Técnica realizada com precisão sob avaliação individual. Contra-indicações devem ser avaliadas em consulta prévia. Hidratação e descanso recomendados após sessão.'
    },
    'Drenagem Pós-operatória': {
        categoria: 'corporal',
        descricao: 'A drenagem pós-operatória é um procedimento especializado desenvolvido para auxiliar na recuperação após cirurgias. Utiliza técnicas suaves de estimulação linfática para reduzir edemas, hematomas e contribuir para uma recuperação mais rápida e confortável.',
        imagem: 'Drenagem Pós-operatória',
        beneficios: [
            'Redução significativa de inchaços pós-operatórios',
            'Diminuição de hematomas e roxos',
            'Alívio de desconfortos e dores',
            'Aceleração do processo cicatricial',
            'Melhora da mobilidade mais rápida',
            'Redução de complicações pós-operatórias',
            'Recuperação mais confortável'
        ],
        duracao: 'Sessões de 40 a 60 minutos. Protocolo: iniciar 3 a 5 dias após cirurgia, conforme orientação médica, com frequência de 2 a 3 sessões semanais.',
        indicacoes: 'Indicado para recuperação pós-cirúrgica de qualquer natureza. Pode ser utilizada após cirurgias plásticas, ortopédicas ou outras intervenções.',
        notas: 'ESSENCIAL: Realizado apenas sob recomendação e orientação médica. Acompanhamento médico obrigatório. Contra-indicações específicas devem ser respeitadas.'
    },
    'Intradermoterapia': {
        categoria: 'corporal',
        descricao: 'A intradermoterapia é uma técnica que envolve a aplicação de substâncias nutritivas e revitalizantes na camada dérmica da pele. Contribui para fortalecer, hidratar e revitalizar a pele, melhorando sua textura, elasticidade e aparência geral.',
        imagem: 'Intradermoterapia',
        beneficios: [
            'Revitalização profunda da pele',
            'Melhora significativa de elasticidade',
            'Aumento de hidratação cutânea',
            'Redução de rugas e linhas de expressão',
            'Fortalecimento da derme',
            'Melhora de flacidez leve a moderada',
            'Aparência mais jovem e radiante'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo recomendado: 1 sessão por semana durante 4 a 6 semanas, seguido de manutenção mensal.',
        indicacoes: 'Indicado para todos os tipos de pele. Particularmente recomendado para peles maduras, com flacidez, ressecamento ou perda de elasticidade.',
        notas: 'Procedimento personalizado conforme tipo de pele e necessidades. Resultados progressivos. Resultam variáveis conforme resposta biológica individual.'
    },
    'Hidrolipoclasia': {
        categoria: 'corporal',
        descricao: 'A hidrolipoclasia é um procedimento que utiliza ultrassom de frequência específica para contribuir à redução de depósitos adiposos localizados. As ondas ultrassônicas atuam de forma direcionada, auxiliando na quebra de células de gordura e promovendo redução gradual e natural do tecido adiposo.',
        imagem: 'Hidrolipoclasia',
        beneficios: [
            'Redução eficaz de gordura localizada',
            'Melhora do contorno corporal',
            'Efeito progressivo e natural',
            'Sem incisões ou cicatrizes',
            'Procedimento não invasivo',
            'Redução de medidas em regiões específicas',
            'Melhora da textura e firmeza da pele'
        ],
        duracao: 'Sessões de 30 a 45 minutos. Protocolo: 1 a 2 sessões por semana durante 6 a 10 semanas, conforme volume a reduzir.',
        indicacoes: 'Indicado para redução de depósitos adiposos localizados em abdômen, flancos, coxas, braços e outras regiões com gordura concentrada.',
        notas: 'Resultados variam conforme biotipo individual, cuidados pessoais e estilo de vida. Alimentação equilibrada e exercício físico potencializam resultados.'
    },
    'Harmonização Glútea': {
        categoria: 'corporal',
        descricao: 'A harmonização glútea é um procedimento que combina técnicas especializadas para contribuir à elevação, firmeça e melhor definição da região glútea. Estimula a produção de colágeno e auxilia no desenvolvimento muscular através de tecnologia avançada.',
        imagem: 'Harmonização Glútea',
        beneficios: [
            'Elevação visível dos glúteos',
            'Melhora significativa de firmeza',
            'Melhor definição e contorno',
            'Estimulação de colágeno',
            'Desenvolvimento muscular gradual',
            'Redução de flacidez',
            'Resultado natural e harmonioso'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo recomendado: 1 sessão semanal durante 8 a 10 semanas para melhores resultados.',
        indicacoes: 'Indicado para pessoas que buscam elevação glútea, melhora de firmeza e melhor contorno da região. Particularmente indicado pós-emagrecimento ou aumento de idade.',
        notas: 'Procedimento individualizado conforme avaliação. Exercícios específicos e cuidados pessoais potencializam resultados. Resposta varia conforme características biológicas.'
    },
    'Limpeza de Pele': {
        categoria: 'facial',
        descricao: 'A limpeza de pele profunda é um procedimento que vai além da limpeza diária, removendo impurezas, oleosidade excessiva e estimulando a renovação celular. Contribui significativamente para melhora da textura, claridade e saúde geral da pele facial.',
        imagem: 'Limpeza de Pele',
        beneficios: [
            'Pele profundamente limpa e purificada',
            'Remoção eficaz de impurezas',
            'Redução de oleosidade e brilho excessivo',
            'Estimulação de renovação celular',
            'Melhora da textura e aspecto da pele',
            'Redução de acne e comedões',
            'Pele mais clara e radiante'
        ],
        duracao: 'Sessões de 50 a 60 minutos. Frequência recomendada: 1 sessão a cada 2 a 4 semanas para manutenção contínua.',
        indicacoes: 'Indicado para todos os tipos de pele, especialmente peles oleosas, acneicas ou com impurezas. Fundamental na rotina facial de cuidados.',
        notas: 'Técnica adaptada ao tipo de pele específico. Pode causar leve sensibilidade pós-procedimento. Protetor solar diário recomendado após limpeza.'
    },
    'Drenagem Linfática Facial': {
        categoria: 'facial',
        descricao: 'A drenagem linfática facial é uma técnica delicada que estimula o sistema linfático do rosto e pescoço. Contribui para redução de inchaços, melhora da circulação facial e promove aparência mais descansada, jovem e revitalizada.',
        imagem: 'Drenagem Linfática Facial',
        beneficios: [
            'Redução de inchaços faciais',
            'Face mais descansada e revigorada',
            'Melhora da circulação facial',
            'Redução de olheiras e inchaços periaoculares',
            'Melhor definição de feições',
            'Pele mais luminosa e radiante',
            'Revitalização natural da face'
        ],
        duracao: 'Sessões de 40 a 50 minutos. Frequência ideal: 1 a 2 vezes por semana para resultados ótimos.',
        indicacoes: 'Indicado para pessoas com inchaços faciais, principalmente logo após acordar. Beneficia pós-procedimentos estéticos e quem busca face mais descansada.',
        notas: 'Técnica suave e relaxante. Resultados imediatos após primeira sessão. Manutenção regular potencializa benefícios.'
    },
    'Drenagem Pós-operatória Facial': {
        categoria: 'facial',
        descricao: 'A drenagem pós-operatória facial é uma técnica especializada para auxiliar a recuperação após procedimentos cirúrgicos faciais. Utiliza movimentos suaves para reduzir edemas, hematomas e contribuir para cicatrização mais rápida e com melhor qualidade.',
        imagem: 'Drenagem Pós-operatória Facial',
        beneficios: [
            'Redução rápida de inchaços pós-operatórios',
            'Diminuição significativa de hematomas',
            'Cicatrização mais rápida e eficiente',
            'Alívio de desconfortos faciais',
            'Recuperação mais confortável',
            'Melhora da mobilidade facial',
            'Resultados estéticos mais precoces'
        ],
        duracao: 'Sessões de 40 a 50 minutos. Protocolo: iniciar 3 a 5 dias após cirurgia, com frequência de 2 a 3 sessões semanais.',
        indicacoes: 'Indicado para recuperação pós-cirúrgica facial, incluindo rinoplastia, blefaroplastia, lifting facial ou outros procedimentos.',
        notas: 'ESSENCIAL: Realizar apenas sob orientação e acompanhamento médico. Contra-indicações devem ser rigorosamente respeitadas.'
    },
    'Peeling Ultrassônico': {
        categoria: 'facial',
        descricao: 'O peeling ultrassônico é um procedimento não invasivo que utiliza ultrassom de frequência específica para realizar uma esfoliação profunda e controlada. Contribui à renovação celular, redução de marcas, cicatrizes e irregularidades da pele.',
        imagem: 'Peeling Ultrassônico',
        beneficios: [
            'Renovação celular profunda',
            'Redução de cicatrizes e marcas',
            'Redução de rugas e linhas de expressão',
            'Melhora da textura de pele',
            'Estimulação de produção de colágeno',
            'Claridade e luminosidade aumentadas',
            'Efeito natural e progressivo'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo: 1 sessão a cada 2 a 3 semanas durante 4 a 6 sessões para melhores resultados.',
        indicacoes: 'Indicado para peles com cicatrizes, marcas de acne, rugas, envelhecimento prematuro ou busca por renovação geral.',
        notas: 'Procedimento não invasivo e seguro. Leve sensibilidade pós-procedimento pode ocorrer. Protetor solar obrigatório após.'
    },
    'Intradermoterapia Facial': {
        categoria: 'facial',
        descricao: 'A intradermoterapia facial é uma técnica que aplica substâncias revitalizantes diretamente na camada dérmica facial. Contribui para profunda hidratação, revitalização e preenchimento natural da face, melhorando elasticidade e reduzindo sinais de envelhecimento.',
        imagem: 'Intradermoterapia Facial',
        beneficios: [
            'Hidratação profunda e duradoura',
            'Melhora de rugas finas e linhas',
            'Aumento de elasticidade facial',
            'Preenchimento natural de depressões',
            'Pele mais firma e tonificada',
            'Aparência mais jovem e fresca',
            'Luminosidade aumentada'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo recomendado: 1 sessão por semana durante 4 a 6 semanas, com retoques mensais.',
        indicacoes: 'Indicado para todos os tipos de pele facial. Particularmente recomendado para peles maduras, ressecadas ou com perda de elasticidade.',
        notas: 'Personalizado conforme necessidades da pele. Resultados progressivos e naturais. Seguir rotina pós-procedimento é importante.'
    },
    'Lipo de Papada': {
        categoria: 'facial',
        descricao: 'A lipo de papada é um procedimento que contribui à redução de gordura localizada na região do queixo e pescoço. Auxiliar na definição e contorno dessa região, melhorando a harmonia facial e o perfil, estimulando colágeno para maior enrijecimento da pele.',
        imagem: 'Lipo de Papada',
        beneficios: [
            'Redução visível de gordura de papada',
            'Melhor definição do contorno facial',
            'Perfil mais definido e harmonioso',
            'Estimulação de colágeno local',
            'Enrijecimento gradual da região',
            'Melhora de autoestima',
            'Resultado natural e progressivo'
        ],
        duracao: 'Sessões de 30 a 45 minutos. Protocolo: 1 a 2 sessões por semana durante 6 a 8 semanas para melhores resultados.',
        indicacoes: 'Indicado para pessoas com acúmulo de gordura na região de papada, flacidez nessa área ou que buscam melhor definição facial.',
        notas: 'Procedimento individualizado conforme quantidade de gordura. Estilo de vida e cuidados potencializam resultados. Resposta varia conforme biotipo.'
    },
    'Ultrassom Microfocado': {
        categoria: 'facial',
        descricao: 'O ultrassom microfocado é uma tecnologia avançada não invasiva que estimula a produção de colágeno em camadas profundas da pele facial. Contribui para lifting natural, enrijecimento cutâneo e redução visível de sinais de envelhecimento com resultados progressivos.',
        imagem: 'Ultrassom Microfocado',
        beneficios: [
            'Lifting natural e progressivo',
            'Enrijecimento visível da pele',
            'Redução de rugas e linhas',
            'Melhora de flacidez',
            'Estimulação de colágeno profundo',
            'Contorno facial melhorado',
            'Aparência mais jovem e tonificada'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo: 1 sessão a cada 2 a 4 semanas, com série inicial de 3 a 4 sessões.',
        indicacoes: 'Indicado para flacidez facial, rugas profundas, perda de elasticidade. Adequado para qualquer tipo de pele.',
        notas: 'Procedimento não invasivo com tecnologia de ponta. Resultados aparecem progressivamente nos próximos 3 meses. Manutenção recomendada.'
    },
    'Criolipólise de Placas': {
        categoria: 'equipamentos',
        descricao: 'A criolipólise é um procedimento não invasivo que utiliza temperatura controlada extremamente baixa para contribuir à redução de depósitos adiposos. O frio seletivo atua nas células de gordura, induzindo sua morte gradual e natural, resultando em redução mensurável de tecido adiposo.',
        imagem: 'Criolipólise de Placas',
        beneficios: [
            'Redução significativa de gordura localizada',
            'Procedimento totalmente não invasivo',
            'Sem cicatrizes ou incisões',
            'Recuperação imediata',
            'Sem tempo de repouso necessário',
            'Resultados naturais e progressivos',
            'Segurança comprovada clinicamente'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo: 1 a 2 sessões por área, com intervalo de 15 dias entre sessões.',
        indicacoes: 'Indicado para redução de gordura localizada em abdômen, flancos, coxas, braços e queixo em pessoas com biotipo adequado.',
        notas: 'Resultados variam conforme biotipo e características da gordura. Manutenção de peso é importante. Avaliação prévia necessária.'
    },
    'Lipocavitação': {
        categoria: 'equipamentos',
        descricao: 'A lipocavitação é um procedimento que utiliza ultrassom de frequência específica para criar cavitação, o que contribui à emulsificação e redução de células de gordura. Procedimento não invasivo que auxilia no contorno corporal e melhora da textura da pele.',
        imagem: 'Lipocavitação',
        beneficios: [
            'Redução eficaz de gordura localizada',
            'Melhora do contorno corporal',
            'Nenhuma incisão ou cicatriz',
            'Procedimento rápido e indolor',
            'Recuperação imediata',
            'Melhora de celulite',
            'Pele mais tonificada e firme'
        ],
        duracao: 'Sessões de 30 a 45 minutos. Protocolo: 1 a 2 sessões por semana durante 4 a 8 semanas para melhores resultados.',
        indicacoes: 'Indicado para redução de gordura localizada em diversas regiões do corpo, especialmente abdômen, coxas, glúteos e braços.',
        notas: 'Procedimento individualizado conforme avaliação. Alimentação saudável e hidratação potencializam resultados. Resposta varia por biotipo.'
    },
    'Criofrequência': {
        categoria: 'equipamentos',
        descricao: 'A criofrequência é uma tecnologia que combina frio com radiofrequência, estimulando a produção de colágeno em diferentes camadas da pele. Contribui para lifting, enrijecimento cutâneo e melhora significativa de flacidez e textura, com resultados naturais e progressivos.',
        imagem: 'Criofrequência',
        beneficios: [
            'Enrijecimento visível de pele',
            'Lifting natural sem invasão',
            'Melhora significativa de flacidez',
            'Estimulação de colágeno',
            'Melhora de textura cutânea',
            'Redução de celulite',
            'Resultados progressivos e duradouros'
        ],
        duracao: 'Sessões de 45 a 60 minutos. Protocolo: 1 a 2 sessões por semana durante 6 a 8 semanas para melhor efetividade.',
        indicacoes: 'Indicado para flacidez leve a moderada, celulite, envelhecimento cutâneo e busca por enrijecimento natural.',
        notas: 'Procedimento seguro e confortável. Leve aquecimento pode ser sentido durante. Hidratação recomendada após sessão.'
    },
    'Depilação a Laser': {
        categoria: 'equipamentos',
        descricao: 'A depilação a laser é um procedimento que utiliza tecnologia laser de última geração para contribuir à redução progressiva de pelos. O laser atua sobre o folículo piloso, enfraquecendo-o gradualmente e resultando em redução duradoura de pelos corporais.',
        imagem: 'Depilação a Laser',
        beneficios: [
            'Redução progressiva e duradoura de pelos',
            'Resultados visíveis após poucas sessões',
            'Redução de pelos finos, médios e grossos',
            'Pele mais macia e lisa',
            'Sem irritação ou lesões',
            'Muito mais econômico que depilação contínua',
            'Adequado para qualquer tipo de pele'
        ],
        duracao: 'Sessões de 15 a 45 minutos conforme área a ser tratada. Protocolo: sessões com intervalo de 4 a 6 semanas, série inicial de 6 a 8 sessões.',
        indicacoes: 'Indicado para redução de pelos em qualquer região do corpo. Funciona melhor em peles claras com pelos escuros, mas adequado para diversos fototipos.',
        notas: 'Múltiplas sessões necessárias para resultados ótimos. Protetor solar obrigatório após cada sessão. Alguns contraceptivos podem reduzir efetividade.'
    },
    'Inkie': {
        categoria: 'equipamentos',
        descricao: 'O Inkie é uma tecnologia avançada de última geração para remoção de tatuagens e manchas de pele. Utiliza pulsos de laser precisos que fragmentam o pigmento, permitindo sua eliminação gradual através do sistema linfático do corpo.',
        imagem: 'Inkie',
        beneficios: [
            'Remoção eficaz de tatuagens',
            'Atua em diversas cores de tatuagem',
            'Redução de manchas de pele',
            'Procedimento seguro e preciso',
            'Menos sessões necessárias',
            'Risco reduzido de cicatrizes',
            'Recuperação rápida entre sessões'
        ],
        duracao: 'Sessões de 15 a 45 minutos conforme tamanho. Protocolo: múltiplas sessões conforme características da tatuagem (cor, tamanho, profundidade).',
        indicacoes: 'Indicado para remoção de tatuagens coloridas ou pretas, manchas de pele, sardas e outras alterações pigmentares indesejadas.',
        notas: 'Resultados variam conforme cor, tamanho, profundidade e tempo de tatuagem. Manutenção de higiene pós-procedimento é essencial. Protetor solar obrigatório.'
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
    document.getElementById('procedureImage').textContent = procedure.imagem;
    document.getElementById('procedureDescription').innerHTML = `<p>${procedure.descricao}</p>`;

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
