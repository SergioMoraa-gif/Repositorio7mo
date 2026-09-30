import { DiceRollerScreen } from '@/screen/dice-roller-screen';

// Ruta "/dice" de expo-router. Aparece en el Drawer como "Lanzar dados"
// (ver src/navigation/drawer-items.ts). Este archivo se mantiene delgado
// a propósito: solo conecta la ruta con la pantalla real, que vive en
// src/screen/dice-roller-screen.tsx.
export default function DiceRoute() {
  return <DiceRollerScreen />;
}
