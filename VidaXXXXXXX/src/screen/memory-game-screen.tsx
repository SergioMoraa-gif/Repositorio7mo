import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Memorama
//
// Acá va a vivir, paso a paso:
// - Estado: el mazo de cartas (valor + boca arriba/abajo/emparejada),
//   qué cartas están seleccionadas ahora mismo, cuántos intentos/pares.
// - Lógica pura (sin JSX) en src/utils/memory-game.ts, ej. buildDeck(pairs)
//   para armar y barajar el mazo, e isMatch(a, b) para comparar dos cartas.
// - UI: un grid de cartas (se puede crear un componente reusable, ej.
//   src/components/memory-card.tsx) con animación de "flip".
export function MemoryGameScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Memorama</ThemedText>
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
