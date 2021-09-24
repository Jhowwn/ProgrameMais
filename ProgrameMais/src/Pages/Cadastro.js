import axios from 'axios';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import React, { useState} from 'react';
import { TextInput, Button  } from 'react-native-paper';
import MainScreen from './MainScreen';
import config from "../../Config/config.json";

function Cadastrar({navigation}){

    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    

    async function handleSubmit(event){

        const userData = {
            "usuario" : username,
            "senha" : password,
            "nome" : name,
            "confirmaSenha": confirmPass
        }

        event.preventDefault();

        const {data} = await axios.post(`${config.urlNode}cadastrar`, userData);
        console.log(data)

        if (data.codigo !== 1 ){
                alert(data);   
        }else{
            if(password === confirmPass){
                alert(data);
                navigation.navigate('Aprenda Programar', MainScreen);
            }
            else if(password !== confirmPass){
                alert("Senha está diferente");
                
            }
            
        }

    }

    return(
        <View>
            <Text>Cadastre-se</Text>
            <View>
                <TextInput
                    label="Usuario"
                    value={username}
                    onChangeText={user => setUserName(user)}
                />
                <TextInput
                    label="Nome"
                    value={name}
                    onChangeText={nome => setName(nome)}
                />
                <TextInput
                    label="Senha de acesso"
                    secureTextEntry
                    value={password}
                    onChangeText={pass => setPassword(pass)}
                />
                <TextInput
                    label="Confirme sua senha de acesso"
                    secureTextEntry
                    value={confirmPass}
                    onChangeText={pass => setConfirmPass(pass)}
                />
                <Button 
                    mode="contained" 
                    onPress={handleSubmit}
                    >Entrar</Button>
            </View>

        </View>
        )
}

export default Cadastrar;