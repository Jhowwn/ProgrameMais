import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
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
import Novidade from './src/Pages/Novidades';
import News from './src/Pages/news/News';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconawesome from 'react-native-vector-icons/FontAwesome5';

function Route() {

  const Stack = createStackNavigator();//Armazenando toda a navegação em uma variavel 
  const Drawer = createDrawerNavigator();

  function LogOff() {//Criando a navegação entre Login e Cadastro
    return (
      <Stack.Navigator initialRouteName="Login" backBehavior='firstRoute'>
        <Stack.Screen name="Login"  component={Login}  options={{headerShown: false}}/>
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
          headerStyle: style.headerInformation,
          headerTitleStyle: style.headerTitleInformation,
          headerTintColor: 'white',
        });
      }}/>
      </Stack.Navigator>
    )
  }

  function Desafios(){//Navegação entre desafios e questionario
    return (
      <Stack.Navigator>
        <Stack.Screen name="Desafio" component={Desafio}  options={{ headerShown: false }}/>
        <Stack.Screen name="Questionário"  component={Questionario}  options={style, null}/>
      </Stack.Navigator>
    )
  }

  function Parceiros() {//Navegação entre Parceiros e as informações dele
    return(
      <Stack.Navigator>
        <Stack.Screen name="Parceiro" component={Parceiro}  options={{ headerShown: false }}/>
        <Stack.Screen name="InfoParceiro" component={InfoParceiro} options={({route})=>{
        const titlePage = route.params.partner.nome_parceiro;

        return({
          title: titlePage,
          headerStyle: style.headerInformation,
          headerTitleStyle: style.headerTitleInformation,
          headerTintColor: 'white',
        });
      }}/>
      </Stack.Navigator>
    )
  }

  function GuiaEstudos() {//Navegação entre a guia de estudos e estudos onde contem o conteúdo para estudo
    return(
      <Stack.Navigator>
        <Stack.Screen name="Guia" component={GuiaEstudo}  options={{ headerShown: false }}/>
        <Stack.Screen name="Estudos" component={Estudos} options={({route})=>{
        const titlePage = route.params.estudos.nome_guia;

        return({
          title: titlePage,
          headerStyle: style.headerInformation,
          headerTitleStyle: style.headerTitleInformation,
          headerTintColor: 'white',
        });
      }}/>
      </Stack.Navigator>
    )
  }

  function Novidades() {//Navegação entre novidade e novidade selecionada
    return(
      <Stack.Navigator>
        <Stack.Screen name="Novidade" component={Novidade}  options={{headerShown: false}}/>
        <Stack.Screen name="News" component={News} options={({route}) => {
          const titlePage = route.params.novidades.titulo_novidade;

          return ({
            title: titlePage,
            headerStyle: style.headerInformation,
            headerTitleStyle: style.headerTitleInformation,
            headerTintColor: 'white',
          });
        }}
      />
      </Stack.Navigator>
    )
  }

  return (//Crianda todas as navegações do nosso app
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Sair'
      backBehavior='firstRoute'
      screenOptions={{
          drawerHideStatusBarOnOpen: false,
          drawerStyle:{ 
            backgroundColor:'white',
          },
          drawerItemStyle: {marginTop: 10},
          drawerActiveTintColor:'white',
          drawerActiveBackgroundColor: '#0075cd',
          }}>

        <Drawer.Screen name="Dicionario"
        component={Dicionario}
        options={{
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: style.headerTintColor,
          drawerIcon: ({focused, size}) => (
            <Iconawesome name="book" 
               size={size}
               color={focused ? 'white' : 'black'}
            />
         ),}}/>

        <Drawer.Screen name="Desafios"
        component={Desafios}
        options={{
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: style.headerTintColor,
          drawerIcon: ({focused, size}) => (
            <Iconawesome name="tasks" 
               size={size}
               color={focused ? 'white' : 'black'}
            />
         ),}}/>

        <Drawer.Screen name="Parceiros"
        component={Parceiros}
        options={{
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: style.headerTintColor,
          drawerIcon: ({focused, size}) => (
            <Iconawesome name="handshake" 
               size={size}
               color={focused ? 'white' : 'black'}
            />
         ),}}/>

        <Drawer.Screen name="Guia de Estudos"
        component={GuiaEstudos}
        options={{
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: style.headerTintColor,
          drawerIcon: ({focused, size}) => (
            <Iconawesome name="list-alt" 
               size={size}
               color={focused ? 'white' : 'black'}
            />
         ),}}/>

        <Drawer.Screen name="Novidades" 
        component={Novidades}  
        options={{
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: style.headerTintColor,
          drawerIcon: ({focused, size}) => (
            <Icon name="newspaper" 
               size={size}
               color={focused ? 'white' : 'black'}
            />
         ),}}/>

        <Drawer.Screen name="Sair"
        component={LogOff}
        options={{ 
          headerShown: false,
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: style.headerTintColor,
          drawerIcon: ({focused, size}) => (
            <Icon name="logout" 
               size={size}
               color={focused ? 'white' : 'black'}
            />
          ), }}/>
      </Drawer.Navigator>        
    </NavigationContainer>
  )
}


const style = {
  headerStyle:{
    backgroundColor: '#211478',
    height: 90
  },
  headerTitleStyle:{
    fontSize: 30,
    color: 'white',
  },
  headerInformation:{
    backgroundColor: "#0075cd",
  },
  headerTintColor: 'white',
  headerTitleInformation:{
    fontSize: 20,
    color: 'white',
  }
}

export default Route;