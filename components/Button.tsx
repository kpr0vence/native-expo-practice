import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    label: string
    theme?: 'primary'
    onPress?: () => void;   // Defines the qualities of the funtion passed in (takes no params returns nothing)
}

export default function Button({ label, theme, onPress }: Props) {  // Performing item extraction from the props object passed in
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer,
                {boxShadow: '0px 0px 9px -1px rgba(0, 0, 0, 0.25)', borderRadius: 18 },
              ]}> 
                <Pressable style={[styles.button, {backgroundColor:'#e3256b'}]} onPress={onPress}>
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, {fontSize: 20}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.buttonContainer}> 
            <Pressable style={styles.button} onPress={() => alert("Use this photo?")}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
        color: '#fff'
      },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})