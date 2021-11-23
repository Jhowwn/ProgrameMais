import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function NovidadesList({news, navigation}) {//Passando os parametros para navegação exibição dos dados.

    if (news.length != 0){//Pego todas informaçoes que mandei da page e extraio eles aqui
        const textElements = news.map((novidades) =>{//Faço um destruturing para ficar mais fácil
            const {id_novidades, titulo_novidade, novidade} = novidades;//de trablaha com as informações

            return(
                <TouchableOpacity onPress={()=>{//Deixo os campos clicaveis
                    navigation.navigate("News", {novidades});//Faço a nevageção para o item selecionado
                }}key={id_novidades}>
                    <View style={styles.containerExi}>{/*Aqui faço a exbição em container */}
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