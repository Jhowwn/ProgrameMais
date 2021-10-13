import React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import Box from '../components/Box';
import Novidades from '../components/Novidades';

function MainScreen(props) {

  const {navigation} = props;//cirando a navegação de telas.

  return (
    <ScrollView>
      <View>
        <View>
          <Text style={styles.text}>Escolha O Que Deseja Fazer</Text>
        </View>
        
        <View style={styles.container}>{/* Criando os dados para navegação para o componente box,
         sendo titulo e descrição*/}
          <Box titulo='Dicionário'
          descricao ='Proucure comandos e palavras que você precisar'
          navigation={navigation}/>
          
          <Box titulo ='Guia de Estudos'
          descricao ='Entre em uma comunidade que te ajudará a trilhar o seu caminho de estudo'
          navigation={navigation}/>

          <Box titulo ='Parceiros'
          descricao= 'Conheça nossos parceiros'
          navigation={navigation}/>

          <Box titulo ='Desafios'
          descricao= 'Treine suas habilidades de programação com nossos desafios'
          navigation={navigation}/>
        </View>

        <View styles={styles.divisao}>
          <Text style={styles.novidades}>Novidades</Text>
          <View styles={styles.divisao}>
            <Novidades />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles= StyleSheet.create({//Estilização dos componentes.
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#0f0a0a',
    padding: 10,
  },
  divisao:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  novidades:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0f0a0a',
    justifyContent: 'center',
    padding: 10
  },
  container: {
    flex: 5,
    backgroundColor: '#E2F9FF',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default MainScreen;