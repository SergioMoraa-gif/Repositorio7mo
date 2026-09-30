import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Calcular propina
//
// Acá va a vivir, paso a paso:
// - Estado: total de la cuenta, porcentaje de propina (¿fijo o
//   personalizable?), cantidad de personas para dividir la cuenta.
// - Lógica pura (sin JSX) en src/utils/tip-calculator.ts, ej.
//   calculateTip(total, percentage, people).
// - UI: inputs numéricos + botones de porcentaje rápido (10%, 15%, 20%)
//   + el resultado (propina y total por persona).
export function TipCalculatorScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Calcular propina</ThemedText>
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
