import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Palavras({route}){

  const {dicionario} = route.params;

   console.log(dicionario)

  return(
    <View style={styles.container}>
        <Text>Palavra: {dicionario.palavra}</Text>
        <Text>descricao: {dicionario.descricao}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  photo:{
    aspectRatio: 1
  },
  container:{
    padding: 10,
  }
});

export default Palavras;