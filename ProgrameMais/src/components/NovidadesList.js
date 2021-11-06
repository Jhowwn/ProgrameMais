import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function NovidadesList({news, navigation}) {//Passando os parametros para navegação  eexibição dos dados.

    if (news.length != 0){
        const textElements = news.map((novidades) =>{
            const {id_novidades, titulo_novidade, novidade} = novidades;
            return(
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("News", {novidades});
                }}key={id_novidades}>
                    <View style={styles.containerExi}>
                        <Text style={styles.newsTitle}>{`${titulo_novidade}`}</Text>
                        <Text style={styles.newsDesc}>{`${novidade}`}</Text>
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

export default NovidadesList;