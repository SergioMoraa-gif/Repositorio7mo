import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Calcular IMC (Índice de Masa Corporal)
//
// Acá va a vivir, paso a paso:
// - Estado: peso (kg) y altura (m o cm).
// - Lógica pura (sin JSX) en src/utils/bmi-calculator.ts, ej.
//   calculateBmi(weightKg, heightM) y getBmiCategory(bmi).
// - UI: dos inputs numéricos + el resultado (número + categoría:
//   bajo peso / normal / sobrepeso / obesidad).
export function BmiCalculatorScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Calcular IMC</ThemedText>
      <ThemedText>Acá va la lógica y la UI de esta calculadora.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
});
