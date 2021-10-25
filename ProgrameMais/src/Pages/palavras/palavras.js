import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function Palavras({route}){

  const {dicionario} = route.params;

  return(
    <View style={styles.container}>
        <Text style={styles.palavraNome}>Palavra: {dicionario.palavra}</Text>
        <Text style={styles.palavrasDescricao}>descricao: {dicionario.descricao}</Text>
        {dicionario.exep_python !== "" && <Text style={styles.boxExep}>exemplo Python: {dicionario.exep_python}</Text>}
        {dicionario.exep_python !== "" && <Text style={styles.boxExep}>exemplo Java: {dicionario.exep_java}</Text>}
        {dicionario.exep_python !== "" && <Text style={styles.boxExep}>exemplo JavaScript: {dicionario.exep_javascript}</Text>}
    </View>
  );
}

export default Palavras;