import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DemoImagen from './componentes/DemoImagen';

export default function App() {
  return (
    <View style={styles.container}>
        <DemoImagen/>
        <StatusBar style="auto" translucent backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
})