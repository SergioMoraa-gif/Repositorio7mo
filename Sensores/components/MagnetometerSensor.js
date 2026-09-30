import { Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

const DIAMETRO = 220;

export default function MagnetometerSensor (){
    const [datos, setDatos] = useState({
        x:0,
        y:0,
        z:0,
    });

    useEffect(
        ()=>{
            const subscribir = Magnetometer.addListener(
                measurements => {setDatos(measurements)}
            );

            Magnetometer.setUpdateInterval(100);

            return () => {
                subscribir.remove();
            }
        },[]
    );

    // Calcula el ángulo (0°-360°) hacia donde apunta la parte superior del
    // teléfono respecto al norte magnético (0° = Norte, 90° = Este, ...)
    const calcularAngulo = () => {
        const { x, y } = datos;
        let angulo = Math.atan2(y, x);

        if (angulo < 0) {
            angulo += 2 * Math.PI;
        }

        return Math.round(angulo * (180 / Math.PI));
    };

    // Traduce el ángulo a un punto cardinal legible
    const calcularDireccion = (grados) => {
        if (grados >= 337.5 || grados < 22.5) return 'N';
        if (grados < 67.5) return 'NE';
        if (grados < 112.5) return 'E';
        if (grados < 157.5) return 'SE';
        if (grados < 202.5) return 'S';
        if (grados < 247.5) return 'SO';
        if (grados < 292.5) return 'O';
        return 'NO';
    };

    const angulo = calcularAngulo();
    const direccion = calcularDireccion(angulo);

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Brújula
            </Text>

            <View style={style.brujulaContenedor}>
                {/* La esfera gira en sentido contrario al teléfono para que
                    la letra N siempre quede señalando el norte real */}
                <View style={[style.esfera, { transform: [{ rotate: `${-angulo}deg` }] }]}>
                    <Text style={[style.puntoCardinal, style.norte]}>N</Text>
                    <Text style={[style.puntoCardinal, style.este]}>E</Text>
                    <Text style={[style.puntoCardinal, style.sur]}>S</Text>
                    <Text style={[style.puntoCardinal, style.oeste]}>O</Text>
                </View>

                {/* La aguja no gira: siempre señala hacia arriba,
                    representando el frente del teléfono */}
                <View style={style.aguja} />
            </View>

            <Text style={style.grados}>{angulo}°</Text>
            <Text style={style.direccion}>{direccion}</Text>

            <View style={style.card}>
                <Text style={style.axis}>X</Text>
                <Text style={style.value}>{datos.x.toFixed(2)}</Text>
            </View>
            <View style={style.card}>
                <Text style={style.axis}>Y</Text>
                <Text style={style.value}>{datos.y.toFixed(2)}</Text>
            </View>
            <View style={style.card}>
                <Text style={style.axis}>Z</Text>
                <Text style={style.value}>{datos.z.toFixed(2)}</Text>
            </View>
        </View>

    );

}

const style = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: "#efefef"
    },

    title: {
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 25,
        color: "#3a4a5a"
    },

    brujulaContenedor: {
        width: DIAMETRO,
        height: DIAMETRO,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    esfera: {
        width: DIAMETRO,
        height: DIAMETRO,
        borderRadius: DIAMETRO / 2,
        borderWidth: 4,
        borderColor: '#3a4a5a',
        backgroundColor: '#fff',
    },

    puntoCardinal: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3a4a5a',
    },

    norte: { top: 8, left: DIAMETRO / 2 - 8, color: '#e74c3c' },
    sur: { bottom: 8, left: DIAMETRO / 2 - 6 },
    este: { right: 12, top: DIAMETRO / 2 - 12 },
    oeste: { left: 12, top: DIAMETRO / 2 - 12 },

    aguja: {
        position: 'absolute',
        top: 6,
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 90,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#e74c3c',
    },

    grados: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#3a4a5a",
    },

    direccion: {
        fontSize: 18,
        color: '#666',
        marginBottom: 25,
    },

    card: {
        width: '100%',
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    axis: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    value: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
