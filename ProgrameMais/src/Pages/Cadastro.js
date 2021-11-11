import axios from 'axios';
import { Text, View, TextInput,StyleSheet, ScrollView,Alert} from 'react-native';
import React, { useState} from 'react';
import { Button  } from 'react-native-paper';
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

        if(password == ''|| confirmPass == '' || name == '' || username == ''){
            alert('Você não preencheu alguns dados')
        }
        else if (username.length > 35){
            alert('Email deve conter no máximo 35 caracteres!')
        }
        else if (name.length > 30){
            alert('Nome deve conter no máximo 30 caracteres!')
        }
        else if (password.length > 15){
            alert('Senha deve conter no máximo 15 caracteres')
        }
        else if(password !== confirmPass){
            alert("Senha está diferente");
        }else{
            const {data} = await axios.post(`${config.urlNode}cadastrar`, userData);

            if (data == data.errors){
                //Verifico se há erros e indico que as informaçoes contem algum erro
                const errors = data.errors.map((error) => {
                    const erro = error.msg
                    const allError = `${erro}`
                    return allError
                })
                
                if (errors){
                    return Alert.alert(
                        "Confira essas informações",
                        errors.join('\n'),
                        [
                          { text: "OK"}
                        ]
                    )
                    
                }

            }
            
            else if (data == 'Usuário já tem cadastro no sistema!' ){
                alert(`${data}/n Escolha outro usuario!`);   
            }else{
                    alert(data);
                    navigation.navigate('Dicionario');
                }
        }
        

    }

    return(
        <View>
            <Text>Cadastre-se</Text>
            <View>
                <TextInput
                style={styles.input}
                    label="Email"
                    value={username}
                    autoComplete={'email'}
                    keyboardType={'email-address'}
                    placeholder="email"
                    onChangeText={user => setUserName(user)}
                />
                <TextInput
                style={styles.input}
                    label="Nome"
                    value={name}
                    placeholder="Nome"
                    onChangeText={nome => setName(nome)}
                />
                <TextInput
                style={styles.input}
                    label="Senha de acesso"
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={pass => setPassword(pass)}
                />
                <TextInput
                style={styles.input}
                    label="Confirme sua senha de acesso"
                    placeholder="Confirmar Senha"
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

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Cadastrar;