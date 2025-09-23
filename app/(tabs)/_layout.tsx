import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#e3256b',
      headerStyle: {
        backgroundColor: '#25292e'
      },
      headerShadowVisible: true,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#ffg',
      },
    }}>
      <Tabs.Screen name="index" options={{
         title: 'Home',
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),  // gets Color from tabBarActiveTintColor?
       }} />
      <Tabs.Screen name="about" options={{ 
        title: 'About',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
        ),
      }} />
    </Tabs>
  );
}
