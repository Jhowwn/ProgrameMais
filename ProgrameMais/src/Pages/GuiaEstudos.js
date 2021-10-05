import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GuiaList from '../components/GuiaList';
import config from "../../Config/config.json";

function GuiaEstudos(props) {
  //Cria uma função para pegar os dados do banco;
  //Guardo e exibo os resultados em tela
  const {navigation} = props;
  const [guia, setGuia] = useState([]);

  useEffect(() => {
      axios.get(config.urlNode+"guiaEstudos")
      .then(resposta =>{
        setGuia(resposta.data)
      }).catch(err =>{
        console.log("Ocorreu um erro" + err)
      });

  },[]);

  console.log(guia)

    return (
      <ScrollView>
        <View>
          <View style={styles.divisao}>
              <Text style={styles.text}>Guia de Estudos</Text>
          </View>
          <View style={styles.divisao}>
              <Text style={styles.cronograma}>Cronograma</Text>
          </View>

          <View>
              <GuiaList guia={guia} navigation={navigation}/>
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
  cronograma:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 20,
  },
  divisao:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: '#E2F9FF',
    borderBottomColor:"#bbb",
    borderBottomWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  });
  

export default GuiaEstudos;