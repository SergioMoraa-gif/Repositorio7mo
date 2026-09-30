import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import CustomModal from './componentes/CustomModal';
import { FlatList } from 'react-native';

const Cursos= [
  {id: '1', titulo: 'Programacion movil', duracion:'10 horas', rating:'4.8'},
  {id: '2', titulo: 'IA para ingenieros', duracion:'20 horas', rating:'4.9'},
  {id: '3', titulo: 'Aplicaciones Web', duracion:'18 horas', rating:'4.2'},
  {id: '4', titulo: 'Base de datos', duracion:'15 horas', rating:'5.0'},
  {id: '5', titulo: 'Office', duracion:'30 horas', rating:'4.6'},
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [curoSeleccionado, setCursoSeleccionado] = useState(null); 
  
const manejarPresionCurso = (tituloCurso) => {
  setCursoSeleccionado({Valor: tituloCurso})
  setModalVisible(true);
};

const renderCard = ({item}) => (
  <TouchableOpacity
    onPress = {()=>manejarPresionCurso(item.titulo)}
    activeOpacity={0.7}
  >
    <View style={styles.card}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.subtitule}>{item.duracion} | {item.rating}</Text>
    </View>
  </TouchableOpacity>
);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mis Cursos</Text>
      <FlatList
      data={Cursos}
      renderItem={renderCard}
      keyExtractor={item=>item.id}
      contentContainerStyle={styles.listContainer}
      />
      <CustomModal
        visible={modalVisible}
        onClose={()=>setModalVisible(false)}
        contenido={curoSeleccionado}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSIze: 24,
    fontWeight: '600',
    padding: 16,
    color: '#1a1a1a',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: '16',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitule:{
    fontSize: 14,
    color: '#aaa',
  },
});
