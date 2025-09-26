import { StyleSheet, View } from "react-native";
import CircleButton from "./CircleButton";
import IconButton from "./IconButton";

type Props = {
    onAddSticker: () => void;
    onReset: () => void;
    onSaveImageAsync: () => void;
}


export default function ButtonsModalWrapper({ onAddSticker, onReset, onSaveImageAsync }: Props) {
    return (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
      },
      optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
})