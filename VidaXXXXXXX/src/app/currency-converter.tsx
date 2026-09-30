import { CurrencyConverterScreen } from '@/screen/currency-converter-screen';

// Ruta "/currency-converter" de expo-router. Aparece en el Drawer como
// "Conversión de divisas" (ver src/navigation/drawer-items.ts). Recordar:
// SIN API externa — las tasas van fijas en src/utils/currency-rates.ts.
export default function CurrencyConverterRoute() {
  return <CurrencyConverterScreen />;
}
