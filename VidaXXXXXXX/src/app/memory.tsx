import { MemoryGameScreen } from '@/screen/memory-game-screen';

// Ruta "/memory" de expo-router. Aparece en el Drawer como "Memorama"
// (ver src/navigation/drawer-items.ts). La pantalla real vive en
// src/screen/memory-game-screen.tsx.
export default function MemoryRoute() {
  return <MemoryGameScreen />;
}
