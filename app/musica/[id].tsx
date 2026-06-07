import { useMusicas } from '@/hooks/MusicaContext';
import { GlobalStyles as gs } from '@/styles/styles';
import { Colors, Radius, Size, Spacing } from '@/styles/tokens';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
    Animated, Dimensions,
    FlatList,
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PROGRESS_WIDTH = SCREEN_WIDTH - Spacing.screenPaddingH * 2;

export default function MusicaScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const { musicas, toggleCurtida, getMusicaById, playlists, adicionarMusica } = useMusicas();

    const insets = useSafeAreaInsets();
    const musica = getMusicaById(id);

    // Índice atual para navegação anterior/próximo
    const indexAtual = musicas.findIndex((m) => m.id === id);

    const [tocando, setTocando] = useState(false);
    const [modalPlaylist, setModalPlaylist] = useState(false);
    const progressoAnim = useRef(new Animated.Value(0)).current;
    const animacaoRef = useRef<Animated.CompositeAnimation | null>(null);

    // Reseta progresso ao trocar de música
    useEffect(() => {
        progressoAnim.setValue(0);
        setTocando(false);
    }, [id]);

    function togglePlay() {
        if (tocando) {
            animacaoRef.current?.stop();
            setTocando(false);
        } else {
            animacaoRef.current = Animated.timing(progressoAnim, {
                toValue: 1,
                duration: 60000, // 60s fake
                useNativeDriver: false,
            });
            animacaoRef.current.start(({ finished }) => {
                if (finished) setTocando(false);
            });
            setTocando(true);
        }
    }

    function irPara(novoIndex: number) {
        if (novoIndex < 0 || novoIndex >= musicas.length) return;
        router.replace(`/musica/${musicas[novoIndex].id}`);
    }

    if (!musica) return null;

    const progressoWidth = progressoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, PROGRESS_WIDTH],
    });

    return (
        <ImageBackground
            source={{ uri: musica.capa }}
            style={styles.bg}
            resizeMode="cover"
        >
            {/* Overlay escuro para legibilidade */}
            <View style={styles.overlay} />

            {/* ── Botão voltar ── */}
            <TouchableOpacity
                style={[styles.backBtn, { top: insets.top + Spacing.sm }]}
                onPress={() => router.back()}
                hitSlop={12}
            >
                <Ionicons name="close" size={Size.iconXl} color={Colors.text.primary} />
            </TouchableOpacity>

            {/* ── Conteúdo principal ── */}
            <View style={styles.content}>

                {/* Título + artista */}
                <View style={[gs.rowBetween, { marginBottom: Spacing.lg }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={gs.h2} numberOfLines={1}>{musica.titulo}</Text>
                        <Text style={gs.body}>{musica.artista}</Text>
                    </View>

                    <View style={[gs.row, { gap: Spacing.md }]}>
                        {/* Adicionar à playlist */}
                        <TouchableOpacity hitSlop={12} onPress={() => setModalPlaylist(true)}>
                            <Ionicons name="add-circle-outline" size={Size.iconXl} color={Colors.text.muted} />
                        </TouchableOpacity>

                        {/* Curtir */}
                        <TouchableOpacity hitSlop={12} onPress={() => toggleCurtida(musica.id)}>
                            <Ionicons
                                name={musica.curtida ? 'heart' : 'heart-outline'}
                                size={Size.iconXl}
                                color={musica.curtida ? Colors.pink : Colors.text.muted}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Modal: adicionar à playlist */}
                <Modal
                    visible={modalPlaylist}
                    transparent
                    animationType="slide"
                    onRequestClose={() => setModalPlaylist(false)}
                >
                    <TouchableOpacity
                        style={gs.modalOverlay}
                        activeOpacity={1}
                        onPress={() => setModalPlaylist(false)}
                    >
                        <View style={gs.modalSheet}>
                            <View style={gs.modalHandle} />
                            <Text style={[gs.h3, { marginBottom: Spacing.md }]}>
                                Adicionar à playlist
                            </Text>

                            {playlists.length === 0 ? (
                                <Text style={[gs.body, { marginBottom: Spacing.md }]}>
                                    Nenhuma playlist criada ainda. Crie uma na aba Playlist.
                                </Text>
                            ) : (
                                <FlatList
                                    data={playlists}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => {
                                        const jaNaPlaylist = item.musicaIds.includes(musica.id);
                                        return (
                                            <TouchableOpacity
                                                style={[gs.rowBetween, { paddingVertical: Spacing.sm }]}
                                                onPress={() => {
                                                    adicionarMusica(item.id, musica.id);
                                                    setModalPlaylist(false);
                                                }}
                                                disabled={jaNaPlaylist}
                                            >
                                                <Text style={[gs.trackTitle, jaNaPlaylist && { color: Colors.text.muted }]}>
                                                    {item.nome}
                                                </Text>
                                                {jaNaPlaylist && (
                                                    <Ionicons name="checkmark" size={Size.icon} color={Colors.lime} />
                                                )}
                                            </TouchableOpacity>
                                        );
                                    }}
                                    ItemSeparatorComponent={() => <View style={gs.separator} />}
                                />
                            )}
                        </View>
                    </TouchableOpacity>
                </Modal>

                {/* Barra de progresso */}
                <View style={styles.progressTrack}>
                    <Animated.View
                        style={[styles.progressFill, { width: progressoWidth }]}
                    />
                </View>

                {/* Tempos fake */}
                <View style={[gs.rowBetween, { marginTop: Spacing.xs, marginBottom: Spacing.lg }]}>
                    <Text style={gs.mono}>0:00</Text>
                    <Text style={gs.mono}>1:00</Text>
                </View>

                {/* Controles */}
                <View style={gs.playerControls}>
                    {/* Anterior */}
                    <TouchableOpacity
                        style={gs.playerControlBtn}
                        onPress={() => irPara(indexAtual - 1)}
                        disabled={indexAtual === 0}
                    >
                        <Ionicons
                            name="play-skip-back"
                            size={Size.iconLg}
                            color={indexAtual === 0 ? Colors.text.muted : Colors.text.primary}
                        />
                    </TouchableOpacity>

                    {/* Play/Pause */}
                    <TouchableOpacity style={gs.btnPlay} onPress={togglePlay}>
                        <Ionicons
                            name={tocando ? 'pause' : 'play'}
                            size={28}
                            color={Colors.text.primary}
                        />
                    </TouchableOpacity>

                    {/* Próximo */}
                    <TouchableOpacity
                        style={gs.playerControlBtn}
                        onPress={() => irPara(indexAtual + 1)}
                        disabled={indexAtual === musicas.length - 1}
                    >
                        <Ionicons
                            name="play-skip-forward"
                            size={Size.iconLg}
                            color={indexAtual === musicas.length - 1 ? Colors.text.muted : Colors.text.primary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15,13,26,0.72)',
    },
    backBtn: {
        position: 'absolute',
        left: Spacing.screenPaddingH,
        zIndex: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: Spacing.screenPaddingH,
        paddingBottom: Spacing.xxl,
    },
    progressTrack: {
        height: 3,
        backgroundColor: Colors.whiteAlpha.w12,
        borderRadius: Radius.full,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.pink,
        borderRadius: Radius.full,
    },
});