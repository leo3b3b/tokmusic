import { GlobalStyles as gs } from '@/styles/styles';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function MusicaScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View style={gs.screen}>
            <Text style={gs.h2}>Música {id}</Text>
        </View>
    );
}