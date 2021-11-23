import { Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from "../../Config/config.json";
import styles from '../../assets/CSS/stylesCss';
import NovidadesList from '../components/NovidadesList';

function Novidades(props) {
  //Cria uma função para pegar os dados do banco;
  //Guardo e exibo os resultados em tela

  const {navigation} = props;

  const [news, setNews] = useState([]);//Uso os state para manipular os dados

  useEffect(()=>{//Faço uma busca na nossa api que vai no banco e nos tras os dadso requisitados
    axios.get(config.urlNode+"novidades")//Acesso o back aatravés do axios
    .then(response=>{//Se der certo salva as infomações em setGuia que passa tudo para guia
        setNews(response.data);
    }).catch(error=>{//Se der errado
      console.log(`Ocorreu um erro! ${error}`);
    });

  },[]);

  return(
    <ScrollView>
      <View>
            <View style={styles.divisao}>
              <Text style={styles.textCompo}>Leia Novidades Do Mundo da Tecnologia</Text>
            </View>
  
            <View>
              <NovidadesList news={news} navigation={navigation}/>   
            </View>
      </View>
    </ScrollView>
    
  )
}

export default Novidades;