import React from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableHighlight} from 'react-native';

function parceirosList({parce, navigation}){
    if (parce.length != 0){
        const textElements = parce.map((partner) =>{
            const {id_parceiro, descricao_parceiro, nome_parceiro} = partner;
            return(
                <TouchableHighlight onPress={()=>{
                    navigation.navigate("Parceiros", Parceiros);
                }}key={id_parceiro}>
                    <View style={styles.container}>
                        <Text style={styles.dicionario}>{`${nome_parceiro}`}</Text>
                        <Text style={styles.palavras}>{`${descricao_parceiro}`}</Text>
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


export default parceirosList;