import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './Componentes/Banner';
import RepText from './Componentes/ReplicaTexto';

export default function App() {
  return (
    <View style={styles.container}>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel1:{
    flex: 1,
    backgroundColor: '#0077ff'
  },
  panel2:{
    flex: 1,
    backgroundColor: '#00ff48'
  },
  panel3:{
    flex: 1,
    backgroundColor: '#ff0000'
  },
});
