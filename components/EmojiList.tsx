import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
}

export default function EmojiList( { onSelect, onCloseModal }: Props) {
    const path = "/sticker-smash-assets/images"
    const [emoji] = useState<ImageSourcePropType[]>([
        require("../assets/images"+path+"/emoji1.png"),
        require("../assets/images"+path+"/emoji2.png"),
        require("../assets/images"+path+"/emoji3.png"),
        require("../assets/images"+path+"/emoji4.png"),
        require("../assets/images"+path+"/emoji5.png"),
        require("../assets/images"+path+"/emoji6.png"),
      ]);

      return (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={Platform.OS === 'web'}
          data={emoji}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                onSelect(item);
                onCloseModal();
              }}>
              <Image source={item} key={index} style={styles.image} />
            </Pressable>
          )}
        />
      );
    }
    
    const styles = StyleSheet.create({
      listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      image: {
        width: 100,
        height: 100,
        marginRight: 20,
      },
    });