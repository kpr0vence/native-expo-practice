import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { styles } from './(tabs)/index';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={[styles.button, styles.text]}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}