import React,{} from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <Image
  source={require("./src/assets/crono.png")}
  style={styles.img}/>
 
  <Text style={styles.timer}>00;00;00</Text>
  
  <View style={styles.btnArea}>
   <TouchableOpacity style={styles.btn}>
   <Text style={styles.btnText}> Iniciar
   </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btn}>
  <Text style={styles.btnText}> Parar
  </Text>
 </TouchableOpacity>
  </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
  marginTop:130
  },
  timer:{
    fontSize:40,
    marginTop:-160,
    fontWeight:'bold',
    color: "#FFF"
  },
  btnArea:{
    flex:1,
    marginTop:130,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
