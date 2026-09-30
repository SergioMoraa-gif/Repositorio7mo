import { TipCalculatorScreen } from '@/screen/tip-calculator-screen';

// Ruta "/tip-calculator" de expo-router. Aparece en el Drawer como
// "Calcular propina" (ver src/navigation/drawer-items.ts). La pantalla
// real vive en src/screen/tip-calculator-screen.tsx.
export default function TipCalculatorRoute() {
  return <TipCalculatorScreen />;
}
