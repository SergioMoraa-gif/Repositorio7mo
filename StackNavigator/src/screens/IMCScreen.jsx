import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

export default function ImcScreen(){
    const [peso, setPeso]=useState('');
    const [altura, setAltura]=useState('');
    const [resultado, setResultado]=useSatte(null);

    const calcularIMC = () =>{
        if(!peso||!altura) return;
        const imc= (parseFloat(peso)/(parseFloat(altura)*parseFloat(altura))).toFixed(2);
    };

    return (
        <View style={{flex:1, justifyContent:'center',padding:20}}> 
            <Text>Peso (kg):</Text>
            <TextInput
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                style={{boderWidth:1, marginBottom:10, padding: 5}}
            />
            <Text>Estatura (metros):</Text>
            <TextInput
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                style={{boderWidth:1, marginBottom:10, padding: 5}}
            />
            <Button
                tittle="Calcular IMC"
                onPress={calcularIMC}
            />
            {RESULTADO && <Text style={{marginTop:20, fontSize: 18}}>Tu IMC es: {readultado}</Text>}
        </View>
    );
}