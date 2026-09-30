import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Tic Tac Toe
//
// Acá va a vivir, paso a paso:
// - Estado: el tablero (array de 9 celdas: 'X' | 'O' | null) y de quién
//   es el turno.
// - Lógica pura (sin JSX) en src/utils/tic-tac-toe.ts, ej.
//   checkWinner(board) y isBoardFull(board).
// - UI: una grilla de 3x3 (se puede crear src/components/tic-tac-toe-board.tsx)
//   y un botón "Reiniciar".
export function TicTacToeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Tic Tac Toe</ThemedText>
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
