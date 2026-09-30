import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { drawerItems } from '@/navigation/drawer-items';

// Evita que la splash screen nativa se oculte sola apenas el JS arranca.
// Se llama en scope global (no dentro de un componente/hook) porque si no,
// puede llamarse demasiado tarde y la splash parpadea.
// AnimatedSplashOverlay es quien decide cuándo llamar a SplashScreen.hideAsync()
// (ver src/components/animated-icon.tsx).
SplashScreen.preventAutoHideAsync();

// ESTE ARCHIVO ES EL "NavDrawer" que pedía el enunciado.
//
// Es el layout raíz de toda la app (expo-router lo carga automáticamente
// porque se llama _layout.tsx dentro de src/app). Como usamos expo-router
// (ruteo por archivos), el Drawer no se arma a mano con
// NavigationContainer + Drawer.Navigator: se declara acá, y cada
// <Drawer.Screen name="..."> apunta a un archivo o carpeta dentro de
// src/app con ese mismo nombre.
//
// "(tabs)" es una carpeta de ruta especial (route group): agrupa varias
// pantallas bajo su propio navegador (el NavTab) sin agregar un segmento
// a la URL. Ver src/app/(tabs)/_layout.tsx.
//
// Las demás entradas (dice, memory, tic-tac-toe, etc.) son archivos sueltos
// dentro de src/app/ — cada uno es un placeholder por ahora (ver el punto
// 5 del plan: primero el andamiaje, después la lógica de cada uno).
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Drawer screenOptions={{ headerShown: true }}>
        {drawerItems.map(({ name, label, icon }) => (
          <Drawer.Screen
            key={name}
            name={name}
            options={{
              drawerLabel: label,
              title: label,
              drawerIcon: ({ color, size }) => <Ionicons name={icon} size={size} color={color} />,
            }}
          />
        ))}
      </Drawer>
    </ThemeProvider>
  );
}
