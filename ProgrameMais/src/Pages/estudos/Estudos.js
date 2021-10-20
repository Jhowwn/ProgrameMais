import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function Estudos({route}){

  const {estudos} = route.params;

  return(
    <View style={styles.container}>
        <Text>Guia: {estudos.nome_guia}</Text>
        <Text>descricao: {estudos.descricao_guia}</Text>
    </View>
  );
}

export default Estudos;