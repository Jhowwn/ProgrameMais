import React, {useEffect, useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import styles from "../../assets/CSS/stylesCss.js";
import config from "../../Config/config.json";
import axios from "axios";
import {Button} from 'react-native-paper';


function Questionario(props){
    //const navigation = props;
    const [listQuestoes, setListQuestoes] = useState([]);
    const [selectedIdQuest1, setSelectedIdQuest1] = useState(null);
    const [selectedIdQuest2, setSelectedIdQuest2] = useState(null);
    const [selectedIdQuest3, setSelectedIdQuest3] = useState(null);

    useEffect(() => {
        axios.get(`${config.urlNode}desafio/language/${props.route.params.text}`)
        .then(response =>{
            setListQuestoes(response.data)
        }).catch(error=>{
            console.log(`Ocorreu um erro! ${error}`);
        });
      
    }, []);

    function conferir(resp1, resp2, resp3){

      /*if(listQuestoes[0].corect == listQuestoes[0].alternativas[resp1-1].alternativa){
        console.log(listQuestoes[0].corect + " é igual "+ resp1);
      }else{
        console.log(listQuestoes[0].corect);
      }*/
      //let msg;
      
      if(resp2 === 4){
        resp2 = 0;
      }else if(resp2 === 5){
        resp2 = 1;
      }else if(resp2 === 6){
        resp2 = 2;
      }else if(resp2 === 7){
        resp = 3;
      }

      if(resp3 === 8){
        resp3 = 0;
      }else if(resp3 === 9){
        resp3 = 1;
      }else if(resp3 === 10){
        resp3 = 2;
      }else if(resp3 === 11){
        resp3 = 3;
      }
      if(listQuestoes[0].corect !== listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect !== listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect !== listQuestoes[2].alternativas[resp3].alternativa){
        //0
       // msg = "0 Acertos de 3";
        //return msg;
        alert("0 Acertos de 3");
        
      }else if(listQuestoes[0].corect === listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect !== listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect !== listQuestoes[2].alternativas[resp3].alternativa ||
        listQuestoes[0].corect !== listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect === listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect !== listQuestoes[2].alternativas[resp3].alternativa || 
        listQuestoes[0].corect !== listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect !== listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect === listQuestoes[2].alternativas[resp3].alternativa){
        //1
        alert("1 Acertos de 3");
        //return msg;
      }else if(listQuestoes[0].corect === listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect === listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect !== listQuestoes[2].alternativas[resp3].alternativa ||
        listQuestoes[0].corect !== listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect === listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect === listQuestoes[2].alternativas[resp3].alternativa || 
        listQuestoes[0].corect === listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect !== listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect === listQuestoes[2].alternativas[resp3].alternativa){
        //2
        
        alert( "2 Acertos de 3"+" "+selectedIdQuest3);
        //return msg;
      }else if(listQuestoes[0].corect === listQuestoes[0].alternativas[resp1].alternativa && listQuestoes[1].corect === listQuestoes[1].alternativas[resp2].alternativa && listQuestoes[2].corect === listQuestoes[2].alternativas[resp3].alternativa){
        //3
        alert("Parabéns!!!\n 3 Acertos de 3"+" "+selectedIdQuest3);
        
        //return msg;
      }
    }
    
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress}  style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.alternativa}</Text>
        </TouchableOpacity>
    );
    
    const quest1 = listQuestoes[0];
    const quest2 = listQuestoes[1];
    const quest3 = listQuestoes[2];

  const renderItem = ({ item }) => {
    let backgroundColor;
    let color;
    if(item.id<4){
      backgroundColor = item.id === selectedIdQuest1 ? "#6e3b6e" : "#f9c2ff";
      color = item.id === selectedIdQuest1 ? 'white' : 'black';
    }else if(item.id>3 && item.id<8){
      backgroundColor = item.id === selectedIdQuest2 ? "#6e3b6e" : "#f9c2ff";
      color = item.id === selectedIdQuest2 ? 'white' : 'black';
    }else if(item.id>7){
        backgroundColor = item.id === selectedIdQuest3 ? "#6e3b6e" : "#f9c2ff";
        color = item.id === selectedIdQuest3 ? 'white' : 'black';
      }
    
    return (
      <Item
        item={item}
        onPress={ () => {
          if(item.id < 4 && item.id> -1){
            setSelectedIdQuest1(item.id)
          }else if(item.id > 3 && item.id < 8){
            setSelectedIdQuest2(item.id)
          }else if(item.id>7 && item.id<12){
            setSelectedIdQuest3(item.id)
          }

        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
      
    );
  };
    if(quest3){
        return (
            <SafeAreaView style={styles.container}>
              <Text>{quest1.questao}</Text>
              <FlatList
                data={quest1.alternativas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedIdQuest1}
              />
              <Text>{quest2.questao}</Text>
              <FlatList
                data={quest2.alternativas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedIdQuest2}
              />
              <Text>{quest3.questao}</Text>
              <FlatList
                data={quest3.alternativas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedIdQuest3}
              />
              <View>
                <Button style={style.btn} mode="contained" 
                  onPress={()=>conferir(selectedIdQuest1, selectedIdQuest2, selectedIdQuest3)}>
                  Conferir
                </Button>
              </View>
              
            </SafeAreaView>
        );
        
    }
    else{
        return(
            <View>
                <Text>{props.route.params.text}</Text>
            </View>
        )

    }
};
const style= StyleSheet.create({
  btn:{
    margin: 10,
    padding: 10
  }
});

export default Questionario;