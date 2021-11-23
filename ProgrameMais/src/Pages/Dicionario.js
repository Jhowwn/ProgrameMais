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

  const [dici, setDici] = useState([]);//Uso os state para manipular os dados

  useEffect( () => {//Faço uma busca na nossa api que vai no banco e nos tras os dadso requisitados
    axios.get(config.urlNode+"dicionario")//Acesso o back aatravés do axios
        .then(resposta =>{
          setDici(resposta.data)//Se der certo salva as infomações em setDici que passa tudo para dici
        }).catch(err =>{//Se der errado
          console.log("Ocorreu um erro" + err)
        });
  }, []);
  
    return (
        <ScrollView>{/*Construo a estrutura que será exibido os dados */}

        <View style={styles.pageColor}>

          <View style={styles.divisao}>
            <Text style={styles.textCompo}>Encontre os termos que você precisa</Text>
          </View>

          <View>
              
            <Dici dici={dici} navigation={navigation}/>{/*Mando as informações para o componente dici para tratar lá */}

          </View>

        </View>

      </ScrollView>
    )
}

export default Dicionario;