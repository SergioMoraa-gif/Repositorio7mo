import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Conversión de divisas
//
// Importante: SIN ninguna API externa — las tasas van fijas en el código,
// en src/utils/currency-rates.ts.
//
// Acá va a vivir, paso a paso:
// - Estado: monto a convertir, moneda de origen, moneda de destino.
// - Lógica pura (sin JSX) en src/utils/currency-rates.ts, ej. convert(amount,
//   from, to) usando una tabla de tasas fijas respecto a una moneda base.
// - UI: un input numérico + dos selects/pickers de moneda + el resultado.
export function CurrencyConverterScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Conversión de divisas</ThemedText>
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
