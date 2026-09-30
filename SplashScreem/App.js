import { useEffect, useSte } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SplashScreen() {
  return (
    <View style={StyleSheet.Splash}>
      <Text style={StyleSheet.logo}>
        ✨
      </Text>
      <Text style={StyleSheet.title}>
        Mi Aplicación
      </Text>
      <Text>
        Cargando...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({

  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    fontSize: 80
  },

  title: {
    fontSize: 30
  },

  homeText: {
    fontSize: 30
  }
});