# Essenza Prime Clinic

## Sobre o Projeto

**Essenza Prime Clinic** é um site moderno e responsivo desenvolvido para apresentar os serviços de estética e bem-estar oferecidos pela Dra. Amanda Marques, biomédica especializada em estética.

### Filosofia
> "Natural é o novo premium" - Estética com precisão, segurança e ciência

## ✨ Características

- **Design Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Carrossel Hero**: Slides automáticos com conteúdo visual impactante
- **Seção de Serviços**: 18 serviços organizados em 3 categorias (Corporal, Facial, Aparelhos)
- **Filtros de Serviços**: Sistema de abas para alternar entre categorias
- **Formulário Inteligente de Agendamento**: 
  - Campos: Nome, Telefone (com formatação automática), Email, Tipo de Procedimento, Procedimento Específico
  - Sistema dinâmico que mostra apenas procedimentos do tipo selecionado
  - Score automático baseado no custo do procedimento (enviado ao N8N)
  - Modal elegante com confirmação de envio
- **Integração N8N**: Webhook para automação de envio de emails
- **Depoimentos**: Seção com avaliações de clientes
- **Integração WhatsApp**: Botão flutuante e CTA para agendamentos rápidos
- **Mapa de Localização**: Google Maps integrado
- **Navegação Suave**: Scroll behavior smooth em toda a página

## 🎨 Paleta de Cores

```
Teal (Principal):     #006A6F
Dourado (Destaque):   #E6D27B
Branco (Fundo):       #F5F5F5
Preto (Texto):        #333333
```

## 📁 Estrutura de Arquivos

```
Essenza Prime/
├── index.html           # Arquivo principal HTML
├── styles.css          # Estilos CSS
├── scripts.js          # Funcionalidades JavaScript
├── assets/             # Imagens e logos
│   ├── Logo versão 5 - Vetorizado - Azul petróleo - CMYK.png
│   ├── Logo versão 5 - Vetorizado - Dourado fundo claro - RGB.png
│   └── Logo versão 5 - Vetorizado - Dourado fundo escuro - RGB.png
└── README.md          # Este arquivo
```

## 🚀 Seções do Site

### 1. Navegação (Navbar)
- Logo responsiva
- Menu de navegação com links internos
- Menu hamburger para mobile
- Botão CTA "Agendar"
- Efeito visual com linha ao passar hover

### 2. Hero com Carrossel
- 3 slides com conteúdo e imagens de fundo
- Indicadores de slide na base
- Conteúdo dinâmico com cores variadas

### 3. Sobre a Profissional
- Foto placeholder
- Informações sobre Dra. Amanda Marques
- Filosofia de trabalho e diferencial
- Informações de credencial (CRBM)

### 4. Serviços
- **Corporais** (8 serviços):
  - Massagem Relaxante
  - Drenagem Modeladora
  - Drenagem Linfática
  - Drenagem Pós-operatória
  - Intradermoterapia
  - Hidrolipoclasia
  - Harmonização Glútea

- **Faciais** (8 serviços):
  - Limpeza de Pele
  - Drenagem Linfática Facial
  - Drenagem Pós-operatória Facial
  - Peeling Ultrassônico
  - Intradermoterapia Facial
  - Lipo de Papada
  - Ultrassom Microfocado

- **Aparelhos** (6 serviços):
  - Criolipólise de Placas
  - Lipocavitação
  - Criofrequência
  - Depilação a Laser
  - Inkie (Remoção de Tatuagens)

### 5. Depoimentos
- **Cards elegantes** com avaliações de clientes
- **5 estrelas de avaliação** em cada depoimento
- **Avatar do cliente** com iniciais em gradiente
- **Ícone do Instagram** ao lado do nome da rede social
- **Integração com nomes de Instagram**
- **Efeitos hover** animados nas estrelas e ícones
- **Design responsivo** que se adapta a todos os tamanhos de tela

### 6. Localização
- Google Maps integrado
- Endereço completo
- Telefone com link direto
- Logo da clínica

### 7. Formulário de Agendamento (CTA Final)
- **Formulário Dinâmico**:
  - Nome Completo
  - Telefone com DDD (formatação automática)
  - Email
  - Tipo de Procedimento (Corporal, Facial, Equipamentos)
  - Procedimento Específico (preenchido dinamicamente)
- **Sistema de Pontuação (Score)**:
  - Calculado automaticamente baseado no custo médio de cada procedimento
  - Valores de 0 a 100
  - Enviado junto aos dados para análise no N8N
- **Modal de Sucesso**:
  - Confirmação elegante com ícone e mensagem personalizada
  - Lembrete de verificar email (incluindo pasta de Spam)
  - Botão direto para seguir no Instagram
- **Modal de Erro**:
  - Mensagem amigável em caso de falha
  - Opções para tentar novamente ou contatar via WhatsApp
- **Integração N8N**: Envia dados para `https://n8n.srv997821.hstgr.cloud/webhook-test/form-essenza`
- **Opção WhatsApp**: Botão verde com ícone para agendamento direto via WhatsApp

### 8. Footer
- Logo
- Informações de contato
- Links de redes sociais
- Direitos autorais

## 📱 Responsividade

- **Desktop**: Layout completo com grid 2 colunas
- **Tablet (até 768px)**: Menu hamburger ativo, grid adaptado
- **Mobile (até 480px)**: Layout em coluna única, fontes reduzidas

## 🔧 Tecnologias Utilizadas

- **HTML5**: Semântico e estruturado
- **CSS3**: Grid, Flexbox, Animações, Transições
- **JavaScript**: Carrossel automático, Menu hamburger, Filtros de serviços
- **Google Fonts**: Vollkorn (títulos) e Raleway (corpo)
- **Google Maps API**: Mapa integrado de localização

## 📞 Contato

- **Telefone**: +55 (21) 96736-9147
- **WhatsApp**: +55 (21) 96736-9147
- **Email**: contato@essenzaprime.com
- **Endereço**: Av. Armando Lombardi, 205 - Sala 206, Barra da Tijuca, Rio de Janeiro - RJ
- **Instagram**: 
  - @essenza_prime_clinic
  - @draamanda.biomed

## ⚙️ Funcionalidades JavaScript

### Carrossel de Slides
```javascript
currentSlide(index)  // Muda para um slide específico
nextSlide()         // Vai para o próximo slide
// Auto-avança a cada 5 segundos
```

### Menu Hamburger
```javascript
// Ativa/desativa menu em mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})
```

### Filtros de Serviços
```javascript
// Filtra serviços por categoria
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mostra/oculta cards conforme categoria selecionada
    })
})
```

### Formulário de Agendamento
```javascript
// Formatação automática de telefone
telefoneInput.addEventListener('input', (e) => {
    // Formata como (00) 00000-0000
})

// Preenchimento dinâmico de procedimentos
tipoProcedimentoSelect.addEventListener('change', (e) => {
    // Preenche select de procedimento baseado no tipo
})

// Envio do formulário com integração N8N
form.addEventListener('submit', async (e) => {
    // Calcula score automaticamente
    // Envia dados para webhook N8N
    // Mostra modal de sucesso/erro
})
```

### Modais
```javascript
// Mostrar/fechar modal de sucesso
mostrarModalSucesso()
fecharModalSucesso()

// Mostrar/fechar modal de erro
mostrarModalErro()
fecharModalErro()

// Fechar ao clicar fora do modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal()
})
```

## 🎯 Diferenciais

✅ Navegação intuitiva e rápida
✅ Design premium e elegante
✅ Totalmente responsivo
✅ Formulário inteligente com campos dinâmicos
✅ Sistema automático de pontuação (Score) por procedimento
✅ Integração com N8N para automação de emails
✅ Modais elegantes com animações suaves
✅ Integração WhatsApp (botão flutuante + CTA)
✅ Sistema de filtros de serviços
✅ Formatação automática de telefone (DDD)
✅ **Seção de depoimentos premium** com:
   - Cards com bordas coloridas e sombras profundas
   - Avaliação em 5 estrelas
   - Avatares dos clientes em gradiente
   - Ícones do Instagram e efeitos hover
✅ SEO otimizado
✅ Acessibilidade visual
✅ Modal com lembrete de verificar email
✅ Link direto para Instagram no modal de sucesso

## 🔗 Integração N8N

O formulário envia os dados para um webhook N8N que pode ser configurado para:

- Enviar email automático de confirmação ao cliente
- Registrar os dados em banco de dados
- Criar tarefa de acompanhamento
- Integrar com CRM
- Enviar notificações internas

**Endpoint**: `https://n8n.srv997821.hstgr.cloud/webhook-test/form-essenza`

**Dados Enviados (JSON)**:
```json
{
  "nome": "João Silva",
  "telefone": "(21) 96736-9147",
  "email": "joao@email.com",
  "tipoProcedimento": "facial",
  "procedimento": "Peeling Ultrassônico",
  "score": 65,
  "data": "2025-11-13T10:30:00.000Z"
}
```

## 📊 Tabela de Scores por Procedimento

### Corporais (20-75)
- Massagem Relaxante: 20
- Drenagem Linfática: 30
- Drenagem Modeladora: 35
- Drenagem Pós-operatória: 45
- Intradermoterapia: 50
- Hidrolipoclasia: 60
- Harmonização Glútea: 75

### Faciais (25-85)
- Limpeza de Pele: 25
- Drenagem Linfática Facial: 28
- Drenagem Pós-operatória Facial: 48
- Intradermoterapia Facial: 55
- Peeling Ultrassônico: 65
- Lipo de Papada: 70
- Ultrassom Microfocado: 85

### Equipamentos (55-80)
- Depilação a Laser: 55
- Lipocavitação: 65
- Criofrequência: 75
- Inkie: 72
- Criolipólise de Placas: 80

## 📝 Observações Importantes

- Todos os procedimentos são realizados somente após avaliação individual
- Resultados variam conforme biotipo e cuidados pessoais
- Alguns procedimentos requerem múltiplas sessões
- O score é calculado automaticamente e não é visível ao cliente
- Um email automático será enviado ao cliente após o envio do formulário (via N8N)

## 🛠️ Desenvolvedor

Desenvolvido com ❤️ para Essenza Prime Clinic

---

**Última atualização**: Dezembro de 2025
