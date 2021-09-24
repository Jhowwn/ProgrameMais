import React, {useEffect, useState} from "react";
import { Text, View } from 'react-native';
//import { config } from "rxjs";
import styles from "../../assets/CSS/stylesCss.js";
import config from "../../Config/config.json";
import axios from "axios";


function Questionario(props){
    const ling = props.route.params.text;
    

    const [listQuestoes, setListQuestoes] = useState([]);
    const [listAnswer, setListAnswuer] = useState([]);
    
   // console.log(lang);
    console.log(`${config.urlNode}desafio/language/${ling}`);


    useEffect(() => {
        axios.get(`${config.urlNode}desafio/language/${props.route.params.text}`)
        .then(response =>{
            setListQuestoes(response.data)
        }).catch(error=>{
            console.log(`Ocorreu um erro! ${error}`);
          });
      
    }, []);
    

    console.log(listQuestoes.id_questao);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ling}</Text>
        </View>
        

    );
}


export default Questionario;