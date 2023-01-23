import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";

var timer = null
var ss = 0
var mm= 0
var hh = 0
export default function App() {
  
  const[number,setNumber]= useState(`00:00:00`)
  const[button,setButton]= useState("iniciar")
  const[last,setLast]= useState(null)

  function start() {
   
    if(timer !== null){
      clearInterval(timer)
      timer = null
      setButton("Iniciar")
    }else{
      timer = setInterval(() => {
        ss++
  
        if(ss == 60){
          ss= 0
          mm++

        }
        if(mm ==60){
          mm = 0
          hh++
        }

        let format = (hh <10? "0"+hh:hh) + ":"+ (mm <10? "0"+mm:mm) + ":" + (ss <10? "0"+ss:ss)
        setNumber(format)
      }, 100);
      setButton("Parar")
    }
   
   
    
  }
  function clear() {
    if(timer !== null){
      clearInterval(timer)
      timer = null
      
  }
  setLast(number)
  setNumber(`00:00:00`)
  ss = 0
  mm = 0
  hh = 0

  setButton("Iniciar")
}
  
  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/crono.png")} style={styles.img} />

      <Text style={styles.timer}>{number}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnText}> {button}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={clear}> Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{last?"Ultimo Tempo"+ last:""}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginTop: 10,
  },
  timer: {
    fontSize: 40,
    marginTop: -160,
    fontWeight: "bold",
    color: "#FFF",
  },
  btnArea: {
    marginTop: 120,
    height: 40,
    flexDirection: "row",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
    height: 40,
    margin: 15,
    borderRadius: 15,
  },
  btnText: {
    fontWeight: "bold",
    color: "#808080",
    fontSize: 18,
  },
  footer: {
    marginTop: 50,
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
  },
});
