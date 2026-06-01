import { MusicaComCurtida, Playlist } from '@/hooks/MusicaContext';
import { GlobalStyles as gs } from '@/styles/styles';
import { Colors, Radius, Size, Spacing } from '@/styles/tokens';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    playlist: Playlist;
    musicas: MusicaComCurtida[]; // músicas resolvidas da playlist
    automatica?: boolean;        // true = playlist de curtidas
    onPress: () => void;
};

export default function PlaylistCard({ playlist, musicas, automatica, onPress }: Props) {
    // Até 4 capas para o mosaico
    const capas = musicas.slice(0, 4).map((m) => m.capa);

    return (
        <TouchableOpacity
            style={[gs.card, gs.rowBetween, { marginHorizontal: Spacing.screenPaddingH, marginBottom: Spacing.sm }]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {/* Mosaico de capas ou ícone vazio */}
            <View
                style={{
                    width: Size.thumbLg,
                    height: Size.thumbLg,
                    borderRadius: Radius.thumb,
                    overflow: 'hidden',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {capas.length > 0 ? (
                    capas.map((uri, i) => (
                        <Image
                            key={i}
                            source={{ uri }}
                            style={{
                                width: capas.length === 1 ? '100%' : '50%',
                                height: capas.length <= 2 ? '100%' : '50%',
                            }}
                        />
                    ))
                ) : (
                    <View
                        style={[
                            gs.centered,
                            { height: '100%', backgroundColor: Colors.bg.elevated },
                        ]}
                    >
                        <Ionicons name="musical-notes" size={Size.iconLg} color={Colors.text.muted} />
                    </View>
                )}
            </View>

            {/* Nome + contagem */}
            <View style={[gs.trackInfo, { marginLeft: Spacing.sm }]}>
                <Text style={gs.trackTitle} numberOfLines={1}>{playlist.nome}</Text>
                <Text style={gs.trackArtist}>
                    {musicas.length} {musicas.length === 1 ? 'música' : 'músicas'}
                </Text>
            </View>

            {/* Badge automática ou seta */}
            {automatica ? (
                <View style={gs.badge}>
                    <Text style={gs.badgeText}>AUTO</Text>
                </View>
            ) : (
                <Ionicons name="chevron-forward" size={Size.icon} color={Colors.text.muted} />
            )}
        </TouchableOpacity>
    );
}