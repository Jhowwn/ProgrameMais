import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainScreen from './src/Pages/MainScreen';
import { createStackNavigator } from "@react-navigation/stack";
import GuiaEstudos from './src/Pages/GuiaEstudos';
import Desafios from './src/Pages/Desafios';
import Parceiros from './src/Pages/Parceiros';
import Dicionario from './src/Pages/Dicionario';
import Login from './src/Pages/TelaLogin';
import Cadastrar from './src/Pages/Cadastro';
import Palavras from './src/Pages/palavras/palavras';
import Questionario from "./src/Pages/Questionario.js"

function App() {

  const Stack = createStackNavigator();//Armazenando toda a navegação em uma variavel 

  return (//Crianda todas as navegações do nosso app
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aprenda Programar"  component={MainScreen}  options={style}/>
        <Stack.Screen name="Guia de Estudos" component={GuiaEstudos}  options={style}/>
        <Stack.Screen name="Desafios" component={Desafios}  options={style}/>
        <Stack.Screen name="Parceiros" component={Parceiros}  options={style}/>
        <Stack.Screen name="Dicionário" component={Dicionario}  options={style}/>
        <Stack.Screen name="Login"  component={Login}  options={style}/>
        <Stack.Screen name="Cadastrar"  component={Cadastrar}  options={style}/>
        <Stack.Screen name="Questionário"  component={Questionario}  options={style}/>
        <Stack.Screen name="Palavras"  component={Palavras}  options={({route})=>{
            const titlePage = route.params.dicionario.palavra;

            return({
              title: titlePage,
              headerStyle: style.headerStyle,
              headerTitleStyle: style.headerTitleStyle
            });
          }}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}


const style = {
  headerStyle:{
    backgroundColor: '#34eb6e',
    height: 90
  },
  headerTitleStyle:{
    fontSize: 30,
    color: '#050404',
  }
}

export default App;