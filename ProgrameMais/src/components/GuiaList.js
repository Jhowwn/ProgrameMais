import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function guiaList({guia, navigation}){
    
    if (guia.length != 0){
        const textElements = guia.map((estudos) =>{
            const {id_guia, descricao_guia, nome_guia} = estudos;
            return(
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Estudos", {estudos});
                }}key={id_guia}>
                    <View style={styles.containerExi}>
                        <Text style={styles.guia}>{`${nome_guia}`}</Text>
                        <Text style={styles.descGuia}>{`${descricao_guia}`}</Text>
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

export default guiaList;