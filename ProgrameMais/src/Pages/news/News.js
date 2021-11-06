import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

function News({route}) {
    const {novidades} = route.params;
    console.log(novidades)

    return (
        <View style={styles.container}>
        <Text style={styles.palavraNome}>{novidades.titulo_novidade}</Text>
        <Text style={styles.palavrasDescricao}>{novidades.novidade}</Text>
    </View>
    )
}

export default News