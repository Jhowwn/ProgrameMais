import React from 'react';
import {Text, View, Linking, Image, ScrollView} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';
import etec from '../../../assets/IMG/uploadImagens/EtecEmbu.jpeg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function InfoParceiro({route}){

  const {partner} = route.params;

  console.log(etec)
  return(
    <ScrollView>{/*utiliza para poder subir e descer caso necessário */}
      <View style={styles.containerPala}>{/*Criando um container para exibir os dados  */}
        <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
          <Text>descricao: {partner.descricao_parceiro}</Text>
        </View>

        <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
          <Image style={styles.image} source={etec}/>
        </View>

        <View style={styles.palaColor2}>
          <Text style={styles.guiaExep} onPress={() => Linking.openURL(partner.link_parceiro)}>
            Link <Icon name="launch" size={20} color="white" /> </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default InfoParceiro;