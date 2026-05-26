# NEOWAVE — Design System

Dois arquivos cobrem 100% das decisões visuais do projeto.

```
src/
 └── styles/
      ├── tokens.js   → variáveis brutas (cores, tamanhos, espaçamento…)
      └── styles.js   → StyleSheet globais prontos para usar
```

---

## Instalação das fontes

```bash
npx expo install expo-font @expo-google-fonts/orbitron @expo-google-fonts/rajdhani
```

No `App.js` ou layout raiz:

```js
import { useFonts, Orbitron_700Bold, Orbitron_900Black } from '@expo-google-fonts/orbitron';
import { Rajdhani_400Regular, Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';

const [fontsLoaded] = useFonts({
  Orbitron: Orbitron_700Bold,
  'Orbitron-Black': Orbitron_900Black,
  Rajdhani: Rajdhani_400Regular,
  'Rajdhani-SemiBold': Rajdhani_600SemiBold,
});
```

---

## Uso básico

```js
import { GlobalStyles as gs } from '@/styles/styles';
import { Colors, Spacing } from '@/styles/tokens';
```

### Tela

```jsx
<SafeAreaView style={gs.screen}>
  <ScrollView contentContainerStyle={gs.scrollContent}>
    ...
  </ScrollView>
</SafeAreaView>
```

### Tipografia

```jsx
<Text style={gs.h1}>NEON GHOST</Text>
<Text style={gs.label}>· em destaque ·</Text>
<Text style={gs.body}>Synthetic Haze · 2024</Text>
<Text style={[gs.caption, gs.textMuted]}>3:42</Text>
```

### Card

```jsx
<View style={gs.card}>
  <Text style={gs.h3}>Zero Gravity</Text>
  <Text style={gs.body}>Prism Cell</Text>
</View>
```

### Botões

```jsx
// Primário
<TouchableOpacity style={gs.btnPrimary}>
  <Text style={gs.btnPrimaryText}>Reproduzir</Text>
</TouchableOpacity>

// Secundário (ghost)
<TouchableOpacity style={gs.btnSecondary}>
  <Text style={gs.btnSecondaryText}>Aleatório</Text>
</TouchableOpacity>

// Botão play circular
<TouchableOpacity style={gs.btnPlay}>
  <Icon name="player-play" size={28} color="#fff" />
</TouchableOpacity>
```

### Estilos condicionais com `cx()`

```jsx
import { GlobalStyles as gs, cx } from '@/styles/styles';

// cx() filtra falsy e retorna array — aceito pelo style prop
<Text style={cx(gs.bottomNavLabel, isActive && gs.bottomNavLabelActive)}>
  Músicas
</Text>

<View style={cx(gs.chip, isActive && gs.chipActive)}>
  <Text style={cx(gs.chipText, isActive && gs.chipActiveText)}>
    Electronic
  </Text>
</View>
```

### Track item

```jsx
<View style={gs.trackItem}>
  <Text style={gs.trackNumber}>01</Text>
  <View style={[gs.trackThumb, { backgroundColor: Colors.pink }]}>
    <Icon name="bolt" size={20} color="#fff" />
  </View>
  <View style={gs.trackInfo}>
    <Text style={gs.trackTitle} numberOfLines={1}>Neon Ghost</Text>
    <Text style={gs.trackArtist}>Synthetic Haze</Text>
  </View>
  <Text style={gs.trackDuration}>3:42</Text>
</View>
```

### Gradientes (com expo-linear-gradient)

```jsx
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Radius } from '@/styles/tokens';

<LinearGradient
  colors={Colors.gradient.hero}
  style={[gs.cardHero]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
>
  ...
</LinearGradient>
```

### Bottom Nav

```jsx
<View style={gs.bottomNav}>
  {tabs.map(tab => (
    <TouchableOpacity key={tab.id} style={gs.bottomNavItem}>
      <Icon
        name={tab.icon}
        size={22}
        color={active === tab.id ? Colors.pink : Colors.text.muted}
      />
      <Text style={cx(gs.bottomNavLabel, active === tab.id && gs.bottomNavLabelActive)}>
        {tab.label}
      </Text>
    </TouchableOpacity>
  ))}
</View>
```

---

## Paleta de cores

| Token               | Hex         | Uso                              |
|---------------------|-------------|----------------------------------|
| `Colors.lime`       | `#CEEC97`   | Labels, badges, estado ativo     |
| `Colors.peach`      | `#F4B393`   | Ícones secundários, avisos       |
| `Colors.pink`       | `#FC60A8`   | CTA principal, likes, glows      |
| `Colors.deep`       | `#494368`   | Cards, gradientes, superfícies   |
| `Colors.bg.base`    | `#0f0d1a`   | Fundo raiz                       |
| `Colors.bg.surface` | `#1a172b`   | Telas                            |
| `Colors.bg.card`    | `#241f3a`   | Cards                            |
| `Colors.bg.elevated`| `#302a4a`   | Navbar, bottom nav               |

---

## Escala de espaçamento

| Token         | Valor |
|---------------|-------|
| `Spacing.xs`  | 4dp   |
| `Spacing.sm`  | 8dp   |
| `Spacing.md`  | 16dp  |
| `Spacing.lg`  | 24dp  |
| `Spacing.xl`  | 32dp  |
| `Spacing.2xl` | 48dp  |
