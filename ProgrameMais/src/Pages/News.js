import React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import Novidades from '../components/Novidades';

function News() {

  return (
    <ScrollView>
      <View>
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

export default News;