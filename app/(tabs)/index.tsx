import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>Homescreen</Text>
      <Text style={styles.text}>Walkthrough of the basic Native<>Expo App</></Text>
      <Link href="/about" style={[styles.button, styles.text]}>Wanna Hear More?</Link>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#e3256b',
    borderRadius: 10,
  }
})
