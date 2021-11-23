import axios from 'axios';
import { Text, View, ScrollView, Alert, TextInput, StyleSheet} from 'react-native';
import React, { useState} from 'react';
import { Button  } from 'react-native-paper';
import Cadastro from './Cadastro';
import config from "../../Config/config.json";


function Login({navigation}){

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){

        const userData = {
            "usuario" : username,
            "senha" : password
        }
        //console.log(userData);
        event.preventDefault();

        const {data} = await axios.post(config.urlNode+"login", userData);

        if (data !== "Login incorreto!"){
            Alert.alert("Olá", "Seja Bem Vindo!!!", [{text:"OK"}]);
            navigation.navigate('Dicionario');
            setUserName('')
            setPassword('')
        }else if(data === "Login incorreto!"){
            
            Alert.alert("Algo deu Errado","Verifique se seus dados estão corretos", [{text:"OK"}]);
            
        }

    }

    return(
        <ScrollView>
            <View>
                <TextInput
                    style={styles.input}
                    label="Email"
                    autoComplete={'email'}
                    keyboardType={'email-address'}
                    placeholder="Email"
                    value={username}
                    onChangeText={name => setUserName(name)}
                    
                />
                <TextInput
                style={styles.input}
                    label="Senha de acesso"
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={pass => setPassword(pass)}
                    
                />
                <Button 
                    mode="contained" 
                    onPress={handleSubmit}
                    >Entrar</Button>
                <Button 
                    mode="contained"
                    onPress={()=>{
                        navigation.navigate(Cadastro);
                    }}>Cadastrar uma conta</Button>
            </View>

        </ScrollView>
        )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


export default Login;