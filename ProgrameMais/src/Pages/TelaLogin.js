import axios from 'axios';
import { Text, View, ScrollView} from 'react-native';
import React, { useState} from 'react';
import { TextInput, Button  } from 'react-native-paper';
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
            alert(data.user[0].nome);
            navigation.navigate('Dicionario');
        }else if(data === "Login incorreto!"){
            
            alert("Dados não inseridos");
            
        }

    }

    return(
        <ScrollView>
            <Text>Acesse sua conta</Text>
            <View>
                <TextInput
                    label="Nome de Usuario"
                    value={username}
                    onChangeText={name => setUserName(name)}
                />
                <TextInput
                    label="Senha de acesso"
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


export default Login;