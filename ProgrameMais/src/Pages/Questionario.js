import React, {useEffect, useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import styles from "../../assets/CSS/stylesCss.js";
import config from "../../Config/config.json";
import axios from "axios";



function Questionario(props){
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
    if(item.id<5){
      backgroundColor = item.id === selectedIdQuest1 ? "#6e3b6e" : "#f9c2ff";
      color = item.id === selectedIdQuest1 ? 'white' : 'black';
    }else if(item.id>4 && item.id<9){
      backgroundColor = item.id === selectedIdQuest2 ? "#6e3b6e" : "#f9c2ff";
      color = item.id === selectedIdQuest2 ? 'white' : 'black';
    }else if(item.id>8){
        backgroundColor = item.id === selectedIdQuest3 ? "#6e3b6e" : "#f9c2ff";
        color = item.id === selectedIdQuest3 ? 'white' : 'black';
      }
    
    return (
      <Item
        item={item}
        onPress={ () => {
          if(item.id < 5 ){
            setSelectedIdQuest1(item.id)
          }else if(item.id > 4 && item.id < 9){
            setSelectedIdQuest2(item.id)
          }else if(item.id>8){
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

export default Questionario;