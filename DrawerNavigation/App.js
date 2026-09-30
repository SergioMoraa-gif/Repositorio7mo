import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Componentes/HomeScreen';
import ProfileScreen from './Componentes/ProfileScreen';
import SearchScreen from './Componentes/SearchScreen';
import SettingsScreen from './Componentes/SettingsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inicio"
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Buscar"
        component={SearchScreen}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="Ajustes"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <MyDrawer />
    </NavigationContainer>
  );
}