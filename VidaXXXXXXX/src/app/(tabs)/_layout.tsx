import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { tabItems } from '@/navigation/tab-items';

// ESTE ARCHIVO ES EL "NavTab" que pedía el enunciado.
//
// Reemplaza al NativeTabs que traía la plantilla por defecto de Expo
// (src/components/app-tabs.tsx, ya eliminado) porque NativeTabs usa
// imágenes y el look nativo de cada plataforma, y en su lugar queríamos
// @expo/vector-icons como pide el enunciado. <Tabs> viene de expo-router
// y por debajo usa @react-navigation/bottom-tabs, así que cumple igual
// con "usar @react-navigation/bottom-tabs + @expo/vector-icons".
//
// Este layout vive en src/app/(tabs)/ (un route group), y desde el Drawer
// se referencia como la entrada "(tabs)" — ver src/navigation/drawer-items.ts.
export default function TabLayout() {
  return (
    <Tabs>
      {tabItems.map(({ name, label, icon, iconActive }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: label,
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name={focused ? iconActive : icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
