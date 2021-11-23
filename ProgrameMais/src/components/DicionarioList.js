import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/CSS/stylesCss';

function DicionarioList({dici, navigation}){

    if (dici.length != 0){//Pego todas informaçoes que mandei da page e extraio eles aqui
        const textElements = dici.map((dicionario) =>{//Faço um destruturing para ficar mais fácil
            const {id_palavra, descricao, palavra} = dicionario;// de trablaha com as informações
            
          return(
            <TouchableOpacity onPress={()=>{//Deixo as palavra clicaveis
                navigation.navigate("Palavras",{dicionario});//Faço a nevageção para a palavra selecionada       
            }} key={id_palavra}>
                <View style={styles.containerExi}>{/*Aqui faço a exbição das palavras em container */}
                    <Text style={styles.diciPalavra}>{`${palavra}`}</Text>
                    <Text style={styles.palavrasDesc}>{`${descricao}`}</Text>
                </View>
            </TouchableOpacity>
          )
        });

        return(
            <View>
                {/*Carego os dados para a tela */}
                {textElements}
            </View>
        );
    }

    return(
        <Text style={styles.loading}>Carregando os dados...
        {/*Enquanto não termina o carregamento dos dados */}</Text>
    )
}

export default DicionarioList;