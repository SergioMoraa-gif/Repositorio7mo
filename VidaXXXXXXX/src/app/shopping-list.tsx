import { ShoppingListScreen } from '@/screen/shopping-list-screen';

// Ruta "/shopping-list" de expo-router. Aparece en el Drawer como
// "Lista del súper" (ver src/navigation/drawer-items.ts). Recordar:
// SOLO en memoria (useState/useReducer) — sin AsyncStorage ni disco.
export default function ShoppingListRoute() {
  return <ShoppingListScreen />;
}
