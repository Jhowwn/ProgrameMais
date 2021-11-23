import express from 'express';
import db from './loginQuery.js';
import {generateToken} from '../json/helperJWT.js';

const router = express.Router();

router.post('/',async (req, res) =>{
    const {usuario, senha} = req.body;
    const user = await db.logar(usuario, senha);
    
    //verifica se o select do banco retornou algum usuario     
    if(user.length > 0){
        console.log(user[0])
        const {id_login, usuario} = user[0];
        const token = generateToken(id_login, usuario);
        console.log(token)
        global.loginData = {auth: true, user, token};
        res.send(global.loginData);
        //res.send("Logado com sucesso!");
        //chamar outra tela
    }else{
        res.send("Login incorreto!");
    }
    
});
export default router;