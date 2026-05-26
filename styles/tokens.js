// ═══════════════════════════════════════════════════════════════
//  NEOWAVE — Design Tokens
//  Fonte única de verdade para todas as decisões de design.
//  Importe { Colors, Typography, Spacing, ... } onde precisar.
// ═══════════════════════════════════════════════════════════════

// ─── CORES ───────────────────────────────────────────────────
export const Colors = {
  // Brand palette
  lime:  '#CEEC97',
  peach: '#F4B393',
  pink:  '#FC60A8',
  deep:  '#494368',

  // Backgrounds (do mais escuro para o mais claro)
  bg: {
    base:    '#0f0d1a',   // fundo raiz do app
    surface: '#1a172b',   // telas / screens
    card:    '#241f3a',   // cards, modais
    elevated:'#302a4a',   // navbar, bottom nav, itens elevados
    overlay: 'rgba(15,13,26,0.85)', // overlay para modais
  },

  // Bordas
  border: {
    subtle:  'rgba(252,96,168,0.12)',
    default: 'rgba(252,96,168,0.25)',
    strong:  'rgba(252,96,168,0.50)',
    lime:    'rgba(206,236,151,0.20)',
  },

  // Texto
  text: {
    primary:   '#FFFFFF',
    secondary: 'rgba(255,255,255,0.60)',
    muted:     'rgba(255,255,255,0.30)',
    inverse:   '#0f0d1a',
    lime:      '#CEEC97',
    pink:      '#FC60A8',
    peach:     '#F4B393',
  },

  // Gradientes (use com LinearGradient do expo-linear-gradient)
  gradient: {
    brand:    ['#FC60A8', '#494368'],
    lime:     ['#CEEC97', '#3a6b4a'],
    peach:    ['#F4B393', '#7a3a20'],
    deep:     ['#494368', '#FC60A8'],
    card:     ['#302a4a', '#1a172b'],
    hero:     ['#494368', '#6b4f8a', '#302a4a'],
    surface:  ['#241f3a', '#1a172b'],
  },

  // Glows / shadows coloridas
  glow: {
    pink:  'rgba(252,96,168,0.40)',
    lime:  'rgba(206,236,151,0.30)',
    peach: 'rgba(244,179,147,0.30)',
    deep:  'rgba(73,67,104,0.50)',
  },

  // Status
  status: {
    success: '#CEEC97',
    warning: '#F4B393',
    error:   '#FC60A8',
    info:    '#a78bfa',
  },

  // Transparências utilitárias
  white: {
    5:  'rgba(255,255,255,0.05)',
    8:  'rgba(255,255,255,0.08)',
    12: 'rgba(255,255,255,0.12)',
    20: 'rgba(255,255,255,0.20)',
    40: 'rgba(255,255,255,0.40)',
    60: 'rgba(255,255,255,0.60)',
  },
};

// ─── TIPOGRAFIA ───────────────────────────────────────────────
// Fontes recomendadas: Orbitron (display) + Rajdhani (body)
// Instale via expo-font ou @expo-google-fonts/orbitron
export const Typography = {
  family: {
    display: 'Orbitron',   // títulos, logo, labels de destaque
    body:    'Rajdhani',   // textos correntes, listas, botões
    mono:    'monospace',  // timestamps, códigos
  },

  weight: {
    light:    '300',
    regular:  '400',
    semibold: '600',
    bold:     '700',
    black:    '900',
  },

  // Escala tipográfica (em px / dp)
  size: {
    xs:   10,
    sm:   12,
    base: 14,
    md:   16,
    lg:   18,
    xl:   22,
    '2xl':28,
    '3xl':34,
    '4xl':42,
  },

  // Line heights
  lineHeight: {
    tight:  1.2,
    normal: 1.5,
    relaxed:1.75,
  },

  // Letter spacing
  tracking: {
    tight:  -0.5,
    normal:  0,
    wide:    1,
    wider:   2,
    widest:  3,
  },

  // Estilos prontos para uso direto no StyleSheet
  styles: {
    logo: {
      fontFamily: 'Orbitron',
      fontSize: 18,
      fontWeight: '900',
      letterSpacing: 3,
    },
    h1: {
      fontFamily: 'Orbitron',
      fontSize: 28,
      fontWeight: '700',
      letterSpacing: 1,
      color: '#FFFFFF',
    },
    h2: {
      fontFamily: 'Orbitron',
      fontSize: 20,
      fontWeight: '700',
      letterSpacing: 0.5,
      color: '#FFFFFF',
    },
    h3: {
      fontFamily: 'Orbitron',
      fontSize: 16,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    label: {
      fontFamily: 'Orbitron',
      fontSize: 10,
      fontWeight: '400',
      letterSpacing: 3,
      textTransform: 'uppercase',
      color: '#CEEC97',
    },
    body: {
      fontFamily: 'Rajdhani',
      fontSize: 14,
      fontWeight: '400',
      color: 'rgba(255,255,255,0.60)',
    },
    bodyStrong: {
      fontFamily: 'Rajdhani',
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    caption: {
      fontFamily: 'Rajdhani',
      fontSize: 12,
      fontWeight: '400',
      color: 'rgba(255,255,255,0.40)',
    },
    mono: {
      fontFamily: 'monospace',
      fontSize: 11,
      color: 'rgba(255,255,255,0.40)',
    },
    button: {
      fontFamily: 'Rajdhani',
      fontSize: 14,
      fontWeight: '600',
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },
  },
};

// ─── ESPAÇAMENTO ──────────────────────────────────────────────
// Base-8 system (múltiplos de 4 e 8)
export const Spacing = {
  0:   0,
  1:   4,
  2:   8,
  3:   12,
  4:   16,
  5:   20,
  6:   24,
  7:   28,
  8:   32,
  10:  40,
  12:  48,
  16:  64,
  20:  80,

  // Aliases semânticos
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  '2xl': 48,
  '3xl': 64,

  // Específicos do app
  screenPaddingH:  20,  // padding horizontal das telas
  screenPaddingV:  24,  // padding vertical das telas
  navbarHeight:    56,
  bottomNavHeight: 64,
  cardPadding:     16,
  listItemPaddingV:10,
  sectionGap:      20,
};

// ─── BORDAS & RAIOS ───────────────────────────────────────────
export const Radius = {
  none: 0,
  xs:   4,
  sm:   8,
  md:   10,
  lg:   14,
  xl:   20,
  '2xl':28,
  full: 9999,  // círculos e pílulas

  // Aliases semânticos
  button:  10,
  card:    14,
  avatar:  9999,
  chip:    20,
  input:   10,
  modal:   20,
  thumb:   8,   // miniaturas de track
};

// ─── SOMBRAS ──────────────────────────────────────────────────
// No React Native, shadowColor + shadowOffset + elevation
export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  md: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  lg: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 12,
  },
  glow: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.60,
    shadowRadius: 20,
    elevation: 10,
  },
  glowLime: {
    shadowColor: '#CEEC97',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.50,
    shadowRadius: 16,
    elevation: 8,
  },
};

// ─── TAMANHOS FIXOS ───────────────────────────────────────────
export const Size = {
  // Avatares / thumbnails
  thumbSm:  36,
  thumb:    44,
  thumbLg:  56,
  thumbXl:  64,

  // Player
  playerArt:    220,
  playerArtSm:  160,

  // Ícones
  iconSm:  16,
  icon:    20,
  iconLg:  24,
  iconXl:  32,

  // Botões
  btnHeight:   44,   // altura mínima touch target
  btnHeightSm: 36,
  btnHeightLg: 52,

  // Controles do player
  ctrlBtn:  44,
  ctrlPlay: 62,
};

// ─── ANIMAÇÕES ────────────────────────────────────────────────
// Para usar com Animated.timing() ou Reanimated
export const Motion = {
  duration: {
    instant:   100,
    fast:      200,
    normal:    300,
    slow:      500,
    verySlow:  800,
  },
  easing: {
    // Strings para Easing do React Native
    // Easing.out(Easing.cubic) → saída suave
    // Easing.inOut(Easing.ease) → entrada e saída suaves
    standard: 'ease-in-out',
    enter:    'ease-out',
    exit:     'ease-in',
    spring:   'spring',   // use Animated.spring()
  },
};

// ─── Z-INDEX ──────────────────────────────────────────────────
export const ZIndex = {
  base:    0,
  card:    10,
  navbar:  100,
  overlay: 200,
  modal:   300,
  toast:   400,
};

// ─── BREAKPOINTS (para tablets / landscape) ───────────────────
export const Breakpoints = {
  phone:  0,
  tablet: 768,
};
