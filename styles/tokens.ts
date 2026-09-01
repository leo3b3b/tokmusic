// ═══════════════════════════════════════════════════════════════
//  NEOWAVE — Design Tokens
//  Fonte única de verdade para todas as decisões de design.
//  Importe { Colors, Typography, Spacing, ... } onde precisar.
// ═══════════════════════════════════════════════════════════════

import { TextStyle, ViewStyle } from 'react-native';

// ─── CORES ────────────────────────────────────────────────────
export const Colors = {
  // Brand palette
  lime: '#CEEC97',
  peach: '#F4B393',
  pink: '#FC60A8',
  deep: '#494368',

  // Backgrounds (do mais escuro para o mais claro)
  bg: {
    base: '#0f0d1a',              // fundo raiz do app
    surface: '#1a172b',              // telas / screens
    card: '#241f3a',              // cards, modais
    elevated: '#302a4a',              // navbar, bottom nav, itens elevados
    overlay: 'rgba(15,13,26,0.85)',  // overlay para modais
  },

  // Bordas — todas derivadas do pink ou lime da brand palette
  border: {
    subtle: 'rgba(252,96,168,0.12)',
    default: 'rgba(252,96,168,0.25)',
    strong: 'rgba(252,96,168,0.50)',
    lime: 'rgba(206,236,151,0.20)',
  },

  // Texto
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255,255,255,0.60)',
    muted: 'rgba(255,255,255,0.30)',
    inverse: '#0f0d1a',
    lime: '#CEEC97',
    pink: '#FC60A8',
    peach: '#F4B393',
  },

  // Gradientes (use com LinearGradient do expo-linear-gradient)
  gradient: {
    brand: ['#FC60A8', '#494368'],
    lime: ['#CEEC97', '#3a6b4a'],
    peach: ['#F4B393', '#7a3a20'],
    deep: ['#494368', '#FC60A8'],
    card: ['#302a4a', '#1a172b'],
    hero: ['#494368', '#6b4f8a', '#302a4a'],
    surface: ['#241f3a', '#1a172b'],
  },

  // Glows / sombras coloridas
  glow: {
    pink: 'rgba(252,96,168,0.40)',
    lime: 'rgba(206,236,151,0.30)',
    peach: 'rgba(244,179,147,0.30)',
    deep: 'rgba(73,67,104,0.50)',
  },

  // Transparências do pink para estados (chip ativo, track ativo, etc.)
  pinkAlpha: {
    subtle: 'rgba(252,96,168,0.08)',
    soft: 'rgba(252,96,168,0.15)',
    medium: 'rgba(252,96,168,0.25)',
  },

  // Transparências do lime para estados
  limeAlpha: {
    subtle: 'rgba(206,236,151,0.08)',
    soft: 'rgba(206,236,151,0.12)',
    medium: 'rgba(206,236,151,0.20)',
  },

  // Transparências brancas utilitárias
  whiteAlpha: {
    w5: 'rgba(255,255,255,0.05)',
    w8: 'rgba(255,255,255,0.08)',
    w12: 'rgba(255,255,255,0.12)',
    w20: 'rgba(255,255,255,0.20)',
    w40: 'rgba(255,255,255,0.40)',
    w60: 'rgba(255,255,255,0.60)',
  },

  // Status — mapeados para brand palette; sem cor extra
  status: {
    success: '#CEEC97',  // lime
    warning: '#F4B393',  // peach
    error: '#FC60A8',  // pink
    info: '#494368',  // deep
  },
};

// ─── TIPOGRAFIA ───────────────────────────────────────────────
export const Typography = {
  family: {
    display: 'Orbitron-Bold',  // títulos, logo, labels de destaque
    body: 'Rajdhani-Regular',  // textos correntes, listas, botões
    mono: 'monospace', // timestamps, códigos
  },

  size: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    xxxl: 34,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },

  tracking: {
    tight: -0.5,
    normal: 0,
    wide: 1,
    wider: 2,
    widest: 3,
  },

  // Estilos prontos — referencia tokens acima em vez de hardcode
  styles: {
    logo: {
      fontFamily: 'Orbitron-Black',
      fontSize: 18,
      letterSpacing: 3,
    } as TextStyle,

    h1: {
      fontFamily: 'Orbitron-Bold',
      fontSize: 28,
      letterSpacing: 1,
      color: '#FFFFFF',
    } as TextStyle,

    h2: {
      fontFamily: 'Orbitron-Bold',
      fontSize: 20,
      letterSpacing: 0.5,
      color: '#FFFFFF',
    } as TextStyle,

    h3: {
      fontFamily: 'Orbitron-Bold',
      fontSize: 16,
      color: '#FFFFFF',
    } as TextStyle,

    label: {
      fontFamily: 'Orbitron-Regular',
      fontSize: 10,
      letterSpacing: 3,
      textTransform: 'uppercase',
      color: '#CEEC97',
    } as TextStyle,

    body: {
      fontFamily: 'Rajdhani-Regular',
      fontSize: 14,
      color: 'rgba(255,255,255,0.60)',
    } as TextStyle,

    bodyStrong: {
      fontFamily: 'Rajdhani-SemiBold',
      fontSize: 14,
      color: '#FFFFFF',
    } as TextStyle,

    caption: {
      fontFamily: 'Rajdhani-Regular',
      fontSize: 12,
      color: 'rgba(255,255,255,0.40)',
    } as TextStyle,

    mono: {
      fontFamily: 'monospace',
      fontSize: 11,
      color: 'rgba(255,255,255,0.40)',
    } as TextStyle,

    button: {
      fontFamily: 'Rajdhani-SemiBold',
      fontSize: 14,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    } as TextStyle,
  },
};

// ─── ESPAÇAMENTO ──────────────────────────────────────────────
// Apenas aliases semânticos — sem chaves numéricas
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,

  // Específicos do app
  screenPaddingH: 20,
  screenPaddingV: 24,
  navbarHeight: 56,
  bottomNavHeight: 80,
  cardPadding: 16,
  listItemPaddingV: 10,
  sectionGap: 20,
};

// ─── BORDAS & RAIOS ───────────────────────────────────────────
export const Radius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 10,
  lg: 14,
  xl: 20,
  xxl: 28,
  full: 9999,

  // Aliases semânticos
  button: 10,
  card: 14,
  chip: 20,
  input: 10,
  modal: 20,
  thumb: 8,
};

// ─── SOMBRAS ──────────────────────────────────────────────────
export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  } as ViewStyle,
  sm: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  } as ViewStyle,
  md: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  } as ViewStyle,
  lg: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 12,
  } as ViewStyle,
  glow: {
    shadowColor: '#FC60A8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.60,
    shadowRadius: 20,
    elevation: 10,
  } as ViewStyle,
  glowLime: {
    shadowColor: '#CEEC97',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.50,
    shadowRadius: 16,
    elevation: 8,
  } as ViewStyle,
};

// ─── TAMANHOS FIXOS ───────────────────────────────────────────
export const Size = {
  thumbSm: 36,
  thumb: 44,
  thumbLg: 56,
  thumbXl: 64,

  playerArt: 220,
  playerArtSm: 160,

  iconSm: 16,
  icon: 20,
  iconLg: 24,
  iconXl: 32,

  btnHeight: 44,
  btnHeightSm: 36,
  btnHeightLg: 52,

  ctrlBtn: 44,
  ctrlPlay: 62,
};

// ─── ANIMAÇÕES ────────────────────────────────────────────────
export const Motion = {
  duration: {
    instant: 100,
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 800,
  },
};

// ─── Z-INDEX ──────────────────────────────────────────────────
export const ZIndex = {
  base: 0,
  card: 10,
  navbar: 100,
  overlay: 200,
  modal: 300,
  toast: 400,
};