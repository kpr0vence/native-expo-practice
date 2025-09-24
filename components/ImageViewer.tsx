import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';

type Props = {
    imgSource: ImageSourcePropType
}

export default function ImageViewer(props: Props) {
    return (
    <View style={styles.imageContainer}>
        <Image source={props.imgSource} style={styles.image}></Image>
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