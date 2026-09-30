import { TicTacToeScreen } from '@/screen/tic-tac-toe-screen';

// Ruta "/tic-tac-toe" de expo-router. Aparece en el Drawer como
// "Tic Tac Toe" (ver src/navigation/drawer-items.ts). La pantalla real
// vive en src/screen/tic-tac-toe-screen.tsx.
export default function TicTacToeRoute() {
  return <TicTacToeScreen />;
}
