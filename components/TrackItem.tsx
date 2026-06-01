import { MusicaComCurtida } from '@/hooks/MusicaContext';
import { GlobalStyles as gs } from '@/styles/styles';
import { Colors, Radius, Size } from '@/styles/tokens';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    musica: MusicaComCurtida;
    onCurtir: (id: string) => void;
};

export default function TrackItem({ musica, onCurtir }: Props) {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={[gs.trackItem, gs.mx]}
            activeOpacity={0.75}
            onPress={() => router.push(`/musica/${musica.id}`)}
        >
            <Image
                source={{ uri: musica.capa }}
                style={{
                    width: Size.thumb,
                    height: Size.thumb,
                    borderRadius: Radius.thumb,
                }}
            />

            <View style={gs.trackInfo}>
                <Text style={gs.trackTitle} numberOfLines={1}>{musica.titulo}</Text>
                <Text style={gs.trackArtist} numberOfLines={1}>{musica.artista}</Text>
            </View>

            <TouchableOpacity hitSlop={12} onPress={() => onCurtir(musica.id)}>
                <Ionicons
                    name={musica.curtida ? 'heart' : 'heart-outline'}
                    size={22}
                    color={musica.curtida ? Colors.pink : Colors.text.muted}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}