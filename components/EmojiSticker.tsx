import { Image } from 'expo-image';
import { ImageSourcePropType, View } from 'react-native';

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
}

export default function EmojiSticker( props: Props ) {
    return (
        <View style={{ top: -350 }}>
          <Image source={props.stickerSource} style={{ width: props.imageSize, height: props.imageSize }} />
        </View>
    );
}
