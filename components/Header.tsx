import { GlobalStyles as gs } from '@/styles/styles';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Navbar() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, backgroundColor: gs.header.backgroundColor }}>
      <View style={gs.header}>
        <Text style={gs.navLogo}>TOKMUSIC</Text>
      </View>
    </View>
  );
}