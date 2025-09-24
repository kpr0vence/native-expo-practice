import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const placeholderImage = require('@/assets/images/withglasses.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={placeholderImage}/>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme={'primary'}/>
        <Button label="Use this photo" />
      </View>
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
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
