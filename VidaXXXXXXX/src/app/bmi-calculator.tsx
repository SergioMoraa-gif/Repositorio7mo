import { BmiCalculatorScreen } from '@/screen/bmi-calculator-screen';

// Ruta "/bmi-calculator" de expo-router. Aparece en el Drawer como
// "Calcular IMC" (ver src/navigation/drawer-items.ts). La pantalla real
// vive en src/screen/bmi-calculator-screen.tsx.
export default function BmiCalculatorRoute() {
  return <BmiCalculatorScreen />;
}
