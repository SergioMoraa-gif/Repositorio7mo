import type { ComponentProps } from 'react';
import type { Ionicons } from '@expo/vector-icons';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

export type DrawerItem = {
  /**
   * Debe coincidir EXACTAMENTE con el nombre de archivo/carpeta de ruta
   * dentro de src/app (sin extensión). Es lo que expo-router usa para
   * decidir qué pantalla renderiza cada entrada del Drawer.
   */
  name: string;
  /** Texto que se ve en el menú lateral y en el header. */
  label: string;
  /** Nombre de icono de Ionicons (de @expo/vector-icons). */
  icon: IoniconName;
};

// Este archivo es la "fuente de la verdad" de qué aparece en el Drawer
// (NavDrawer) y con qué ícono. src/app/_layout.tsx solo lo recorre y arma
// un <Drawer.Screen> por cada entrada — así, para agregar/quitar una
// pantalla del menú lateral, se edita esta lista y no el layout.
//
// "(tabs)" no es una pantalla suelta: es el grupo de rutas que arma el
// NavTab (bottom tabs) — ver src/app/(tabs)/_layout.tsx y src/navigation/tab-items.ts.
export const drawerItems: DrawerItem[] = [
  { name: '(tabs)', label: 'Inicio', icon: 'home-outline' },
  { name: 'dice', label: 'Lanzar dados', icon: 'dice-outline' },
  { name: 'memory', label: 'Memorama', icon: 'grid-outline' },
  { name: 'tic-tac-toe', label: 'Tic Tac Toe', icon: 'apps-outline' },
  { name: 'currency-converter', label: 'Conversión de divisas', icon: 'cash-outline' },
  { name: 'tip-calculator', label: 'Calcular propina', icon: 'calculator-outline' },
  { name: 'bmi-calculator', label: 'Calcular IMC', icon: 'body-outline' },
  { name: 'shopping-list', label: 'Lista del súper', icon: 'cart-outline' },
];
