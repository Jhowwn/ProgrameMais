import express from "express";
import db from "./cadastrarUserQuery.js";

const router = express.Router();

router.post("/", async (req, res) => {

    const {usuario, senha, nome, confirmaSenha} = req.body;
    console.log(req.body);
    //listando todos os usuarios existentes no sistema
    const usuarios = await db.listarUsuarios();
    //capturando usuario já cadastrado
    const checkUser = usuarios.some(item => {
        return item.usuario === usuario;
    });

    if(!usuario || !senha || !nome){
        //Verificando se estão todos os dados necessários para cadastro informados
        res.send("Dados para cadastro imcompletos");
    }else if(checkUser){
        //Verificando se constante de verificação de usuarios ja cadastrados tem algum usuario
        res.send("Usuário já tem cadastro no sistema!");
    }else if(senha != confirmaSenha){
        res.send("Senha está diferente!");
    }
    else{
        //cadastrando usuario
        await db.cadastrarUsuario(usuario, senha, nome);
        res.send("Usuário cadastrado com sucesso!");
    }
    
});

export default router;