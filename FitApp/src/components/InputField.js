//Solamente se reciben props
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputField({ label, value, onChangeText, placeholder}) {
    return (
        <View style={styles.grupo}>
        <Text style={styles.label}>{label}</Text>

        <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
        />
    </View>
    );
}
const styles = styleSheet.create({
    grupo: {
        marginBottom: 16,           //Separa un Input del siguiente 
    },
    label: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        boderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
});
