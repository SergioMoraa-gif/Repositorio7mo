import { View, Image, ImageBackground, StyleSheet, Dimensions, Text } from "react-native";

const DemoImagen = () =>{
    return(
        <View style={styles.container}>
            <ImageBackground
            style={styles.fondo}
            source={require('../assets/arbol_fondo.jpg')}
            >
                <View style={styles.container}>
                    <Text style={styles.texto}>CATS</Text>
                    <Image
                    style={styles.foto}
                    source={{uri:'https://http.cat/images/101.jpg'}}
                />
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  foto:{
    width:200,
    height:200,
    borderRadius: 16,
    borderWidth: 10,
    borderColor:'#970101',
    shadowColor:'#444',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    elevation: 8,
  },
  texto: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    width: '100%',
    textAlign: 'center',
    zIndex: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DemoImagen;
