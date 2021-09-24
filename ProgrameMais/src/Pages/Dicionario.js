import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dici from '../components/DicionarioList';

function Dicionario(props) {

  //crio uma função para capturar os dados do Banco;
  //Guardar em uma variavel os dados retornados
  //Remderizae os daods em tela

  const {navigation} = props;

  const [dici, setDici] = useState([]);

  useEffect( () => {
    const request = {
        "id": "",
        "palavra": "",
        "descricao": ""
    }

    axios.post('http://192.168.100.57/tcc/dicionario/consultarPY', request)
        .then(resposta =>{
          setDici(resposta.data.dados)
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

const styles= StyleSheet.create({
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 20,
  },
  dicionario:{
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

export default Dicionario;