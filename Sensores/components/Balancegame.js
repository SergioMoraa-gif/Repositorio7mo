import { Accelerometer } from "expo-sensors";
import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Tamaño del área de juego (el cuadro) y de la pelota, en pixeles
const TAMANO_CUADRO = 260;
const TAMANO_PELOTA = 40;

// Límite máximo que puede recorrer el CENTRO de la pelota sin salirse
// visualmente del cuadro (la mitad del cuadro menos la mitad de la pelota)
const LIMITE = (TAMANO_CUADRO - TAMANO_PELOTA) / 2;

export default function BalanceGame() {
    // Posición de la pelota relativa al CENTRO del cuadro (0,0 = centro exacto)
    // Este estado solo sirve para "dibujar" la pelota; la lógica real vive en los refs de abajo.
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });
    const [perdiste, setPerdiste] = useState(false);

    // Usamos useRef (no useState) para velocidad y posición real porque el
    // listener del sensor se dispara muchísimas veces por segundo, y no
    // queremos que cada lectura dispare un re-render extra de React.
    const velocidad = useRef({ x: 0, y: 0 });
    const posicionActual = useRef({ x: 0, y: 0 });
    const juegoActivo = useRef(true);

    useEffect(() => {
        // --- Parámetros de la física del juego (puedes ajustarlos) ---
        const SENSIBILIDAD = 800; // qué tanto empuja la inclinación a la pelota
        const FRICCION = 0.95;    // frena la pelota poco a poco (simula rozamiento)
        const DT = 0.016;         // duración aproximada de un frame (1/60 seg)

        const subscribir = Accelerometer.addListener(({ x, y }) => {
            // Si ya perdió, ignoramos nuevas lecturas hasta que reinicie
            if (!juegoActivo.current) return;

            // x del sensor = inclinar izquierda/derecha -> mueve la pelota en X
            // y del sensor = inclinar hacia adelante/atrás -> mueve la pelota en Y
            // (el signo de "y" se invierte porque se siente más natural al jugar)
            velocidad.current.x += x * SENSIBILIDAD * DT;
            velocidad.current.y += -y * SENSIBILIDAD * DT;

            // Aplicamos fricción en cada frame para que no acelere sin control
            velocidad.current.x *= FRICCION;
            velocidad.current.y *= FRICCION;

            // Calculamos la posición candidata a partir de la velocidad actual
            const nuevaX = posicionActual.current.x + velocidad.current.x * DT;
            const nuevaY = posicionActual.current.y + velocidad.current.y * DT;

            // Si la nueva posición se saldría del cuadro, la pelota "se cae"
            if (Math.abs(nuevaX) > LIMITE || Math.abs(nuevaY) > LIMITE) {
                juegoActivo.current = false;
                setPerdiste(true);
                return;
            }

            // Si sigue dentro del límite, actualizamos posición real y la de pantalla
            posicionActual.current = { x: nuevaX, y: nuevaY };
            setPosicion({ x: nuevaX, y: nuevaY });
        });

        // Leemos el sensor ~60 veces por segundo para que el movimiento se sienta fluido
        Accelerometer.setUpdateInterval(16);

        // Limpieza: se remueve el listener al desmontar el componente
        return () => subscribir.remove();
    }, []);

    // Regresa la pelota al centro y reactiva el juego
    const reiniciar = () => {
        velocidad.current = { x: 0, y: 0 };
        posicionActual.current = { x: 0, y: 0 };
        juegoActivo.current = true;
        setPosicion({ x: 0, y: 0 });
        setPerdiste(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Equilibra la pelota</Text>

            <View style={styles.cuadro}>
                {!perdiste && (
                    <View
                        style={[
                            styles.pelota,
                            {
                                // Trasladamos la pelota desde el centro del cuadro
                                // según la posición calculada por la física de arriba
                                transform: [
                                    { translateX: posicion.x },
                                    { translateY: posicion.y },
                                ],
                            },
                        ]}
                    />
                )}

                {perdiste && <Text style={styles.mensajePerdio}>¡Se cayó!</Text>}
            </View>

            <TouchableOpacity style={styles.boton} onPress={reiniciar}>
                <Text style={styles.botonTexto}>Reiniciar</Text>
            </TouchableOpacity>

            <Text style={styles.hint}>Inclina el teléfono para mover la pelota</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#efefef",
        padding: 25,
    },
    titulo: {
        fontSize: 28,
        marginBottom: 30,
        color: "#3a4a5a",
        fontWeight: "bold",
    },
    cuadro: {
        width: TAMANO_CUADRO,
        height: TAMANO_CUADRO,
        borderWidth: 4,
        borderColor: "#3a4a5a",
        borderRadius: 12,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    pelota: {
        width: TAMANO_PELOTA,
        height: TAMANO_PELOTA,
        borderRadius: TAMANO_PELOTA / 2,
        backgroundColor: "#ff5c5c",
        position: "absolute",
    },
    mensajePerdio: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#e74c3c",
    },
    boton: {
        marginTop: 25,
        backgroundColor: "#3a4a5a",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    botonTexto: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    hint: {
        marginTop: 15,
        fontSize: 13,
        color: "#666",
    },
});