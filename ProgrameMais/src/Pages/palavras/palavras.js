import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function Palavras({route}){

  const {dicionario} = route.params;

  return(
    <View style={styles.container}>
        <Text style={styles.palavrasDescricao}>descricao: {dicionario.descricao}</Text>
        <View style={styles.containerExi}>
          <View style={styles.containerExi}>
          {dicionario.exep_python !== "" && <Text style={styles.boxExep}>exemplo Python: {dicionario.exep_python}</Text>}
          </View>
          <View style={styles.containerExi}>
          {dicionario.exep_java !== "" && <Text style={styles.boxExep}>exemplo Java: {dicionario.exep_java}</Text>}
          </View>
          <View style={styles.containerExi}>
          {dicionario.exep_javascript !== "" && <Text style={styles.boxExep}>exemplo JavaScript: {dicionario.exep_javascript}</Text>}
          </View>
        </View>
    </View>
  );
}

export default Palavras;