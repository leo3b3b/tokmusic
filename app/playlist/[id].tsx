import TrackItem from '@/components/TrackItem';
import { MusicaComCurtida, useMusicas } from '@/hooks/MusicaContext';
import { GlobalStyles as gs } from '@/styles/styles';
import { Colors, Size, Spacing } from '@/styles/tokens';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PlaylistDetalheScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const { curtidas, playlists, toggleCurtida, getPlaylistMusicas } = useMusicas();

    // Resolve nome e músicas dependendo do tipo de playlist
    const insets = useSafeAreaInsets();
    const isCurtidas = id === 'curtidas';
    const nome = isCurtidas
        ? 'Curtidas'
        : playlists.find((p) => p.id === id)?.nome ?? 'Playlist';
    const musicas: MusicaComCurtida[] = isCurtidas
        ? curtidas
        : getPlaylistMusicas(playlists.find((p) => p.id === id)!);

    return (
        <View style={gs.screen}>
            <FlatList
                contentContainerStyle={{ paddingBottom: Spacing.lg }}
                data={musicas}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={{ paddingHorizontal: Spacing.screenPaddingH, paddingTop: insets.top }}>
                        {/* ── Botão voltar ── */}
                        <TouchableOpacity
                            style={{ marginTop: Spacing.md, marginBottom: Spacing.lg }}
                            onPress={() => router.back()}
                            hitSlop={12}
                        >
                            <Ionicons name="close" size={Size.iconXl} color={Colors.text.primary} />
                        </TouchableOpacity>

                        {/* ── Cabeçalho ── */}
                        <Text style={gs.label}>Playlist</Text>
                        <Text style={[gs.h1, { marginTop: Spacing.xs, marginBottom: Spacing.xs }]}>
                            {nome}
                        </Text>
                        <Text style={gs.body}>
                            {musicas.length} {musicas.length === 1 ? 'música' : 'músicas'}
                        </Text>

                        <View style={[gs.separator, { marginTop: Spacing.md }]} />
                    </View>
                }
                ListEmptyComponent={
                    <Text style={[gs.body, gs.mx, { marginTop: Spacing.md }]}>
                        {isCurtidas
                            ? 'Nenhuma música curtida ainda.'
                            : 'Playlist vazia. Adicione músicas pela tela de reprodução.'}
                    </Text>
                }
                renderItem={({ item }) => (
                    <TrackItem musica={item} onCurtir={toggleCurtida} />
                )}
            />
        </View>
    );
}