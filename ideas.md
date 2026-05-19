# Brainstorm de Design — Memória do Poder Judiciário Catarinense

## Contexto
Reformulação completa do site de Memória do TJSC, inspirado no estilo de galeria de arte (Van de Weghe Fine Art). O objetivo é criar uma experiência imersiva, visualmente sofisticada, que destaque o museu, o acervo histórico e a narrativa institucional, relegando aspectos administrativos a segundo plano.

---

<response>
<text>

## Ideia 1: "Galeria Negra" — Brutalismo Tipográfico em Fundo Escuro

**Design Movement**: Brutalismo Tipográfico + Galeria de Arte Contemporânea (inspiração direta no Van de Weghe)

**Core Principles**:
1. Fundo negro absoluto como "moldura" para o conteúdo histórico
2. Tipografia como elemento escultórico — letras grandes, espaçadas, em caixa alta
3. Imagens como "obras expostas" — reveladas por interação, nunca decorativas
4. Silêncio visual — espaço negativo abundante para criar reverência

**Color Philosophy**: Negro (#000) como base de reverência e solenidade institucional. Branco puro (#fff) para tipografia primária. Dourado antigo (oklch 0.72 0.12 75) como acento de nobreza — usado apenas em linhas divisórias e hover states. Sépia (oklch 0.55 0.08 60) para elementos fotográficos e transições.

**Layout Paradigm**: Layout de "exposição linear" — scroll vertical contínuo com seções full-bleed. Cada seção é uma "sala" do museu. Navegação lateral fixa com indicadores de posição. Imagens ocupam 80%+ da viewport quando reveladas.

**Signature Elements**:
1. Linhas douradas finas (1px) que se expandem no scroll como divisores de "salas"
2. Tipografia que "emerge" do fundo negro com animação de opacidade
3. Cursor personalizado circular que revela preview de imagens ao passar sobre links

**Interaction Philosophy**: Movimentos lentos e deliberados. Hover revela conteúdo como "abrir uma gaveta de arquivo". Transições de 400-600ms com easing suave. Scroll hijacking sutil para criar pausas entre seções.

**Animation**: Fade-in de elementos com delay escalonado (stagger 80ms). Parallax sutil em imagens de fundo. Linhas douradas que crescem horizontalmente ao entrar na viewport. Tipografia que desliza 20px de baixo para cima ao aparecer.

**Typography System**: 
- Display: "Playfair Display" (serif clássica) — títulos em 72-120px, letter-spacing 0.15em, uppercase
- Body: "IBM Plex Mono" — textos em 14-16px, letter-spacing 0.02em
- Accent: "Cormorant Garamond" — citações e destaques em itálico, 24-36px

</text>
<probability>0.08</probability>
</response>

---

<response>
<text>

## Ideia 2: "Arquivo Vivo" — Editorial Assimétrico com Camadas Temporais

**Design Movement**: Design Editorial Suíço + Narrativa Documental (inspiração em revistas de museu como Aperture e publicações do MoMA)

**Core Principles**:
1. Grid assimétrico que simula a disposição de documentos sobre uma mesa de pesquisa
2. Camadas visuais que representam camadas temporais — passado e presente coexistem
3. Fotografia como protagonista — imagens em escala generosa com tratamento sépia/duotone
4. Navegação por "descoberta" — conteúdo se revela progressivamente

**Color Philosophy**: Fundo em papel envelhecido (oklch 0.96 0.01 80) para evocar documentos antigos. Texto em grafite escuro (oklch 0.25 0.01 250) para legibilidade sem agressividade. Bordô institucional (oklch 0.40 0.15 15) como cor de autoridade e tradição. Dourado desbotado (oklch 0.75 0.10 80) para ornamentos.

**Layout Paradigm**: Grid editorial com 12 colunas desiguais. Imagens "sangram" para fora do grid. Texto em colunas estreitas (45-55 caracteres por linha). Sobreposições controladas entre texto e imagem. Seções com alturas variáveis criando ritmo irregular.

**Signature Elements**:
1. Molduras finas ao redor de imagens que simulam passepartout de quadros
2. Números de "inventário" discretos ao lado de cada item (como em museus)
3. Textura sutil de papel/linho no fundo que muda de tonalidade entre seções

**Interaction Philosophy**: Exploratória e curiosa. Elementos que se expandem ao clicar como "abrir um dossiê". Cards que rotacionam sutilmente ao hover (1-2 graus). Transições que simulam virar páginas de um livro antigo.

**Animation**: Elementos que entram em cena com movimento de "colocação na mesa" (scale 0.95 → 1.0 + translate Y). Imagens com efeito de revelação gradual (clip-path). Números de inventário que "datilografam" ao entrar na viewport. Parallax em múltiplas camadas para profundidade.

**Typography System**:
- Display: "DM Serif Display" — títulos em 48-96px, weight 400, tracking normal
- Body: "Source Serif 4" — textos em 17-19px, line-height 1.7
- UI/Nav: "Space Grotesk" — navegação em 12-14px, uppercase, letter-spacing 0.1em
- Accent: "Spectral" italic — citações e legendas em 20-28px

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Ideia 3: "Câmara do Tempo" — Imersão Cinematográfica com Scroll Narrativo

**Design Movement**: Storytelling Cinematográfico + Museografia Digital (inspiração em sites como National Geographic Immersive e Google Arts & Culture)

**Core Principles**:
1. Narrativa temporal como fio condutor — o scroll é uma viagem no tempo
2. Imagens em escala monumental — full-viewport, com tratamento fotográfico sofisticado
3. Transições entre épocas marcadas por mudanças de paleta e textura
4. Conteúdo administrativo completamente oculto — acessível apenas via menu secundário

**Color Philosophy**: Sistema de cores que evolui com o tempo narrativo: período colonial (sépia profundo oklch 0.45 0.08 55), período republicano (cinza azulado oklch 0.35 0.03 250), período moderno (preto com acentos em azul institucional oklch 0.55 0.18 250). Transições graduais entre paletas durante o scroll.

**Layout Paradigm**: Full-bleed vertical com seções de 100vh. Texto posicionado em overlays sobre imagens com gradientes de proteção. Split-screen ocasional (imagem histórica à esquerda, contexto à direita). Timeline vertical como elemento de navegação persistente.

**Signature Elements**:
1. Timeline vertical lateral com marcadores de época que pulsa suavemente
2. Efeito de "revelação fotográfica" — imagens que aparecem como se fossem reveladas em câmara escura
3. Transições de cor de fundo que simulam passagem do tempo (sépia → P&B → cor)

**Interaction Philosophy**: Contemplativa e cinematográfica. Scroll suave com snap points em momentos-chave. Hover em imagens revela informações contextuais em overlay elegante. Navegação por timeline permite "saltar" entre épocas.

**Animation**: Ken Burns effect sutil em imagens de fundo (zoom lento 5% em 10s). Texto que aparece com typewriter effect para citações históricas. Transições de seção com crossfade de 800ms. Partículas sutis de "poeira" em seções mais antigas.

**Typography System**:
- Display: "Cormorant" — títulos monumentais em 80-140px, weight 300, tracking -0.02em
- Body: "Libre Baskerville" — textos em 18-20px, line-height 1.8, para leitura confortável
- UI: "Inter" weight 300 — navegação e labels em 11-13px, uppercase, letter-spacing 0.15em
- Dates: "JetBrains Mono" — datas e números em 14px, para precisão documental

</text>
<probability>0.04</probability>
</response>
