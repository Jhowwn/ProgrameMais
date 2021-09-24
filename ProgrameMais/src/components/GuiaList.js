import React from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableHighlight} from 'react-native';

function guiaList({guia, navigation}){
    
    if (guia.length != 0){
        const textElements = guia.map((estudos) =>{
            const {id_guia, descricao_guia, nome_guia} = estudos;
            return(
                <TouchableHighlight onPress={()=>{
                    navigation.navigate("GuiaEstudos", GuiaEstuddos);
                }}key={id_guia}>
                    <View style={styles.container}>
                        <Text style={styles.dicionario}>{`${nome_guia}`}</Text>
                        <Text style={styles.palavras}>{`${descricao_guia}`}</Text>
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


export default guiaList;