// ═══════════════════════════════════════════════════════════════
//  NEOWAVE — Global Styles
//  Importe { GlobalStyles as gs } e use gs.card, gs.btnPrimary, etc.
//  Importe { cx } para estilos condicionais.
// ═══════════════════════════════════════════════════════════════

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors, Radius, Shadows, Size, Spacing, Typography } from './tokens';

type Style = ViewStyle | TextStyle | ImageStyle;

export const GlobalStyles = StyleSheet.create({

  // ─── LAYOUT & CONTAINERS ──────────────────────────────────

  screen: {
    flex: 1,
    backgroundColor: Colors.bg.base,
  },

  screenPadded: {
    flex: 1,
    backgroundColor: Colors.bg.base,
    paddingHorizontal: Spacing.screenPaddingH,
  },

  scrollContent: {
    paddingHorizontal: Spacing.screenPaddingH,
    paddingBottom: Spacing.lg + Spacing.bottomNavHeight,
  },

  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

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

  separator: {
    height: 1,
    backgroundColor: Colors.border.subtle,
    marginVertical: Spacing.sm,
  },

  // ─── NAVBAR ───────────────────────────────────────────────

  header: {
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
    color: Colors.pink,
  },

  // ─── CARDS ────────────────────────────────────────────────

  card: {
    backgroundColor: Colors.bg.card,
    borderRadius: Radius.card,
    padding: Spacing.cardPadding,
    borderWidth: 1,
    borderColor: Colors.border.subtle,
    ...Shadows.sm,
  },

  cardElevated: {
    backgroundColor: Colors.bg.elevated,
    borderRadius: Radius.card,
    padding: Spacing.cardPadding,
    borderWidth: 1,
    borderColor: Colors.border.default,
    ...Shadows.md,
  },

  cardHero: {
    borderRadius: Radius.lg,
    padding: Spacing.screenPaddingH,
    borderWidth: 1,
    borderColor: Colors.border.lime,
    overflow: 'hidden',
    ...Shadows.lg,
  },

  // ─── TIPOGRAFIA ───────────────────────────────────────────

  h1: { ...Typography.styles.h1 },
  h2: { ...Typography.styles.h2 },
  h3: { ...Typography.styles.h3 },
  label: { ...Typography.styles.label },
  body: { ...Typography.styles.body },
  bodyStrong: { ...Typography.styles.bodyStrong },
  caption: { ...Typography.styles.caption },
  mono: { ...Typography.styles.mono },

  textPrimary: { color: Colors.text.primary },
  textSecondary: { color: Colors.text.secondary },
  textMuted: { color: Colors.text.muted },
  textLime: { color: Colors.text.lime },
  textPink: { color: Colors.text.pink },
  textPeach: { color: Colors.text.peach },

  // ─── BOTÕES ───────────────────────────────────────────────

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

  btnSecondary: {
    height: Size.btnHeight,
    borderRadius: Radius.button,
    backgroundColor: Colors.whiteAlpha.w8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.whiteAlpha.w20,
  },

  btnSecondaryText: {
    ...Typography.styles.button,
    color: Colors.text.secondary,
  },

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

  btnSm: {
    height: Size.btnHeightSm,
    borderRadius: Radius.sm,
    paddingHorizontal: Spacing.md,
  },

  btnIcon: {
    width: Size.ctrlBtn,
    height: Size.ctrlBtn,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },

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
    backgroundColor: Colors.whiteAlpha.w8,
    borderWidth: 1,
    borderColor: Colors.border.subtle,
  },

  chipText: {
    ...Typography.styles.caption,
    fontSize: 11,
  },

  chipActive: {
    backgroundColor: Colors.pinkAlpha.soft,
    borderColor: Colors.border.default,
  },

  chipActiveText: {
    color: Colors.pink,
  },

  chipLime: {
    backgroundColor: Colors.limeAlpha.soft,
    borderColor: Colors.border.lime,
  },

  chipLimeText: {
    color: Colors.lime,
    fontSize: 11,
  },

  badge: {
    paddingVertical: 3,
    paddingHorizontal: Spacing.sm,
    borderRadius: Radius.chip,
    backgroundColor: Colors.lime,
  },

  badgeText: {
    fontFamily: Typography.family.display,
    fontSize: 8,
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

  // ─── TRACK ITEM ───────────────────────────────────────────

  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.listItemPaddingV,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.subtle,
  },

  trackItemActive: {
    borderBottomColor: Colors.pinkAlpha.soft,
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
    minWidth: 0,
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

  waveBar: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: Colors.whiteAlpha.w12,
  },

  waveBarPlayed: {
    backgroundColor: Colors.pink,
  },

  waveBarActive: {
    backgroundColor: Colors.lime,
  },

  // ─── SEÇÃO ────────────────────────────────────────────────

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm,
    marginTop: Spacing.md,
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
    backgroundColor: Colors.whiteAlpha.w20,
    alignSelf: 'center',
    marginBottom: Spacing.md,
  },

  // ─── UTILITÁRIOS ──────────────────────────────────────────

  flex1: { flex: 1 },
  flex0: { flexShrink: 0 },
  w100: { width: '100%' },

  gapXs: { gap: Spacing.xs },
  gapSm: { gap: Spacing.sm },
  gapMd: { gap: Spacing.md },
  gapLg: { gap: Spacing.lg },

  mt1: { marginTop: Spacing.xs },
  mt2: { marginTop: Spacing.sm },
  mt3: { marginTop: Spacing.md },
  mt4: { marginTop: Spacing.lg },

  mb1: { marginBottom: Spacing.xs },
  mb2: { marginBottom: Spacing.sm },
  mb3: { marginBottom: Spacing.md },
  mb4: { marginBottom: Spacing.lg },

  mx: { marginHorizontal: Spacing.screenPaddingH },
  px: { paddingHorizontal: Spacing.screenPaddingH },
  py: { paddingVertical: Spacing.screenPaddingV },

  overflowHidden: { overflow: 'hidden' },
  absolute: { position: 'absolute' },
  inset0: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },

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
export const cx = (...styles: (Style | false | null | undefined)[]): Style[] =>
  styles.filter(Boolean) as Style[];