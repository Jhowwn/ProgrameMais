import React from 'react';
import {Text, View, Linking} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function Estudos({route}){

  const {estudos} = route.params;

  return(
    <View style={styles.container}>
        <Text style={styles.guiaDescricao}>descricao: {estudos.descricao_guia}</Text>
        <Text>Segue os links para mais informações</Text>
        <Text style={styles.guiaExep}>Link Python: <Text style={styles.linkGuia} onPress={() => Linking.openURL(estudos.link_python)} >{estudos.link_python}</Text></Text>
        <Text style={styles.guiaExep}>Link Java: <Text style={styles.linkGuia} onPress={() => Linking.openURL(estudos.link_java)} >{estudos.link_java}</Text></Text>
        <Text style={styles.guiaExep}s>Link JavaScript: <Text style={styles.linkGuia} onPress={() => Linking.openURL(estudos.link_javascript)} >{estudos.link_javascript}</Text></Text>
    </View>
  );
}

export default Estudos;