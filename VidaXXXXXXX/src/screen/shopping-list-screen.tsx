import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// PANTALLA: Lista del súper
//
// Importante: SOLO en memoria — useState/useReducer dentro de este
// componente. Sin AsyncStorage, SQLite ni ningún tipo de persistencia en
// disco (si la app se cierra, la lista se pierde, y está bien así).
//
// Acá va a vivir, paso a paso:
// - Estado: array de ítems (nombre, cantidad, comprado sí/no) usando
//   useState o useReducer.
// - Tipo compartido en src/utils/shopping-list.ts (ej. ShoppingListItem),
//   sin lógica de storage.
// - UI: input + botón "Agregar", una lista (FlatList) con checkbox para
//   marcar comprado y botón para eliminar cada ítem.
export function ShoppingListScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Lista del súper</ThemedText>
      <ThemedText>Acá va la lógica y la UI de esta lista.</ThemedText>
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
