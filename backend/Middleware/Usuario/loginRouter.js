import express from 'express';
import db from './loginQuery.js';

const router = express.Router();

router.post('/',async (req, res) =>{
    const {usuario, senha} = req.body;
    const user = await db.logar(usuario, senha);
    
    //verifica se o select do banco retornou algum usuario     
    if(user.length > 0){
        global.loginData = {auth: true, user};
        res.send(global.loginData);
        //res.send("Logado com sucesso!");
        //chamar outra tela
    }else{
        res.send("Login incorreto!");
    }
    
});
export default router;