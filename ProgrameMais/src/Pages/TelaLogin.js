import axios from 'axios';
import { Text, View, ScrollView, Alert, TextInput, StyleSheet} from 'react-native';
import React, { useState} from 'react';
import { Button  } from 'react-native-paper';
import Cadastro from './Cadastro';
import config from "../../Config/config.json";
import styles from '../../assets/CSS/stylesCss';

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
        <ScrollView style={styles.entrar}>
            <View style={styles.entrar}>
                    <View style={styles.modal}>
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
                            style={styles.butt}
                            dark= 'true'
                            color='#211478'
                            onPress={handleSubmit}
                            >Entrar</Button>
                        <Button 
                            mode="contained"
                            style={styles.butt}
                            dark= 'true'
                            color='#211478'
                            onPress={()=>{
                                navigation.navigate(Cadastro);
                            }}>Cadastrar uma conta</Button>
                    </View>
            </View>

        </ScrollView>
        )
}

export default Login;