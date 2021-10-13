import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dici from '../components/DicionarioList';
import config from "../../Config/config.json";
import styles from '../../assets/CSS/stylesCss';

function Dicionario(props) {

  //crio uma função para capturar os dados do Banco;
  //Guardar em uma variavel os dados retornados
  //Remderizae os daods em tela

  const {navigation} = props;

  const [dici, setDici] = useState([]);

  useEffect( () => {
    axios.get(config.urlNode+"dicionario")
        .then(resposta =>{
          setDici(resposta.data)
        }).catch(err =>{
          console.log("Ocorreu um erro" + err)
        });
  }, []);
  
    return (
        <ScrollView>

        <View>
          <View style={styles.divisao}>
              <Text style={styles.text}>Dicionario</Text>
          </View>

          <View style={styles.divisao}>
            <Text style={styles.dicionario}>Ache termos que você precisa</Text>
          </View>

          <View>
              
            <Dici dici={dici} navigation={navigation}/>

          </View>

        </View>

      </ScrollView>
    )
}

export default Dicionario;