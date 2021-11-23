import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function parceirosList({parce, navigation}){
    
    if (parce.length != 0){//Pego todas informaçoes que mandei da page e extraio eles aqui
        const textElements = parce.map((partner) =>{//Faço um destruturing para ficar mais fácil
            const {id_parceiro, descricao_parceiro, nome_parceiro} = partner;//de trablaha com as informações
            
            return(
                <TouchableOpacity onPress={()=>{//Deixo os campos clicaveis
                    navigation.navigate("InfoParceiro", {partner});//Faço a nevageção para o item selecionado
                }}key={id_parceiro}>
                    <View style={styles.containerExi}>{/*Aqui faço a exbição em container */}
                        <Text style={styles.nomeParceiro}>{`${nome_parceiro}`}</Text>
                        <Text style={styles.descParceiro}>{`${descricao_parceiro}`}</Text>
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

export default parceirosList;