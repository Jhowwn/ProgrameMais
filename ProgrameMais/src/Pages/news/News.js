import React from 'react';
import {Text, View, Linking, ScrollView} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function News({route}) {
    const {novidades} = route.params;
    console.log(novidades)

    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
                    <Text style={styles.palavrasDescricao}>{novidades.novidade}</Text>{/*Exibo os dados em texts */}
                </View>
                {novidades.link_noticia !== "" && /*Caso Não tenha nada, se tiver será renderizado */ 
                <View style={styles.palaColor1}>
                    <Text style={styles.guiaExep} onPress={() => Linking.openURL(novidades.link_noticia)} >
                    Leia a Nóticia Completa <Icon name="launch" size={20} color="white" /> </Text>
                </View>}
            </View>
        </ScrollView>
    )
}

export default News