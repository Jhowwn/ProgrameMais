import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function parceirosList({parce, navigation}){
    if (parce.length != 0){
        const textElements = parce.map((partner) =>{
            const {id_parceiro, descricao_parceiro, nome_parceiro} = partner;
            return(
                <TouchableHighlight onPress={()=>{
                    navigation.navigate("InfoParceiro", {partner});
                }}key={id_parceiro}>
                    <View style={styles.containerParce}>
                        <Text style={styles.nomeParceiro}>{`${nome_parceiro}`}</Text>
                        <Text style={styles.descParceiro}>{`${descricao_parceiro}`}</Text>
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

export default parceirosList;