import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
export default function Banner ({children, titulo}){
    return(
        <View style={styles.texto}>
            <text>{titulo}</text>
            {children}
        </View>
    );

}

const styles=StyleSheet.create({
    texto: {
        color:"red"
    },
})