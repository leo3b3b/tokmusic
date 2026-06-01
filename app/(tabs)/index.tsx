import TrackItem from '@/components/TrackItem';
import { useMusicas } from '@/hooks/MusicaContext';
import { GlobalStyles as gs } from '@/styles/styles';
import { Spacing } from '@/styles/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const { musicas, toggleCurtida } = useMusicas();
  const router = useRouter();

  const [featured] = useState(() => {
    const idx = Math.floor(Math.random() * musicas.length);
    return musicas[idx];
  });

  return (
    <FlatList
      style={gs.screen}
      contentContainerStyle={{ paddingBottom: Spacing.lg }}
      data={musicas}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          {/* ── Featured ── */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push(`/musica/${featured.id}`)}
          >
            <Image
              source={{ uri: featured.capa }}
              style={{ width: '100%', height: 220 }}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: Spacing.screenPaddingH,
                backgroundColor: 'rgba(15,13,26,0.65)',
              }}
            >
              <Text style={gs.label}>Em destaque</Text>
              <Text style={gs.h2} numberOfLines={1}>{featured.titulo}</Text>
              <Text style={gs.body}>{featured.artista}</Text>
            </View>
          </TouchableOpacity>

          {/* ── Cabeçalho da lista ── */}
          <View style={[gs.sectionHeader, gs.mx]}>
            <Text style={gs.sectionLabel}>Todas as músicas</Text>
          </View>
        </>
      }
      renderItem={({ item }) => (
        <TrackItem musica={item} onCurtir={toggleCurtida} />
      )}
    />
  );
}