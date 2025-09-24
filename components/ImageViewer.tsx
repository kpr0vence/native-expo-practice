import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType
    selectedImage?: string
}

export default function ImageViewer(props: Props) {
    // essentially says: if the selected image exists (was passed in) extract the uri from it else use the default passed in
    // Since selected image is a state variable, this component will update as the selectedImage is set
    const src = props.selectedImage? {uri: props.selectedImage} : props.imgSource;
    return (
    <View style={styles.imageContainer}>
        <Image source={src} style={styles.image}></Image>
    </View>)
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1   // shorthand for the flex-grow property <-- specifies how much of the available 
      },          // space within a container an element should take up, relative to the other elements.
    image: {    // On flex grow (aka flex:1) items will take up as much space (split evenly by default) as they can
        width: 320,
        height: 440,
        borderRadius: 18
    }
});