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
      backgroundColor: "#004383",
      shadowColor: '#f59342',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,  
      elevation: 2
    },
    containerExi: {
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 15,
      marginBottom: 10,
      padding: 10,
      shadowColor: '#f59342',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,  
      elevation: 2,
      backgroundColor: "#0075cd"
    },
    textCompo:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      padding: 20,
    },
    //Estilização do dicionario
    palavrasDesc:{
      fontSize: 15,
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    diciPalavra:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    //Estilização dos Parceiros
    descParceiro:{
      fontSize: 15,
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    nomeParceiro:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    //Estilização da guia de Estudos
    descGuia:{
      fontSize: 15,
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    guia:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    //Estilização da page Palavras
    palavraNome:{
      fontSize: 20,
      padding: 10
    },
    palavrasDescricao: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10,
      color: 'white'
    },
    boxExep: {
      fontSize: 15,
      textAlign: 'center',
      padding: 10,
      color: 'white'
    },
    containerPala:{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
    descricaoColor:{
      backgroundColor: "#b97c77",
      borderRadius: 5,
      width: 370,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 25,
      marginBottom: 10,
      padding: 10,
      shadowColor: '#f59342',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,  
      elevation: 2
    },
    palaColor1:{
      backgroundColor: "#004383",
      borderRadius: 5,
      width: 370,
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
    palaColor2:{
      backgroundColor: "#0075cd",
      borderRadius: 5,
      width: 370,
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
    palaColor3:{
      backgroundColor: "#457ade",
      borderRadius: 5,
      width: 370,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 15,
      marginBottom: 30,
      padding: 10,
      shadowColor: '#f59342',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 1,  
      elevation: 2
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
      padding: 10,
      color: 'white'
    },
    guiaExep: {
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      color: 'white'
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
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    newsTitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      padding: 5,
      marginLeft: 10,
      marginRight: 10
    },
    image:{
      width: 200,
      height: 200
    }
})

export default styles;
