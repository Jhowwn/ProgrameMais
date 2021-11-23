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
  const [guia, setGuia] = useState([]);//Uso os state para manipular os dados

  useEffect( () => { //Faço uma busca na nossa api que vai no banco e nos tras os dadso requisitados
      axios.get(config.urlNode+"guiaEstudos")//Acesso o back aatravés do axios
      .then(resposta =>{//Se der certo salva as infomações em setGuia que passa tudo para guia
        setGuia(resposta.data)
      }).catch(err =>{//Se der errado
        console.log("Ocorreu um erro" + err)
      });

  },[]);

    return (
      <ScrollView>{/*Construo a estrutura que será exibido os dados */}
        <View>
          <View style={styles.divisao}>
              <Text style={styles.textCompo}>Cronograma para seus estudos</Text>
          </View>

          <View>
              <GuiaList guia={guia} navigation={navigation}/>{/*Mando as informações para o componente guia para tratar lá */}
          </View>
          
        </View>
      </ScrollView>
    );
}

export default GuiaEstudos;