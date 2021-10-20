import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function InfoParceiro({route}){

  const {partner} = route.params;

  return(
    <View style={styles.container}>
        <Text>Parceiro: {partner.nome_parceiro}</Text>
        <Text>descricao: {partner.descricao_parceiro}</Text>
    </View>
  );
}

export default InfoParceiro;