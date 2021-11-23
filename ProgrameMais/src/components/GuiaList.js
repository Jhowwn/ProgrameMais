import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function guiaList({guia, navigation}){
    
    if (guia.length != 0){//Pego todas informaçoes que mandei da page e extraio eles aqui
        const textElements = guia.map((estudos) =>{//Faço um destruturing para ficar mais fácil
            const {id_guia, descricao_guia, nome_guia} = estudos;//de trablaha com as informações

            return(
                <TouchableOpacity onPress={()=>{//Deixo os campos clicaveis
                    navigation.navigate("Estudos", {estudos});//Faço a nevageção para o item selecionado
                }}key={id_guia}>
                    <View style={styles.containerExi}>{/*Aqui faço a exbição em container */}
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