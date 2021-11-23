import React from 'react';
import {Text, View, Linking, ScrollView} from 'react-native';
import styles from '../../../assets/CSS/stylesCss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Estudos({route}){

  const {estudos} = route.params;//Pegando as informações do guia via paramnetro e armazenando em estudos

  return(
    <ScrollView>{/*utiliza para poder subir e descer caso necessário */}
      <View style={styles.containerPala}>{/*Criando um container para exibir os dados  */}
        <View style={styles.descricaoColor}>{ /*Faço um container para separa cada dado */}
          <Text style={styles.guiaDescricao}>descricao: {estudos.descricao_guia}</Text>{ /*Exibo os dados em texts */}
          <Text style={styles.guiaDescricao}>Segue os links para mais informações</Text>
        </View>

          {estudos.link_python !== "" && /*Caso Não tenha nada, se tiver será renderizado */ 
          <View style={styles.palaColor1}>
            <Text style={styles.guiaExep} onPress={() => Linking.openURL(estudos.link_python)} >
              Python <Icon name="launch" size={20} color="white" /> </Text>
          </View>}

          {estudos.link_java !== "" && /*Caso Não tenha nada, se tiver será renderizado */ 
          <View style={styles.palaColor2}>
            <Text style={styles.guiaExep} onPress={() => Linking.openURL(estudos.link_java)} >
              Java <Icon name="launch" size={20} color="white" /> </Text>
          </View>}
          
          {estudos.link_javascript !== "" && /*Caso Não tenha nada, se tiver será renderizado */ 
          <View style={styles.palaColor3}>
            <Text style={styles.guiaExep} onPress={() => Linking.openURL(estudos.link_javascript)} >
              JavaScript <Icon name="launch" size={20} color="white" /></Text>
          </View>}

      </View>
    </ScrollView>
  );
}

export default Estudos;