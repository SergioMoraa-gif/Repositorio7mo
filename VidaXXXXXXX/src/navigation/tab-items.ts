import type { ComponentProps } from 'react';
import type { Ionicons } from '@expo/vector-icons';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

export type TabItem = {
  /** Nombre de archivo de ruta dentro de src/app/(tabs), sin extensión. */
  name: string;
  label: string;
  /** Ícono cuando el tab NO está activo. */
  icon: IoniconName;
  /** Ícono cuando el tab SÍ está activo (normalmente la versión "filled"). */
  iconActive: IoniconName;
};

// Igual que drawer-items.ts, pero para el NavTab (bottom tabs) que vive
// dentro del grupo "(tabs)". src/app/(tabs)/_layout.tsx recorre esta lista
// para armar cada <Tabs.Screen>.
export const tabItems: TabItem[] = [
  { name: 'index', label: 'Home', icon: 'home-outline', iconActive: 'home' },
  { name: 'explore', label: 'Explore', icon: 'compass-outline', iconActive: 'compass' },
];
