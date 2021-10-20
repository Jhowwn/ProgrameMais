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
    loading:{
      fontSize: 20,
      color:'#F00'
    },
    divisao:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    //Estilização do dicionario
    dicionario:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 20,
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
    //Estilização dos Parceiros
    parceiro:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 20,
    },
    containerParce: {
      backgroundColor: '#E2F9FF',
      borderBottomColor:"#bbb",
      borderBottomWidth: 4,
    },
    descParceiro:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 10,
    },
    nomeParceiro:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
    },
    //Estilização da guia de Estudos
    cronograma:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 20,
  },
  containerGuia: {
    backgroundColor: '#E2F9FF',
    borderBottomColor:"#bbb",
    borderBottomWidth: 4,
  },
  descGuia:{
    fontSize: 15,
    color: '#0f0a0a',
    padding: 10,
  },
  guia:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
  },
})

export default styles;