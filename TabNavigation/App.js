import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContaine } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './Screens.jsx/ProfileScreen';
import SearchScreen from './Screens.jsx/SearchScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          ScreenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
            name="Inicio"
            component={HomeScreen}
        />
          <Tab.Screen
              name="Buscar"
              component={SearchScreen}
          />
            <Tab.Screen
              name="Perfil"
              component={ProfileScreen}
            />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator();

