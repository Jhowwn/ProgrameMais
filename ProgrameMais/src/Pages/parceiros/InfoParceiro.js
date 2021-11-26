import React from 'react';
import {Text, View, Linking, Image, ScrollView} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function InfoParceiro({route}){

  const {partner} = route.params;
  const localImage = partner.parceiro_url;

  function Img (){
    console.log(localImage)
    if (localImage == 'etec'){
      return(
        <Image style={styles.image} source={require('../../../assets/IMG/uploadImagens/EtecEmbu.jpeg')}/>
      )
    }else if (localImage == 'junior'){
      return (
        <Image style={styles.image} source={require('../../../assets/IMG/uploadImagens/Junior.jpg')}/>
      )
    }else{
      return null
    }
   
  }

  console.log(localImage)
  console.log(Img())
  console.log(partner.parceiro_url)
 
  return(
    <ScrollView>{/*utiliza para poder subir e descer caso necessário */}
      <View style={styles.containerPala}>{/*Criando um container para exibir os dados  */}
        <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
          <Text>descrição: {partner.descricao_parceiro}</Text>
        </View>

        {partner.parceiro_url !== null && 
        <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
          <Img />
        </View>}

        <View style={styles.palaColor2}>
          <Text style={styles.guiaExep} onPress={() => Linking.openURL(partner.link_parceiro)}>
            Link <Icon name="launch" size={20} color="white" /> </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default InfoParceiro;