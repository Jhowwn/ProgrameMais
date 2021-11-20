import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function Palavras({route}){

  const {dicionario} = route.params;//Pegando a palvra via paramnetro e armazenando em dicionario

  return(
    <ScrollView>{/*utiliza para poder subir e descer caso necessário */}
      <View style={styles.containerPala}>{/*Criando um container para exibir os dados  */}
          <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
            <Text style={styles.palavrasDescricao}>Descrição: {dicionario.descricao}</Text>{ /*Exibo os dados em texts */}
          </View>
            {dicionario.exep_python !== "" && /*Caso Não tenha nada, se tiver será renderizado */ 
            <View style={styles.palaColor1}>
              <Text style={styles.boxExep}>exemplo Python: {dicionario.exep_python}</Text>
            </View>}
            {dicionario.exep_java !== "" && 
            <View style={styles.palaColor2}>
              <Text style={styles.boxExep}>exemplo Java: {dicionario.exep_java}</Text>
            </View>}
            {dicionario.exep_java !== "" &&
            <View style={styles.palaColor3}>
              <Text style={styles.boxExep}>exemplo JavaScript: {dicionario.exep_javascript}</Text>
            </View>}
      </View>
    </ScrollView>
  );
}

export default Palavras;