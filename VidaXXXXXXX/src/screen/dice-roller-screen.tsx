import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Lanzar dados
//
// Acá va a vivir, paso a paso:
// - Estado: cuántos dados se lanzan, el valor actual de cada uno, y si
//   está "lanzando" (para animar).
// - Lógica pura (sin JSX) en src/utils/dice.ts, ej. rollDice(count).
// - UI: un botón "Lanzar" + una carita/número por dado. Se puede animar
//   el lanzamiento con react-native-reanimated (ya está instalado y hay
//   un ejemplo de uso en src/components/animated-icon.tsx).
export function DiceRollerScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Lanzar dados</ThemedText>
      <ThemedText>Acá va la lógica y la UI de este juego.</ThemedText>
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
