import React, {useEffect, useState} from "react";
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
//import { config } from "rxjs";
import styles from "../../assets/CSS/stylesCss.js";
import config from "../../Config/config.json";
import axios from "axios";
import { RadioButton } from 'react-native-paper';


function Questionario(props){
    const ling = props.route.params.text;
    

    const [listQuestoes, setListQuestoes] = useState([]);
    const [listAnswer, setListAnswuer] = useState([]);
    const [checked, setChecked] = React.useState('first');


    useEffect(() => {
        axios.get(`${config.urlNode}desafio/language/${props.route.params.text}`)
        .then(response =>{
            setListQuestoes(response.data)
        }).catch(error=>{
            console.log(`Ocorreu um erro! ${error}`);
          });
      
    }, []);
    

    console.log(listQuestoes);

    const textElements = listQuestoes.map((list) =>{
        const {id_questao, questao, resposta_correta} = list;
        return(
            <TouchableHighlight key={id_questao}>
                <View style={styles.questaoDivisao}>
                    <Text style={styles.pergunta}>{`${questao}`}</Text>
                    <Text style={styles.resposta}>{`${resposta_correta}`}</Text>
                    <View>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                    <RadioButton
                        value="third"
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('third')}
                    />
                    <RadioButton
                        value="four"
                        status={ checked === 'four' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('four')}
                    />
                    </View>

                    </View>
                </TouchableHighlight>
        )
    });
   
    return(
        <ScrollView>
            <View>
                {textElements}
            </View>
        </ScrollView>
    );
}


export default Questionario;