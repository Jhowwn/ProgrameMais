import React from 'react';
import {Text, View, Linking} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function InfoParceiro({route}){

  const {partner} = route.params;

  return(
    <View style={styles.container}>
        <Text>descricao: {partner.descricao_parceiro}</Text>
        <Text>Link:<Text onPress={() => Linking.openURL(partner.link_parceiro)} style={styles.linkGuia}>{partner.link_parceiro}</Text></Text>
    </View>
  );
}

export default InfoParceiro;