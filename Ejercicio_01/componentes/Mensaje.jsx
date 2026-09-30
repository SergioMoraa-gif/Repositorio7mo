import { View, Text, StyleSheet } from "react-native";

export default function Mensaje(props){
    const variableMensaje="Esto es mi mensaje";
    const num=1000;

    const double= n => n*2;

    return(
        <View style={styles.contenedor}>
            <Text style={styles.mensaje}>{props.msg}</Text>
            <Text style={styles.num}>{props.num}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#ff9800',
        padding: 12,
        borderRadius: 8,
    },
    mensaje: {
        color: '#6200ee',
    },
    num: {
        color: '#e65100',
    },
});
