import { Text, View, StyleSheet, ScrollView, Dimensions, FlatList} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ParceirosList from '../components/ParceirosList';
import config from "../../Config/config.json";
import styles from '../../assets/CSS/stylesCss';

function Parceiros(props) {
  //Cria uma função para pegar os dados do banco;
  //Guardo e exibo os resultados em tela

  const {navigation} = props;

  const [listState, setListState] = useState([]);//Uso os state para manipular os dados

  useEffect( () => {//Faço uma busca na nossa api que vai no banco e nos tras os dadso requisitados
    axios.get(config.urlNode+"parceiros")//Acesso o back aatravés do axios
    .then(response=>{//Se der certo salva as infomações em setGuia que passa tudo para guia
        setListState(response.data);
    }).catch(error=>{//Se der errado
      console.log(`Ocorreu um erro! ${error}`);
    });

  },[]);

  return(
    <ScrollView>
      <View>  
            <View style={styles.divisao}>
              <Text style={styles.textCompo}>Encontre um Parceiro para seus Estudos </Text>
            </View>
  
            <View>

              <ParceirosList parce={listState} navigation={navigation}/>
              
            </View>

      </View>
    </ScrollView>
    
  )
}

export default Parceiros