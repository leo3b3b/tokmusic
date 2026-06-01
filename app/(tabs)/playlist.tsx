import PlaylistCard from '@/components/PlaylistCard';
import { useMusicas } from '@/hooks/MusicaContext';
import { GlobalStyles as gs } from '@/styles/styles';
import { Colors, Size, Spacing } from '@/styles/tokens';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    FlatList,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PlaylistScreen() {
    const { curtidas, playlists, criarPlaylist, getPlaylistMusicas } = useMusicas();
    const router = useRouter();

    const [modalVisivel, setModalVisivel] = useState(false);
    const [novoNome, setNovoNome] = useState('');

    function handleCriar() {
        if (!novoNome.trim()) {
            Alert.alert('Nome obrigatório', 'Dê um nome para a playlist.');
            return;
        }
        criarPlaylist(novoNome);
        setNovoNome('');
        setModalVisivel(false);
    }

    return (
        <View style={gs.screen}>
            <FlatList
                contentContainerStyle={{ paddingTop: Spacing.md, paddingBottom: Spacing.lg }}
                data={playlists}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        {/* ── Curtidas (automática) ── */}
                        <View style={[gs.sectionHeader, gs.mx]}>
                            <Text style={gs.sectionLabel}>Automáticas</Text>
                        </View>

                        <PlaylistCard
                            playlist={{ id: 'curtidas', nome: 'Curtidas', musicaIds: curtidas.map((m) => m.id) }}
                            musicas={curtidas}
                            automatica
                            onPress={() => router.push('../playlist/curtidas')}
                        />

                        {/* ── Minhas playlists ── */}
                        <View style={[gs.sectionHeader, gs.mx, { marginTop: Spacing.lg }]}>
                            <Text style={gs.sectionLabel}>Minhas playlists</Text>
                            <TouchableOpacity onPress={() => setModalVisivel(true)}>
                                <Ionicons name="add-circle" size={Size.iconLg} color={Colors.pink} />
                            </TouchableOpacity>
                        </View>

                        {playlists.length === 0 && (
                            <Text style={[gs.body, gs.mx, { marginTop: Spacing.sm }]}>
                                Nenhuma playlist ainda.
                            </Text>
                        )}
                    </>
                }
                renderItem={({ item }) => (
                    <PlaylistCard
                        playlist={item}
                        musicas={getPlaylistMusicas(item)}
                        onPress={() => router.push(`../playlist/${item.id}`)}
                    />
                )}
            />

            {/* ── Modal: criar playlist ── */}
            <Modal
                visible={modalVisivel}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisivel(false)}
            >
                <TouchableOpacity
                    style={gs.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setModalVisivel(false)}
                >
                    <View style={gs.modalSheet}>
                        <View style={gs.modalHandle} />
                        <Text style={[gs.h3, { marginBottom: Spacing.md }]}>Nova playlist</Text>

                        <Text style={gs.inputLabel}>Nome</Text>
                        <TextInput
                            style={gs.input}
                            placeholder="Ex: Synthwave noturno"
                            placeholderTextColor={Colors.text.muted}
                            value={novoNome}
                            onChangeText={setNovoNome}
                            autoFocus
                        />

                        <TouchableOpacity
                            style={[gs.btnPrimary, { marginTop: Spacing.md }]}
                            onPress={handleCriar}
                        >
                            <Text style={gs.btnPrimaryText}>Criar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}