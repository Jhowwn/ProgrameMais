import { StyleSheet } from "react-native";
import { startClock } from "react-native-reanimated";

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
    pageColor: {
      backgroundColor: 'white'
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
    containerExi: {
      borderRadius: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 15,
      marginBottom: 10,
      padding: 10,
      shadowColor: '#f59342',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,  
      elevation: 2
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
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    diciPalavra:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    //Estilização dos Parceiros
    parceiro:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f0a0a',
      padding: 20,
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
    //Estilização da page Palavras
    palavraNome:{
      fontSize: 20,
      padding: 10,
      
    },
    palavrasDescricao: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10
    },
    boxExep: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10
    },
     //Estilização da page Estudos
     guiaNome:{
      fontSize: 20,
      padding: 10,
      fontWeight: 'bold'
    },
    guiaDescricao: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10
    },
    guiaExep: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10
    },
    linkGuia: {
      fontSize: 15,
      textAlign: 'center',
      color: 'blue',
      padding: 10
    },
    //Novidades
    newsDesc:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 10,
    },
    newsTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
    },
})

export default styles;
