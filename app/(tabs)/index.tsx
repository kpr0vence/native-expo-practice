import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const placeholderImage = require('@/assets/images/withglasses.png')

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const picker = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("No image selected.")
    }
  }




  return (
    <View style={styles.container}>
      <ImageViewer imgSource={placeholderImage} selectedImage={selectedImage}/>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme={'primary'} onPress={picker}/>
        <Button label="Use this photo"/>
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
