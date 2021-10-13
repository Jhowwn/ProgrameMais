import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#0f0a0a'
    },
    questaoDivisao: {
      backgroundColor: '#E2F9FF',
      borderBottomColor:"#bbb",
      borderBottomWidth: 4,
    },
    resposta:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 10,
    },
    pergunta:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
        padding: 10
    },
    safeArea:{
      flex: 1
    },
    //Estilização do dicionario
    dicionario:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 20,
    },
    divisao:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },loading:{
      fontSize: 20,
      color:'#F00'
    },
    palavrasDesc:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 10,
    },
    diciPalavra:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
    },
    containerDici: {
      backgroundColor: '#E2F9FF',
      borderBottomColor:"#bbb",
      borderBottomWidth: 4,
  },
})

export default styles;