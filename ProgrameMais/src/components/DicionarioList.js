import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function DicionarioList({dici, navigation}){
    if (dici.length != 0){
        const textElements = dici.map((dicionario) =>{
            const {id_palavra, descricao, palavra} = dicionario;
            
          return(
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Palavras",{dicionario});//Pode remover, isso vai para a palavra individual
                
            }} key={id_palavra}>
                <View style={styles.containerExi}>
                    <Text style={styles.diciPalavra}>{`${palavra}`}</Text>
                    <Text style={styles.palavrasDesc}>{`${descricao}`}</Text>
                </View>
            </TouchableOpacity>
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

export default DicionarioList;