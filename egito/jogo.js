
        // --- 1. DEFINIÇÃO DAS FIGURINHAS (SVG CORES E DETALHES) ---
        // SVGs das 10 figurinhas criados sob medida para garantir alta fidelidade visual
        const FIGURINHAS = [
            {
                id: 'taca',
                color: 'from-yellow-500/30 to-amber-600/30 border-yellow-500',
                name: 'Taça do Mundo',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_4px_6px_rgba(234,179,8,0.3)]">
                        <!-- Base da Taça -->
                        <path d="M22 52h20v4H22z" fill="#D97706"/>
                        <path d="M24 48h16v4H24z" fill="#F59E0B"/>
                        <rect x="28" y="38" width="8" height="10" rx="2" fill="#10B981"/>
                        <path d="M26 38h12l-2-12H28z" fill="#F59E0B"/>
                        <!-- Globo e Asas -->
                        <circle cx="32" cy="20" r="12" fill="#3B82F6"/>
                        <path d="M32 8c6.627 0 12 5.373 12 12S38.627 32 32 32" fill="#60A5FA" opacity="0.3"/>
                        <path d="M16 18c0 10 10 16 16 16s16-6 16-16c0-6-4-10-4-10H20s-4 4-4 10z" fill="#FBBF24" fill-opacity="0.9"/>
                        <!-- Detalhes de Ouro -->
                        <circle cx="32" cy="20" r="8" fill="#FBBF24"/>
                        <path d="M30 40h4v8h-4z" fill="#FEF08A"/>
                        <circle cx="32" cy="18" r="3" fill="#FEF08A"/>
                    </svg>
                `
            },
            {
                id: 'bola',
                color: 'from-slate-100/10 to-slate-400/20 border-slate-300',
                name: 'Bola Oficial',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <circle cx="32" cy="32" r="26" fill="#F8FAFC" stroke="#0F172A" stroke-width="2"/>
                        <!-- Gomos da Bola de Futebol Clássica -->
                        <path d="M32 18l-8 6v10l8 6 8-6V24z" fill="#0F172A"/>
                        <path d="M32 6v12M24 24l-12-4M40 24l12-4M32 46v12M24 34l-12 4M40 34l12 4" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>
                        <path d="M12 20l4-10M52 20l-4-10M12 38l4 10M52 38l-4 10" stroke="#0F172A" stroke-width="2"/>
                    </svg>
                `
            },
            {
                id: 'chuteira',
                color: 'from-amber-400/20 to-yellow-600/30 border-amber-400',
                name: 'Chuteira de Ouro',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Chuteira -->
                        <path d="M12 40c4-12 12-16 22-16s18 4 20 8l-2 10H14l-2-2z" fill="#F59E0B"/>
                        <path d="M34 24c4-6 10-8 12-4s0 10-2 12" fill="#D97706"/>
                        <!-- Solado e Travas -->
                        <path d="M12 42h40v3H12z" fill="#1E293B"/>
                        <rect x="16" y="45" width="4" height="4" rx="1" fill="#F59E0B"/>
                        <rect x="26" y="45" width="4" height="4" rx="1" fill="#F59E0B"/>
                        <rect x="38" y="45" width="4" height="4" rx="1" fill="#F59E0B"/>
                        <rect x="46" y="45" width="4" height="4" rx="1" fill="#F59E0B"/>
                        <!-- Detalhes de brilho/cadarço -->
                        <path d="M34 28l-4 4M38 26l-4 4" stroke="#FFF" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="48" cy="32" r="2" fill="#FFF"/>
                    </svg>
                `
            },
            {
                id: 'apito',
                color: 'from-cyan-500/20 to-blue-600/20 border-cyan-400',
                name: 'Apito do Árbitro',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Corpo do Apito -->
                        <path d="M16 24h24v16H16z" fill="#94A3B8"/>
                        <path d="M40 24h12l4 6-4 10H40V24z" fill="#CBD5E1"/>
                        <circle cx="24" cy="32" r="10" fill="#64748B"/>
                        <!-- Alça -->
                        <circle cx="12" cy="32" r="6" fill="none" stroke="#64748B" stroke-width="4"/>
                        <!-- Saída de Ar -->
                        <rect x="44" y="20" width="6" height="4" fill="#1E293B"/>
                    </svg>
                `
            },
            {
                id: 'cartoes',
                color: 'from-rose-500/20 to-red-600/30 border-red-500',
                name: 'Cartões',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Cartão Amarelo (Fundo) -->
                        <rect x="14" y="16" width="22" height="34" rx="4" transform="rotate(-15 25 33)" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5"/>
                        <!-- Cartão Vermelho (Frente) -->
                        <rect x="28" y="14" width="22" height="34" rx="4" transform="rotate(10 39 31)" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5"/>
                    </svg>
                `
            },
            {
                id: 'luva',
                color: 'from-emerald-500/20 to-teal-600/20 border-emerald-400',
                name: 'Luva de Goleiro',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Palma e Dedos -->
                        <path d="M22 48V28c0-3 3-5 5-5s5 2 5 5v16h2V20c0-3 3-5 5-5s5 2 5 5v24h2V22c0-3 3-5 5-5s5 2 5 5v26c0 6-6 10-12 10H28c-6 0-6-4-6-10z" fill="#10B981"/>
                        <!-- Polegar -->
                        <path d="M22 34c-4-1-6-4-5-7s5-3 7-1c1 1 2 3 2 5v3z" fill="#059669"/>
                        <!-- Punho -->
                        <rect x="26" y="48" width="20" height="8" rx="2" fill="#047857"/>
                        <!-- Detalhe de Fecho -->
                        <rect x="28" y="50" width="16" height="4" fill="#FACC15"/>
                    </svg>
                `
            },
            {
                id: 'camisa',
                color: 'from-yellow-400/20 to-green-600/20 border-yellow-400',
                name: 'Camisa 10',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Mangas e Corpo -->
                        <path d="M12 20l8-4 6 6v30h-16V22l-6-2 8-10z" fill="#FACC15"/>
                        <path d="M52 20l-8-4-6 6v30h16V22l6-2-8-10z" fill="#FACC15"/>
                        <path d="M20 16h24v36H20V16z" fill="#FACC15"/>
                        <!-- Gola e Detalhes Verdes -->
                        <path d="M28 16c0 3 4 5 4 5s4-2 4-5H28z" fill="#22C55E"/>
                        <path d="M12 20l2 4M52 20l-2 4" stroke="#22C55E" stroke-width="2"/>
                        <!-- Número 10 -->
                        <text x="32" y="42" font-family="monospace, sans-serif" font-weight="900" font-size="20" fill="#22C55E" text-anchor="middle">10</text>
                    </svg>
                `
            },
            {
                id: 'estadio',
                color: 'from-violet-500/20 to-fuchsia-600/20 border-violet-400',
                name: 'Estádio',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Gramado Interno -->
                        <ellipse cx="32" cy="36" rx="20" ry="10" fill="#22C55E"/>
                        <!-- Arquibancadas Exteriores -->
                        <ellipse cx="32" cy="32" rx="26" ry="14" fill="none" stroke="#8B5CF6" stroke-width="4"/>
                        <ellipse cx="32" cy="30" rx="28" ry="16" fill="none" stroke="#A78BFA" stroke-width="2"/>
                        <!-- Pilares e Luzes -->
                        <line x1="12" y1="20" x2="16" y2="30" stroke="#DDD" stroke-width="2"/>
                        <line x1="52" y1="20" x2="48" y2="30" stroke="#DDD" stroke-width="2"/>
                        <circle cx="12" cy="20" r="4" fill="#FDE047"/>
                        <circle cx="52" cy="20" r="4" fill="#FDE047"/>
                        <!-- Linhas de Campo básicas -->
                        <ellipse cx="32" cy="36" rx="8" ry="4" fill="none" stroke="#FFF" stroke-width="1"/>
                    </svg>
                `
            },
            {
                id: 'medalha',
                color: 'from-amber-500/20 to-yellow-500/20 border-yellow-300',
                name: 'Medalha de Ouro',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Fita -->
                        <path d="M22 8l10 18 10-18h-6L32 18 28 8z" fill="#EF4444"/>
                        <path d="M26 8l6 11 6-11z" fill="#3B82F6"/>
                        <!-- Medalha -->
                        <circle cx="32" cy="38" r="14" fill="#F59E0B" stroke="#D97706" stroke-width="2"/>
                        <circle cx="32" cy="38" r="10" fill="#FBBF24"/>
                        <!-- Estrela no Centro -->
                        <path d="M32 32l2 4 4.5.5-3.5 3 1 4.5-4-2.5-4 2.5 1-4.5-3.5-3 4.5-.5z" fill="#FFF"/>
                    </svg>
                `
            },
            {
                id: 'bandeira',
                color: 'from-orange-500/20 to-red-600/20 border-orange-400',
                name: 'Bandeira',
                svg: `
                    <svg viewBox="0 0 64 64" class="w-12 h-12 md:w-16 md:h-16">
                        <!-- Mastro -->
                        <rect x="20" y="10" width="3" height="44" rx="1" fill="#94A3B8"/>
                        <!-- Bandeira Quadriculada (Árbitro Assistente) -->
                        <path d="M23 12h24v16H23z" fill="#EF4444"/>
                        <path d="M23 12h12v8H23zm12 8h12v8H35z" fill="#FACC15"/>
                        <!-- Detalhe da ponta do mastro -->
                        <circle cx="21.5" cy="10" r="2.5" fill="#F59E0B"/>
                    </svg>
                `
            }
        ];

        // --- 2. CONFIGURAÇÃO DE AUDIO (SINTETIZADO COM WEB AUDIO API) ---
        // Permite efeitos sonoros incríveis sem depender de arquivos de áudio externos
        class SoundFX {
            constructor() {
                this.ctx = null;
            }

            init() {
                if (!this.ctx) {
                    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                }
            }

            playFlip() {
                this.init();
                if (!this.ctx) return;
                let osc = this.ctx.createOscillator();
                let gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(150, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
                
                gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.1);
            }

            playMatch() {
                this.init();
                if (!this.ctx) return;
                let osc = this.ctx.createOscillator();
                let gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(300, this.ctx.currentTime);
                osc.frequency.setValueAtTime(450, this.ctx.currentTime + 0.08);
                osc.frequency.setValueAtTime(600, this.ctx.currentTime + 0.16);
                
                gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.3);
            }

            playMismatch() {
                this.init();
                if (!this.ctx) return;
                let osc = this.ctx.createOscillator();
                let gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, this.ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.25);
                
                gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.25);
            }

            playWin() {
                this.init();
                if (!this.ctx) return;
                const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // Acorde Maior Feliz
                notes.forEach((freq, idx) => {
                    let osc = this.ctx.createOscillator();
                    let gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);
                    
                    gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.1);
                    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.1 + 0.4);
                    
                    osc.start(this.ctx.currentTime + idx * 0.1);
                    osc.stop(this.ctx.currentTime + idx * 0.1 + 0.4);
                });
            }
        }

        const sfx = new SoundFX();

        // --- 3. ESTADOS DO JOGO ---
        let cards = [];
        let flippedCards = [];
        let matchedPairsCount = 0;
        let moves = 0;
        let timerInterval = null;
        let timeElapsed = 0; // em segundos
        let gameActive = false;
        let isChecking = false;

        // Referências do DOM
        const gameBoard = document.getElementById('game-board');
        const movesCountEl = document.getElementById('moves-count');
        const timerEl = document.getElementById('timer');
        const progressTextEl = document.getElementById('progress-text');
        const btnReset = document.getElementById('btn-reset');
        
        // Elementos do Modal de Vitória
        const winModal = document.getElementById('win-modal');
        const winModalContent = document.getElementById('win-modal-content');
        const finalMovesEl = document.getElementById('final-moves');
        const finalTimeEl = document.getElementById('final-time');
        const btnPlayAgain = document.getElementById('btn-play-again');

        // --- 4. FUNÇÕES DE CONTROLE DO TEMPO ---
        function startTimer() {
            stopTimer();
            timeElapsed = 0;
            timerEl.textContent = "00:00";
            timerInterval = setInterval(() => {
                timeElapsed++;
                const minutes = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
                const seconds = (timeElapsed % 60).toString().padStart(2, '0');
                timerEl.textContent = `${minutes}:${seconds}`;
            }, 1000);
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }

        // --- 5. INICIALIZAÇÃO E CRIAÇÃO DO TABULEIRO ---
        function initGame() {
            // Limpa estados
            stopTimer();
            gameBoard.innerHTML = '';
            flippedCards = [];
            matchedPairsCount = 0;
            moves = 0;
            timeElapsed = 0;
            gameActive = false;
            isChecking = false;
            
            // UI Resets
            movesCountEl.textContent = '0';
            timerEl.textContent = '00:00';
            progressTextEl.textContent = '0 / 10 pares';
            
            // Oculta modal se estiver aberto
            winModal.classList.add('opacity-0', 'pointer-events-none');
            winModalContent.classList.add('scale-90');

            // Duplica as 10 figurinhas para formar os 10 pares (total de 20 cartas)
            const deck = [...FIGURINHAS, ...FIGURINHAS].map((item, index) => ({
                ...item,
                uniqueId: index // ID único para controle individual no DOM
            }));

            // Embaralhamento robusto (Fisher-Yates)
            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }

            cards = deck;

            // Renderiza cartas no Grid
            cards.forEach(cardData => {
                const cardElement = createCardElement(cardData);
                gameBoard.appendChild(cardElement);
            });
        }

        // Cria o elemento HTML com efeito de flip 3D para cada figurinha
        function createCardElement(cardData) {
            const container = document.createElement('div');
            container.className = 'perspective aspect-[3/4] w-full cursor-pointer relative group';
            container.dataset.id = cardData.id;
            container.dataset.uniqueId = cardData.uniqueId;

            container.innerHTML = `
                <div class="card-inner w-full h-full relative rounded-2xl shadow-md transition-all duration-500 border border-slate-700/60 bg-slate-800">
                    <!-- Verso da Carta (Escondido / Tema Copa do Mundo) -->
                    <div class="card-face card-back absolute inset-0 w-full h-full rounded-2xl flex flex-col items-center justify-between p-2 text-center border-2 border-slate-700 select-none">
                        <div class="text-xs font-black tracking-widest text-yellow-500/60 uppercase">COPA</div>
                        <div class="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-85 transition-transform duration-300 group-hover:scale-110">
                            <!-- Ícone central do verso da figurinha -->
                            <svg viewBox="0 0 64 64" class="w-full h-full fill-yellow-500/80">
                                <circle cx="32" cy="32" r="28" fill="none" stroke="#EAB308" stroke-dasharray="4 4" stroke-width="2"/>
                                <path d="M32 18l-8 6v10l8 6 8-6V24z"/>
                            </svg>
                        </div>
                        <div class="text-[10px] font-bold text-slate-400">FIGURINHA</div>
                    </div>
                    <!-- Frente da Carta (Figurinha Revelada) -->
                    <div class="card-face card-front absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${cardData.color} border-2 flex flex-col items-center justify-between p-2 text-center select-none">
                        <div class="text-[9px] font-black uppercase text-amber-400 tracking-widest bg-slate-900/60 px-2 py-0.5 rounded-full border border-yellow-500/20">Lendário</div>
                        <div class="flex-grow flex items-center justify-center my-1">
                            ${cardData.svg}
                        </div>
                        <div class="text-[10px] md:text-xs font-extrabold text-white tracking-wide truncate w-full px-1 drop-shadow-sm bg-slate-950/40 rounded py-0.5">
                            ${cardData.name}
                        </div>
                    </div>
                </div>
            `;

            // Adiciona evento de clique na carta
            container.addEventListener('click', () => handleCardClick(container));

            return container;
        }

        // --- 6. LÓGICA DE JOGADA ---
        function handleCardClick(cardElement) {
            // Evita interações inválidas
            if (isChecking) return;
            
            const cardInner = cardElement.querySelector('.card-inner');
            
            // Verifica se a carta já está revelada ou combinada
            if (cardInner.classList.contains('card-flipped') || cardElement.dataset.matched === 'true') {
                return;
            }

            // Ativa o áudio no primeiro clique do usuário (necessário por políticas dos navegadores)
            sfx.init();

            // Inicia o timer na primeira jogada
            if (!gameActive) {
                gameActive = true;
                startTimer();
            }

            // Toca som de rotação
            sfx.playFlip();

            // Vira a carta
            cardInner.classList.add('card-flipped');
            flippedCards.push(cardElement);

            // Verifica se um par foi selecionado
            if (flippedCards.length === 2) {
                isChecking = true;
                moves++;
                movesCountEl.textContent = moves;
                checkMatch();
            }
        }

        // Confere se as duas cartas selecionadas são iguais
        function checkMatch() {
            const [card1, card2] = flippedCards;
            const id1 = card1.dataset.id;
            const id2 = card2.dataset.id;

            if (id1 === id2) {
                // SUCESSO: Par Encontrado!
                setTimeout(() => {
                    card1.dataset.matched = 'true';
                    card2.dataset.matched = 'true';
                    
                    const inner1 = card1.querySelector('.card-inner');
                    const inner2 = card2.querySelector('.card-inner');

                    // Adiciona animação de acerto
                    inner1.classList.add('matched-animation');
                    inner2.classList.add('matched-animation');

                    sfx.playMatch();

                    matchedPairsCount++;
                    progressTextEl.textContent = `${matchedPairsCount} / 10 pares`;

                    // Verifica vitória
                    if (matchedPairsCount === 10) {
                        endGame();
                    }

                    flippedCards = [];
                    isChecking = false;
                }, 400);
            } else {
                // ERRO: Cartas Diferentes
                setTimeout(() => {
                    const inner1 = card1.querySelector('.card-inner');
                    const inner2 = card2.querySelector('.card-inner');

                    // Aplica tremidinha de erro
                    inner1.classList.add('error-animation');
                    inner2.classList.add('error-animation');
                    
                    sfx.playMismatch();

                    // Remove tremido e desvira as cartas após pequena pausa
                    setTimeout(() => {
                        inner1.classList.remove('card-flipped', 'error-animation');
                        inner2.classList.remove('card-flipped', 'error-animation');
                        flippedCards = [];
                        isChecking = false;
                    }, 600);
                }, 400);
            }
        }

        // --- 7. TELA DE VITÓRIA ---
        function endGame() {
            stopTimer();
            sfx.playWin();

            // Atualiza estatísticas do Modal
            finalMovesEl.textContent = moves;
            finalTimeEl.textContent = timerEl.textContent;

            // Mostra o Modal de Vitória com animação de escala suave
            setTimeout(() => {
                winModal.classList.remove('opacity-0', 'pointer-events-none');
                winModalContent.classList.remove('scale-90');
                winModalContent.classList.add('scale-100');
            }, 600);
        }

        // --- 8. CAPTURA DE EVENTOS (LISTENERS) ---
        btnReset.addEventListener('click', () => {
            initGame();
        });

        btnPlayAgain.addEventListener('click', () => {
            initGame();
        });

        // Inicia o jogo automaticamente ao carregar a página
        window.addEventListener('DOMContentLoaded', () => {
            initGame();
        });
    
