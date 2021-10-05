import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from "../../Config/config.json";

function Novidades() {//Passando os parametros para navegação  eexibição dos dados.
    
    const [novi, setNovi] = useState([]);

    useEffect(() => {
        axios.get(config.urlNode+"novidades")
        .then(resposta =>{
          setNovi(resposta.data)
        }).catch(err =>{
          console.log("Ocorreu um erro" + err)
        });
  
    },[]);

    console.log(novi)


    if (novi.length != 0){
        const textElements = novi.map((novidades) =>{
            const {id_novidades, titulo_novidade, novidade} = novidades;
            return(
                <View key={id_novidades}>
                    <View style={styles.container}>
                        <Text style={styles.titulo}>{`${titulo_novidade}`}</Text>
                        <Text style={styles.texto}>{`${novidade}`}</Text>
                    </View>
                </View>

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


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2F9FF',
        borderBottomColor:"#bbb",
        borderBottomWidth: 4,
    },
    texto:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 10,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
    },
});

export default Novidades;