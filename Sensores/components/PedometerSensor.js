import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function PedometerSensor (){
    const [pasos, setPasos] = useState(0);
    const [disponible, setDisponible] = useState(false);
    const [permisoConcedido, setPermisoConcedido] = useState(null); // null = aún no se sabe

    useEffect(
        ()=>{
            let subscribir;
            const iniciar = async () =>{
                const disponible = await Pedometer.isAvailableAsync();
                setDisponible(disponible);

                if(!disponible){
                    return;
                }

                // En Android 10+ el sensor de pasos requiere el permiso
                // ACTIVITY_RECOGNITION en tiempo de ejecución. Sin pedirlo
                // (y que el usuario lo acepte), watchStepCount nunca dispara.
                const { status } = await Pedometer.requestPermissionsAsync();
                const concedido = status === 'granted';
                setPermisoConcedido(concedido);

                if(concedido){
                    subscribir = Pedometer.watchStepCount(
                        result => {setPasos(result.steps)}
                    );
                }
            };

            iniciar();

            return() =>{
                if(subscribir){
                    subscribir.remove();
                }
            };

        },[]
    );

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Pedómetro
            </Text>
            <View style={style.card}>
                <Text style={style.axis}>Disponible</Text>
                <Text style={style.value}>{disponible ? 'SI' : 'NO'}</Text>
            </View>
            <View style={style.card}>
                <Text style={style.axis}>Permiso</Text>
                <Text style={style.value}>
                    {permisoConcedido === null ? '...' : permisoConcedido ? 'SI' : 'NO'}
                </Text>
            </View>
            <View style={style.card}>
                <Text style={style.axis}>Pasos</Text>
                <Text style={style.value}>{pasos}</Text>
            </View>

            {disponible && permisoConcedido === false && (
                <Text style={style.aviso}>
                    Necesitas aceptar el permiso de "Actividad física" para
                    que se detecten los pasos. Actívalo en Ajustes del
                    teléfono para Expo Go y vuelve a abrir la app.
                </Text>
            )}

            {!disponible && (
                <Text style={style.aviso}>
                    Este dispositivo no tiene sensor de pasos disponible
                    (los emuladores normalmente no lo tienen).
                </Text>
            )}
        </View>

    );

}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding: 25,
        backgroundColor: "#efefef"
    },

    title: {
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 35,
        color: "#3a4a5a"
    },

    card: {
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

    aviso: {
        marginTop: 10,
        fontSize: 14,
        color: '#e74c3c',
        textAlign: 'center',
    },
});
