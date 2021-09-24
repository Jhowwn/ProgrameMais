import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import {Button} from 'react-native-paper';
import axios from 'axios';
import DesafiosList from '../components/DesafiosList.js'
import Questionario from "./Questionario.js"


function Desafios(props) {

   //crio uma função para capturar os dados do Banco;
  //Guardar em uma variavel os dados retornados
  //Remderizae os daods em tela

  const {navigation} = props;

  const [desafio, setDesafio] = useState([]);

  useEffect( () => {
    const request = {
      "perguntas": "",
      "alternativas": "",
    }

      axios.post('http://192.168.100.57/tcc/questionario/questionarioBasico', request)
      .then(resposta =>{
        setDesafio(resposta.data.dados)
      }).catch(err =>{
        console.log("Ocorreu um erro" + err)
      });
  }, []);

  console.log(desafio);
    return (
      <ScrollView>

        <View>
          <View style={styles.divisao}>
              <Text style={styles.text}>Desafios</Text>
          </View>

          <View style={styles.container}>
            <View>

              {/*<Text style={styles.desafios}>Python: 0 a 10 Perguntas</Text>

              <DesafiosList desafio={desafio} navigation={navigation}/>
            
              <Text style={styles.desafios}>JavaScript: 0 a 10 Perguntas</Text>
            
    <Text style={styles.desafios}>Java: 0 a 10 Perguntas</Text>*/}
          <Button style={styles.btn} mode="contained" 
          onPress={()=>navigation.navigate("Questionário", {text: "Python"})}>
              Python
          </Button>
          <Button style={styles.btn} mode="contained" 
          onPress={()=>navigation.navigate("Questionário", {text: "Javascript"})}>
              JavaScript
          </Button>
          <Button style={styles.btn} mode="contained" 
          onPress={()=>navigation.navigate("Questionário", {text: "Java"})}>
              Java
          </Button>

            </View>

          </View>
          
          <View style={styles.divisao}>
            <Text style={styles.total}>Pontuação Total:
            Porcentagem de acertos</Text>
          </View>

        </View>
      </ScrollView>
    );
}

const styles= StyleSheet.create({
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 20,
  },
  desafios:{
    fontSize: 20,
    color: '#0f0a0a',
    padding: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  total:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 30,
  },
  divisao:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: '#E2F9FF',
    borderBottomColor:"#bbb",
    borderBottomWidth: 4
  },
  btn:{
    margin: 10,
    padding: 10
  }
});

export default Desafios;