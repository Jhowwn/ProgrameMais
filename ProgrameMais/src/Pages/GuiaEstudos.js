import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GuiaList from '../components/GuiaList';
import config from "../../Config/config.json";
import styles from '../../assets/CSS/stylesCss';

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
              <Text style={styles.cronograma}>Cronograma</Text>
          </View>

          <View>
              <GuiaList guia={guia} navigation={navigation}/>
          </View>
          
        </View>
      </ScrollView>
    );
}

export default GuiaEstudos;