import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator} from 'react-native';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    ()=>{
      fetch("http://localhost:4000/movies")
      .then((res)=>res.json())
      .then((data)=>{
        setMovies(data);
        setLoading(false);
      })
      .catch(
        (error)=>console.log(error)
      );
    }, []
  );

  if(loading){
    return(
      <View>
        <ActivityIndicator size="large" color="#07f"/>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View>
      {item.poster ? (
        <Image source={{uri:item.poster}}/>
      ) : (
      <View>
        <Text>No Imagen</Text>
      </View>

      )}
      <View>
        <Text>{item.title}</Text>
        <Text>{item.fullplot || "sin descripcion"}</Text>
      </View>

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
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
});
