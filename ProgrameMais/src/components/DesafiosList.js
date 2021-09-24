import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

function DesafiosList({desafio, navigation}){
    if (desafio.length != 0){
        const textElements = desafio.map((Perguntas) =>{
            const {id_pergunta, texto, alternativa_correta} = Perguntas;
            console.log(Perguntas)
          return(
            <TouchableHighlight onPress={()=>{
                navigation.navigate("Palavras",{dicionario});//Pode remover, isso vai para a palavra individual
            }} key={id_pergunta}>
                <View style={styles.container}>
                    <Text style={styles.dicionario}>{`${texto}`}</Text>
                    <Text style={styles.palavras}>{`${alternativa_correta}`}</Text>
                </View>
            </TouchableHighlight>
          )
        });

        return(
            <View>
                {textElements}
            </View>
        );
    }

    return(
        <Text style={styles.loading}>Carregando os dados...</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2F9FF',
        borderBottomColor:"#bbb",
        borderBottomWidth: 4,
    },
    text:{
        fontSize: 15,
        paddingLeft: 20,
        flex: 1
    },
    loading:{
        fontSize: 20,
        color:'#F00'
    },
    palavras:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 10,
    },
    dicionario:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
    },
  });


export default DesafiosList;