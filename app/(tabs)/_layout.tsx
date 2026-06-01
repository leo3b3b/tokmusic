import Header from '@/components/Header';
import { Colors, Spacing, Typography } from '@/styles/tokens';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                header: () => <Header />,
                tabBarStyle: {
                    backgroundColor: Colors.bg.elevated,
                    borderTopColor: Colors.border.subtle,
                    borderTopWidth: 1,
                    height: Spacing.bottomNavHeight,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: Colors.pink,
                tabBarInactiveTintColor: Colors.text.muted,
                tabBarLabelStyle: {
                    fontFamily: Typography.family.body,
                    fontSize: 9,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Músicas',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="musical-notes" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="playlist"
                options={{
                    title: 'Playlist',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}