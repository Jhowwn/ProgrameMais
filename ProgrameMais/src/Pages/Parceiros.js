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
  //console.log(navigation)

  const [listState, setListState] = useState([]);

  useEffect(()=>{
    axios.get(config.urlNode+"parceiros")
    .then(response=>{
        setListState(response.data);
    }).catch(error=>{
      console.log(`Ocorreu um erro! ${error}`);
    });

  },[]);
  //console.info(listState);

  return(
    <ScrollView>
      <View>  
            <View style={styles.divisao}>
              <Text style={styles.parceiro}>Encontre um Parceiro para seus Estudos </Text>
            </View>
  
            <View>

              <ParceirosList parce={listState} navigation={navigation}/>
              
            </View>

      </View>
    </ScrollView>
    
  )
}

export default Parceiros