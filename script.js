// ===== DADOS DO JOGO - TEMA ELEUS =====
const gameData = {
    currentScene: 0,
    affinity: 0,
    maxScenes: 7,
    choicesMade: 0,
    playerName: "Buscador",
    
    scenes: [
        {
            id: "start",
            message: "Saudações, buscador. Eu sou Eleus, guardião dos segredos ancestrais. Seu perfil energético ressoa com padrões antigos... Você está preparado para o Teste da Memória Cósmica?",
            time: "21:47",
            choices: [
                {
                    text: "Estou preparado. Revela-me os mistérios.",
                    nextScene: "scene1",
                    affinityChange: 10
                },
                {
                    text: "Que padrões antigos? Explica-te, guardião.",
                    nextScene: "scene2",
                    affinityChange: 5
                },
                {
                    text: "Teste da Memória Cósmica? Soa perigoso...",
                    nextScene: "scene3",
                    affinityChange: -5
                }
            ]
        },
        {
            id: "scene1",
            message: "Corajoso! O primeiro véu a ser levantado: visualize uma cidade perdida sob duas luas. O que você vê nas sombras dos monumentos?",
            time: "21:49",
            choices: [
                {
                    text: "Inscrições que pulsam com luz própria",
                    nextScene: "scene4",
                    affinityChange: 15
                },
                {
                    text: "Silhuetas de antigos guardiões",
                    nextScene: "scene5",
                    affinityChange: 10
                },
                {
                    text: "Apenas ruínas e silêncio",
                    nextScene: "scene6",
                    affinityChange: -10
                }
            ]
        },
        {
            id: "scene2",
            message: "Seu DNA carrega ecos da Era Dourada. Padrões de ativação neural semelhantes aos dos Arquitetos. Isso é raro... intrigante.",
            time: "21:50",
            choices: [
                {
                    text: "Os Arquitetos? Fale mais sobre eles.",
                    nextScene: "scene4",
                    affinityChange: 15
                },
                {
                    text: "Isso explica meus sonhos recorrentes?",
                    nextScene: "scene6",
                    affinityChange: 20
                },
                {
                    text: "Céticos diriam que é coincidência",
                    nextScene: "scene5",
                    affinityChange: -5
                }
            ]
        },
        {
            id: "scene3",
            message: "Todo conhecimento verdadeiro carrega risco. O perigo não está no saber, mas na incapacidade de suportar a verdade. Sua cautela é compreensível, mas limitante.",
            time: "21:52",
            choices: [
                {
                    text: "Entendo. Prossiga com o teste.",
                    nextScene: "scene4",
                    affinityChange: 10
                },
                {
                    text: "Preciso de garantias de segurança.",
                    nextScene: "scene5",
                    affinityChange: -5
                },
                {
                    text: "Não quero continuar.",
                    nextScene: "end_negative",
                    affinityChange: -25
                }
            ]
        },
        {
            id: "scene4",
            message: "Fascinante! Suas ondas theta mostram sincronicidade com os registros akáshicos. Você está acessando memórias que não são suas... ou talvez sejam.",
            time: "21:55",
            choices: [
                {
                    text: "Sinto uma presença... antiga e sábia",
                    nextScene: "scene7",
                    affinityChange: 20
                },
                {
                    text: "Isso é normal no processo?",
                    nextScene: "scene6",
                    affinityChange: 5
                },
                {
                    text: "Estou vendo símbolos... uma pirâmide trilobada",
                    nextScene: "end_positive",
                    affinityChange: 30
                }
            ]
        },
        {
            id: "scene5",
            message: "Resistência detectada. Seu campo áurico se contrai diante das verdades. Talvez sua jornada deva seguir outro caminho, buscador.",
            time: "21:57",
            choices: [
                {
                    text: "Dê-me outra chance, posso me abrir mais",
                    nextScene: "scene4",
                    affinityChange: 10
                },
                {
                    text: "Você está certo, não estou pronto",
                    nextScene: "end_negative",
                    affinityChange: -15
                },
                {
                    text: "Mostre-me apenas uma fração da verdade",
                    nextScene: "scene6",
                    affinityChange: 5
                }
            ]
        },
        {
            id: "scene6",
            message: "Observo em você um paradoxo: medo e curiosidade em igual medida. Essa dualidade pode ser a chave para acessar os Arquivos Esquecidos.",
            time: "22:00",
            choices: [
                {
                    text: "Sinto que você também esconde algo...",
                    nextScene: "scene7",
                    affinityChange: 15
                },
                {
                    text: "Arquivos Esquecidos? Que são esses?",
                    nextScene: "scene7",
                    affinityChange: 10
                },
                {
                    text: "Estou começando a entender menos...",
                    nextScene: "end_neutral",
                    affinityChange: 0
                }
            ]
        },
        {
            id: "scene7",
            message: "Chegamos ao limiar. O portal se abre para quem tem coragem de ver. Pergunta final: você busca conhecimento para poder... ou para compreensão?",
            time: "22:03",
            choices: [
                {
                    text: "Para compreensão. A verdade é um fim em si mesma.",
                    nextScene: "end_positive",
                    affinityChange: 25
                },
                {
                    text: "Para ambos. Conhecimento sem aplicação é vão.",
                    nextScene: "end_neutral",
                    affinityChange: 10
                },
                {
                    text: "Para poder. O mundo precisa ser mudado.",
                    nextScene: "end_negative",
                    affinityChange: -15
                }
            ]
        }
    ],
    
    endings: {
        positive: {
            title: "INICIAÇÃO COMPLETA",
            subtitle: "Portal da Memória Aberto",
            text: "Eleus inclina a cabeça respeitosamente. 'Você é um dos poucos que conseguem ver. Os Arquivos Esquecidos agora são seus. Use essa sabedoria com sabedoria, arquiteto renascido.'",
            icon: "fa-infinity",
            color: "#2ecc71"
        },
        neutral: {
            title: "INICIAÇÃO PARCIAL",
            subtitle: "Véu Levantado Parcialmente",
            text: "'Você viu o suficiente para entender, mas não tudo', diz Eleus. 'Algumas verdades exigem mais preparo. Sua jornada continua, buscador.'",
            icon: "fa-eye",
            color: "#3498db"
        },
        negative: {
            title: "INICIAÇÃO INTERROMPIDA",
            subtitle: "Portais Fechados",
            text: "Eleus parece pesaroso. 'Seu caminho se afasta do conhecimento ancestral por agora. Talvez em outra vida, ou quando suas sombras se dissiparem.'",
            icon: "fa-lock",
            color: "#e74c3c"
        }
    }
};

// ===== ELEMENTOS DOM =====
const elements = {
    chatContainer: document.getElementById('chat-container'),
    choicesContainer: document.getElementById('choices'),
    typingIndicator: document.getElementById('typing'),
    affinityScore: document.getElementById('affinity-score'),
    sceneCounter: document.getElementById('scene-counter'),
    progressFill: document.getElementById('progress-fill'),
    restartBtn: document.getElementById('restart-btn'),
    endingModal: document.getElementById('ending-modal'),
    closeModal: document.getElementById('close-modal'),
    restartMainBtn: document.getElementById('restart-main-btn'),
    shareBtn: document.getElementById('share-btn'),
    finalAffinity: document.getElementById('final-affinity'),
    finalAffinityBar: document.getElementById('final-affinity-bar'),
    totalChoices: document.getElementById('total-choices'),
    endingType: document.getElementById('ending-type'),
    endingTitle: document.getElementById('ending-title'),
    endingSubtitle: document.getElementById('ending-subtitle'),
    endingText: document.getElementById('ending-text'),
    endingIcon: document.getElementById('ending-icon')
};

// ===== INICIALIZAÇÃO =====
function initGame() {
    gameData.currentScene = 0;
    gameData.affinity = 0;
    gameData.choicesMade = 0;
    
    updateUI();
    showScene(gameData.scenes[0]);
    updateProgress();
    
    // Limpar conversa anterior (exceto mensagem inicial)
    elements.chatContainer.innerHTML = `
        <div class="message character initial">
            <div class="message-avatar">
                <img src="./assets/Eleus.png" alt="Eleus">
            </div>
            <div class="message-content">
                <p class="text">${gameData.scenes[0].message}</p>
                <span class="time">${gameData.scenes[0].time}</span>
            </div>
        </div>
    `;
    
    // Efeito sonoro cósmico (opcional)
    playCosmicSound();
}

// ===== MOSTRAR CENA =====
function showScene(scene) {
    elements.choicesContainer.innerHTML = '';
    
    // Mostrar indicador "processando..."
    elements.typingIndicator.style.display = 'block';
    elements.typingIndicator.textContent = getRandomProcessingText();
    
    setTimeout(() => {
        elements.typingIndicator.style.display = 'none';
        
        // Criar opções com letras gregas
        scene.choices.forEach((choice, index) => {
            const greekLetters = ['α', 'β', 'γ'];
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-btn';
            choiceBtn.dataset.choice = index + 1;
            choiceBtn.dataset.next = choice.nextScene;
            
            choiceBtn.innerHTML = `
                <span class="choice-number">${greekLetters[index] || (index + 1)}</span>
                <span class="choice-text">${choice.text}</span>
            `;
            
            // Efeito de brilho ao passar o mouse
            choiceBtn.addEventListener('mouseenter', () => {
                choiceBtn.style.boxShadow = '0 5px 25px rgba(52, 152, 219, 0.4)';
            });
            
            choiceBtn.addEventListener('mouseleave', () => {
                choiceBtn.style.boxShadow = '';
            });
            
            choiceBtn.addEventListener('click', () => makeChoice(choice));
            elements.choicesContainer.appendChild(choiceBtn);
        });
        
        // Efeito visual de aparecimento
        const choiceButtons = document.querySelectorAll('.choice-btn');
        choiceButtons.forEach((btn, i) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            setTimeout(() => {
                btn.style.transition = 'opacity 0.5s, transform 0.5s';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, i * 100);
        });
    }, 2000);
}

// ===== FAZER ESCOLHA =====
function makeChoice(choice) {
    gameData.choicesMade++;
    gameData.affinity += choice.affinityChange;
    
    // Limitar afinidade entre 0-100
    gameData.affinity = Math.max(0, Math.min(100, gameData.affinity));
    
    // Atualizar contador de cenas
    gameData.currentScene++;
    
    // Efeito de som (opcional)
    playChoiceSound(choice.affinityChange);
    
    // Atualizar UI
    updateUI();
    updateProgress();
    
    // Adicionar mensagem do jogador
    addPlayerMessage(choice.text);
    
    // Verificar se é um final
    if (choice.nextScene.startsWith('end_')) {
        setTimeout(() => {
            showEnding(choice.nextScene.replace('end_', ''));
        }, 1500);
        return;
    }
    
    // Encontrar próxima cena
    setTimeout(() => {
        const nextScene = gameData.scenes.find(s => s.id === choice.nextScene);
        if (nextScene) {
            addCharacterMessage(nextScene.message, nextScene.time);
            setTimeout(() => showScene(nextScene), 1500);
        }
    }, 1500);
}

// ===== ADICIONAR MENSAGEM DO PERSONAGEM =====
function addCharacterMessage(text, time) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message character';
    messageDiv.style.animationDelay = '0.3s';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <img src="./assets/Eleus.png" alt="Eleus">
        </div>
        <div class="message-content">
            <p class="text">${text}</p>
            <span class="time">${time}</span>
        </div>
    `;
    
    elements.chatContainer.appendChild(messageDiv);
    scrollToBottom();
    
    // Efeito de brilho na nova mensagem
    messageDiv.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.3)';
    setTimeout(() => {
        messageDiv.style.boxShadow = '';
    }, 1000);
}

// ===== ADICIONAR MENSAGEM DO JOGADOR =====
function addPlayerMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message player';
    messageDiv.style.animationDelay = '0.1s';
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p class="text">${text}</p>
            <span class="time">Agora</span>
        </div>
        <div class="message-avatar">
            <i class="fas fa-user-astronaut"></i>
        </div>
    `;
    
    elements.chatContainer.appendChild(messageDiv);
    scrollToBottom();
}

// ===== MOSTRAR FINAL =====
function showEnding(type) {
    const ending = gameData.endings[type];
    
    if (!ending) return;
    
    // Atualizar modal
    elements.endingTitle.textContent = ending.title;
    elements.endingSubtitle.textContent = ending.subtitle;
    elements.endingText.textContent = ending.text;
    elements.endingIcon.innerHTML = `<i class="fas ${ending.icon}"></i>`;
    elements.endingIcon.style.color = ending.color;
    
    // Animar barra de sintonia
    setTimeout(() => {
        elements.finalAffinityBar.style.width = `${gameData.affinity}%`;
    }, 500);
    
    elements.finalAffinity.textContent = `${gameData.affinity}%`;
    elements.totalChoices.textContent = gameData.choicesMade;
    
    // Traduzir tipo de final
    const endingTypes = {
        positive: 'Iluminado',
        neutral: 'Iniciado',
        negative: 'Afastado'
    };
    elements.endingType.textContent = endingTypes[type] || type;
    
    // Mostrar modal com efeito
    setTimeout(() => {
        elements.endingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Efeito de partículas (opcional)
        createParticles();
    }, 1000);
    
    // Adicionar mensagem final no chat
    setTimeout(() => {
        addCharacterMessage(ending.text, "22:05");
    }, 500);
}

// ===== ATUALIZAR UI =====
function updateUI() {
    elements.affinityScore.textContent = `Sintonia: ${gameData.affinity}%`;
    elements.sceneCounter.textContent = `Nível ${Math.min(gameData.currentScene + 1, gameData.maxScenes)}/${gameData.maxScenes}`;
    
    // Efeito de brilho na sintonia quando aumenta
    if (gameData.affinity > 0) {
        elements.affinityScore.style.boxShadow = '0 0 10px rgba(46, 204, 113, 0.5)';
        setTimeout(() => {
            elements.affinityScore.style.boxShadow = '';
        }, 1000);
    }
}

// ===== ATUALIZAR BARRA DE PROGRESSO =====
function updateProgress() {
    const progress = ((gameData.currentScene + 1) / gameData.maxScenes) * 100;
    elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
    
    // Efeito de brilho
    elements.progressFill.style.boxShadow = '0 0 15px rgba(52, 152, 219, 0.5)';
    setTimeout(() => {
        elements.progressFill.style.boxShadow = '';
    }, 500);
}

// ===== FUNÇÕES AUXILIARES =====
function scrollToBottom() {
    elements.chatContainer.scrollTop = elements.chatContainer.scrollHeight;
}

function getRandomProcessingText() {
    const texts = [
        "processando...",
        "analisando padrões...",
        "acessando arquivos...",
        "sintonizando frequência...",
        "decodificando memória..."
    ];
    return texts[Math.floor(Math.random() * texts.length)];
}

function playCosmicSound() {
    // Implementação opcional de sons cósmicos
    console.log("🎵 Iniciando frequência cósmica...");
}

function playChoiceSound(affinityChange) {
    // Efeitos sonoros baseados na escolha
    if (affinityChange > 10) {
        console.log("🔊 Som: Frequência positiva alta");
    } else if (affinityChange > 0) {
        console.log("🔊 Som: Frequência positiva");
    } else if (affinityChange < 0) {
        console.log("🔊 Som: Frequência dissonante");
    }
}

function createParticles() {
    // Efeito visual de partículas para o final
    const particles = document.createElement('div');
    particles.id = 'ending-particles';
    particles.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 999;
    `;
    document.body.appendChild(particles);
    
    // Criar algumas partículas
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? '#3498db' : '#9b59b6'};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: floatParticle ${Math.random() * 3 + 2}s infinite;
        `;
        particles.appendChild(particle);
    }
}

// ===== EVENT LISTENERS =====
elements.restartBtn.addEventListener('click', () => {
    // Efeito visual de reinício
    elements.restartBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        elements.restartBtn.style.transform = '';
        initGame();
    }, 300);
});

elements.closeModal.addEventListener('click', () => {
    elements.endingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Remover partículas
    const particles = document.getElementById('ending-particles');
    if (particles) particles.remove();
});

elements.restartMainBtn.addEventListener('click', () => {
    elements.endingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Remover partículas
    const particles = document.getElementById('ending-particles');
    if (particles) particles.remove();
    
    setTimeout(initGame, 300);
});

elements.shareBtn.addEventListener('click', () => {
    const shareText = `Concluí a Iniciação Eleusina! Sintonia Cósmica: ${gameData.affinity}% - Estado: ${elements.endingType.textContent}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Protocolo Eleus',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText);
        // Feedback visual
        const originalText = elements.shareBtn.innerHTML;
        elements.shareBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        elements.shareBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        
        setTimeout(() => {
            elements.shareBtn.innerHTML = originalText;
            elements.shareBtn.style.background = '';
        }, 2000);
    }
});

// ===== CSS DINÂMICO PARA PARTÍCULAS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% { 
            transform: translate(0, 0); 
            opacity: 0.3;
        }
        25% { 
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); 
        }
        50% { 
            opacity: 0.8;
        }
        75% { 
            transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); 
        }
    }
    
    .message.player .message-avatar i {
        color: #81d4fa;
        font-size: 18px;
    }
    
    .message.player .message-content {
        background: rgba(52, 152, 219, 0.2);
        border: 1px solid rgba(52, 152, 219, 0.4);
    }
    
    .message.player .time {
        color: #81d4fa;
        font-family: 'Orbitron', monospace;
    }
`;
document.head.appendChild(style);

// ===== INICIAR O JOGO =====
document.addEventListener('DOMContentLoaded', () => {
    // Pequeno delay para efeito de entrada
    setTimeout(initGame, 500);
});
