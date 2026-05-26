// ═══════════════════════════════════════════════════════════════
//  NEOWAVE — Global Styles
//  StyleSheet globais prontos para uso.
//  Importe { GlobalStyles as gs } e use gs.card, gs.btnPrimary, etc.
//
//  Uso:
//    import { GlobalStyles as gs } from '@/styles/styles';
//    <View style={gs.card}>...</View>
//    <Text style={gs.h2}>Título</Text>
// ═══════════════════════════════════════════════════════════════

import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadows, Size } from './tokens';

export const GlobalStyles = StyleSheet.create({

  // ─── LAYOUT & CONTAINERS ──────────────────────────────────

  // Tela principal
  screen: {
    flex: 1,
    backgroundColor: Colors.bg.base,
  },

  // Tela com padding horizontal padrão
  screenPadded: {
    flex: 1,
    backgroundColor: Colors.bg.base,
    paddingHorizontal: Spacing.screenPaddingH,
  },

  // Área de scroll
  scrollContent: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingBottom: Spacing.lg + Spacing.bottomNavHeight, // espaço para a navbar
  },

  // Container centralizado
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Row (flex horizontal)
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },

  // Separador
  separator: {
    height: 1,
    backgroundColor: Colors.border.subtle,
    marginVertical: Spacing.sm,
  },

  // ─── NAVBAR ───────────────────────────────────────────────

  navbar: {
    height: Spacing.navbarHeight,
    backgroundColor: Colors.bg.elevated,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPaddingH,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.subtle,
  },

  navLogo: {
    ...Typography.styles.logo,
    color: Colors.pink,      // cor base; aplique gradiente via MaskedView se quiser
  },

  // ─── BOTTOM NAV ───────────────────────────────────────────

  bottomNav: {
    height: Spacing.bottomNavHeight,
    backgroundColor: Colors.bg.elevated,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.border.subtle,
  },

  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  bottomNavLabel: {
    ...Typography.styles.caption,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.text.muted,
  },

  bottomNavLabelActive: {
    color: Colors.pink,
  },

  // ─── CARDS ────────────────────────────────────────────────

  // Card padrão
  card: {
    backgroundColor: Colors.bg.card,
    borderRadius: Radius.card,
    padding: Spacing.cardPadding,
    borderWidth: 1,
    borderColor: Colors.border.subtle,
    ...Shadows.sm,
  },

  // Card elevado (destaques, featured)
  cardElevated: {
    backgroundColor: Colors.bg.elevated,
    borderRadius: Radius.card,
    padding: Spacing.cardPadding,
    borderWidth: 1,
    borderColor: Colors.border.default,
    ...Shadows.md,
  },

  // Card hero (playlist header, banners)
  cardHero: {
    borderRadius: Radius.lg,
    padding: Spacing.screenPaddingH,
    borderWidth: 1,
    borderColor: Colors.border.lime,
    overflow: 'hidden',  // para gradiente e decorações
    ...Shadows.lg,
  },

  // ─── TIPOGRAFIA ───────────────────────────────────────────

  h1:         { ...Typography.styles.h1 },
  h2:         { ...Typography.styles.h2 },
  h3:         { ...Typography.styles.h3 },
  label:      { ...Typography.styles.label },
  body:       { ...Typography.styles.body },
  bodyStrong: { ...Typography.styles.bodyStrong },
  caption:    { ...Typography.styles.caption },
  mono:       { ...Typography.styles.mono },

  // Variações de cor
  textPrimary:   { color: Colors.text.primary },
  textSecondary: { color: Colors.text.secondary },
  textMuted:     { color: Colors.text.muted },
  textLime:      { color: Colors.text.lime },
  textPink:      { color: Colors.text.pink },
  textPeach:     { color: Colors.text.peach },

  // ─── BOTÕES ───────────────────────────────────────────────

  // Botão primário (pink sólido)
  btnPrimary: {
    height: Size.btnHeight,
    borderRadius: Radius.button,
    backgroundColor: Colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    ...Shadows.md,
  },

  btnPrimaryText: {
    ...Typography.styles.button,
    color: Colors.text.primary,
  },

  // Botão secundário (ghost)
  btnSecondary: {
    height: Size.btnHeight,
    borderRadius: Radius.button,
    backgroundColor: Colors.white[8],
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.white[20],
  },

  btnSecondaryText: {
    ...Typography.styles.button,
    color: Colors.text.secondary,
  },

  // Botão outline (lime)
  btnOutline: {
    height: Size.btnHeight,
    borderRadius: Radius.button,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.lime,
  },

  btnOutlineText: {
    ...Typography.styles.button,
    color: Colors.lime,
  },

  // Botão pequeno
  btnSm: {
    height: Size.btnHeightSm,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.md,
  },

  // Botão ícone circular
  btnIcon: {
    width: Size.ctrlBtn,
    height: Size.ctrlBtn,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Botão play principal do player
  btnPlay: {
    width: Size.ctrlPlay,
    height: Size.ctrlPlay,
    borderRadius: Radius.full,
    backgroundColor: Colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.glow,
  },

  // ─── CHIPS / TAGS / BADGES ────────────────────────────────

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingVertical: 5,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.chip,
    backgroundColor: Colors.white[8],
    borderWidth: 1,
    borderColor: Colors.border.subtle,
  },

  chipText: {
    ...Typography.styles.caption,
    fontSize: 11,
  },

  chipActive: {
    backgroundColor: 'rgba(252,96,168,0.15)',
    borderColor: Colors.border.default,
  },

  chipActiveText: {
    color: Colors.pink,
  },

  chipLime: {
    backgroundColor: 'rgba(206,236,151,0.12)',
    borderColor: Colors.border.lime,
  },

  chipLimeText: {
    color: Colors.lime,
    fontSize: 11,
  },

  badge: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: Radius.chip,
    backgroundColor: Colors.lime,
  },

  badgeText: {
    fontFamily: Typography.family.display,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1,
    color: Colors.text.inverse,
  },

  // ─── INPUTS ───────────────────────────────────────────────

  input: {
    height: Size.btnHeight,
    backgroundColor: Colors.bg.card,
    borderRadius: Radius.input,
    borderWidth: 1,
    borderColor: Colors.border.subtle,
    paddingHorizontal: Spacing.md,
    color: Colors.text.primary,
    fontFamily: Typography.family.body,
    fontSize: Typography.size.base,
  },

  inputFocused: {
    borderColor: Colors.border.default,
  },

  inputLabel: {
    ...Typography.styles.label,
    marginBottom: Spacing.xs,
  },

  // Barra de busca
  searchBar: {
    height: 40,
    backgroundColor: Colors.bg.card,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.border.subtle,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
  },

  // ─── TRACK ITEM (lista de músicas) ────────────────────────

  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.3,
    paddingVertical: Spacing.listItemPaddingV,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.subtle,
  },

  trackItemActive: {
    borderBottomColor: 'rgba(252,96,168,0.15)',
  },

  trackThumb: {
    width: Size.thumb,
    height: Size.thumb,
    borderRadius: Radius.thumb,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  trackInfo: {
    flex: 1,
    minWidth: 0,       // necessário para text ellipsis em flex
  },

  trackTitle: {
    ...Typography.styles.bodyStrong,
    fontSize: Typography.size.base,
  },

  trackArtist: {
    ...Typography.styles.caption,
    marginTop: 2,
  },

  trackDuration: {
    ...Typography.styles.mono,
    fontSize: 11,
  },

  trackNumber: {
    fontFamily: Typography.family.display,
    fontSize: 11,
    color: Colors.text.muted,
    width: 18,
    textAlign: 'center',
  },

  // ─── PLAYER ───────────────────────────────────────────────

  playerArt: {
    width: Size.playerArt,
    height: Size.playerArt,
    borderRadius: Radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.border.default,
    overflow: 'hidden',
    ...Shadows.glow,
  },

  playerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  playerControlBtn: {
    width: Size.ctrlBtn,
    height: Size.ctrlBtn,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Waveform bar (cada barra individual)
  waveBar: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: Colors.white[12],
  },

  waveBarPlayed: {
    backgroundColor: Colors.pink,
  },

  waveBarActive: {
    backgroundColor: Colors.lime,
  },

  // ─── AVATARES ─────────────────────────────────────────────

  avatar: {
    width: Size.thumb,
    height: Size.thumb,
    borderRadius: Radius.full,
    backgroundColor: Colors.bg.elevated,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  avatarSm: {
    width: Size.thumbSm,
    height: Size.thumbSm,
    borderRadius: Radius.full,
  },

  avatarLg: {
    width: Size.thumbLg,
    height: Size.thumbLg,
    borderRadius: Radius.full,
  },

  // ─── SEÇÃO ────────────────────────────────────────────────

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.3,
    marginTop: Spacing.4,
  },

  sectionLabel: {
    ...Typography.styles.label,
  },

  sectionAction: {
    fontFamily: Typography.family.body,
    fontSize: Typography.size.sm,
    color: Colors.pink,
    letterSpacing: 0.5,
  },

  // ─── MODAIS ───────────────────────────────────────────────

  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.bg.overlay,
    justifyContent: 'flex-end',
  },

  modalSheet: {
    backgroundColor: Colors.bg.card,
    borderTopLeftRadius: Radius.modal,
    borderTopRightRadius: Radius.modal,
    padding: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.border.subtle,
  },

  modalHandle: {
    width: 40,
    height: 4,
    borderRadius: Radius.full,
    backgroundColor: Colors.white[20],
    alignSelf: 'center',
    marginBottom: Spacing.md,
  },

  // ─── UTILITÁRIOS ──────────────────────────────────────────

  flex1:    { flex: 1 },
  flex0:    { flexShrink: 0 },
  w100:     { width: '100%' },

  // Gap helpers (React Native 0.71+ suporta gap em View)
  gap1: { gap: Spacing.xs },
  gap2: { gap: Spacing.sm },
  gap3: { gap: Spacing.3 },
  gap4: { gap: Spacing.md },

  // Margin helpers
  mt1: { marginTop: Spacing.xs },
  mt2: { marginTop: Spacing.sm },
  mt3: { marginTop: Spacing.3 },
  mt4: { marginTop: Spacing.md },

  mb1: { marginBottom: Spacing.xs },
  mb2: { marginBottom: Spacing.sm },
  mb3: { marginBottom: Spacing.3 },
  mb4: { marginBottom: Spacing.md },

  mx: { marginHorizontal: Spacing.screenPaddingH },

  // Padding helpers
  px: { paddingHorizontal: Spacing.screenPaddingH },
  py: { paddingVertical: Spacing.screenPaddingV },

  // Overflow
  overflowHidden: { overflow: 'hidden' },

  // Posicionamento
  absolute: { position: 'absolute' },
  inset0:   { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },

  // Visually hidden (acessibilidade)
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    opacity: 0,
  },
});

// ─── HELPER: estilo condicional ────────────────────────────────
// Uso: cx(gs.btnPrimary, isActive && gs.chipActive)
export const cx = (...styles) => styles.filter(Boolean);
