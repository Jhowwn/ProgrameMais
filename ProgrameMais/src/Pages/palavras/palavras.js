import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function Palavras({route}){

  const {dicionario} = route.params;

  return(
    <View style={styles.container}>
        <Text>Palavra: {dicionario.palavra}</Text>
        <Text>descricao: {dicionario.descricao}</Text>
        <Text>exemplos: {dicionario.exep_python}</Text>
        <Text>exemplos: {dicionario.exep_java}</Text>
        <Text>exemplos: {dicionario.exep_javascript}</Text>
    </View>
  );
}

export default Palavras;