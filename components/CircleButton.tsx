import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";


type Props = {
    onPress: () => void;
}

export default function CircleButton(props: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={props.onPress}>
                <MaterialIcons name="add" size={38} color='#FFF'/>
            </Pressable>
        </View>
    
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
      width: 84,
      height: 84,
      marginHorizontal: 60,
      borderRadius: 42,
      boxShadow: '0px 0px 9px -1px rgba(0, 0, 0, 0.25)',
      padding: 3,
    },
    circleButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 42,
      backgroundColor: '#e3256b',
    },
  });
  
  