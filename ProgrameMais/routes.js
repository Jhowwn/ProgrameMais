/*import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainScreen from './src/Pages/MainScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import GuiaEstudos from './src/Pages/GuiaEstudos';
import Desafios from './src/Pages/Desafios';
import Parceiros from './src/Pages/Parceiros';
import Dicionario from './src/Pages/Dicionario';
import Login from './src/Pages/TelaLogin';
import Cadastrar from './src/Pages/Cadastro';
import Palavras from './src/Pages/palavras/palavras';
import Questionario from "./src/Pages/Questionario.js"

function Route() {

  const Stack = createStackNavigator();//Armazenando toda a navegação em uma variavel 
  const Drawer = createDrawerNavigator();


  return (//Crianda todas as navegações do nosso app
    <NavigationContainer>
      <Stack.Navigator detachInactiveScreens='false'>
        <Stack.Screen name="Login"  component={Login}  options={style}/>
        <Stack.Screen name="Aprenda Programar" component={MainScreen}  options={style}/>
        <Stack.Screen name="Guia de Estudos" component={GuiaEstudos}  options={style}/>
        <Stack.Screen name="Desafios" component={Desafios}  options={style}/>
        <Stack.Screen name="Parceiros" component={Parceiros}  options={style}/>
        <Stack.Screen name="Dicionário" component={Dicionario}  options={style}/>
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

export default Route;*/

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import News from './src/Pages/News';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import GuiaEstudo from './src/Pages/GuiaEstudos';
import Desafio from './src/Pages/Desafios';
import Parceiro from './src/Pages/Parceiros';
import Dicionarios from './src/Pages/Dicionario';
import Login from './src/Pages/TelaLogin';
import Cadastrar from './src/Pages/Cadastro';
import Palavras from './src/Pages/palavras/palavras';
import Questionario from "./src/Pages/Questionario.js";
import InfoParceiro from './src/Pages/parceiros/InfoParceiro';
import Estudos from './src/Pages/estudos/Estudos.js';

function Route() {

  const Stack = createStackNavigator();//Armazenando toda a navegação em uma variavel 
  const Drawer = createDrawerNavigator();

  function Register() {//Criando a navegação entre Login e Cadastro
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login}  options={style}/>
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={style}/>
      </Stack.Navigator>
    );
  }

  function Dicionario() {//Criando a navegação entre Dicionario e Palavra
    return(
      <Stack.Navigator>
        <Stack.Screen name="Dicionário" component={Dicionarios}  options={{ headerShown: false }}/>  
        <Stack.Screen name="Palavras"  component={Palavras}  options={({route})=>{
        const titlePage = route.params.dicionario.palavra;

        return({
          title: titlePage,
        });
      }}/>
      </Stack.Navigator>
    )
  }

  function Desafios(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="Desafio" component={Desafio}  options={{ headerShown: false }}/>
        <Stack.Screen name="Questionário"  component={Questionario}  options={style, null}/>
      </Stack.Navigator>
    )
  }

  function Parceiros() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Parceiro" component={Parceiro}  options={{ headerShown: false }}/>
        <Stack.Screen name="InfoParceiro" component={InfoParceiro} options={({route})=>{
        const titlePage = route.params.partner.nome_parceiro;

        return({
          title: titlePage,
        });
      }}/>
      </Stack.Navigator>
    )
  }

  function GuiaEstudos() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Guia" component={GuiaEstudo}  options={{ headerShown: false }}/>
        <Stack.Screen name="Estudos" component={Estudos} options={({route})=>{
        const titlePage = route.params.estudos.nome_guia;

        return({
          title: titlePage,
        });
      }}/>
      </Stack.Navigator>
    )
  }

  return (//Crianda todas as navegações do nosso app
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={
        {drawerStyle:{ 
          backgroundColor:'gray',
          },
          drawerHideStatusBarOnOpen: true,}}>
        <Drawer.Screen name="Register"
        component={Register}
        options={{ headerShown: false }}/>
        <Drawer.Screen name="Dicionario"
        component={Dicionario}
        options={style}/>
        <Drawer.Screen name="Desafios"
        component={Desafios}
        options={style}/>
        <Drawer.Screen name="Parceiros"
        component={Parceiros}
        options={style}/>
        <Drawer.Screen name="Guia de Estudos"
        component={GuiaEstudos}
        options={style}/>
        <Drawer.Screen name="Novidades" component={News}  options={style}/>
      </Drawer.Navigator>        
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

export default Route;