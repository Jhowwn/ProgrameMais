import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Palavras({route}){

  const {dicionario} = route.params;

   console.log(dicionario)

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


const styles = StyleSheet.create({
  container:{
    padding: 10,
  }
});

export default Palavras;