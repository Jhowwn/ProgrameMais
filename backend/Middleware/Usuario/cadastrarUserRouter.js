import express from "express";
import db from "./cadastrarUserQuery.js";
import {body, validationResult} from "express-validator";

const router = express.Router();

router.post("/",[//Validações
    body('nome').isLength({min: 1}).withMessage("Nome tem que ter pelo menos 1 caracteres"),
    body('nome').isLength({max: 30}).withMessage("Nome tem que ser menor que 30 caracteres"),
    body('senha').isLength({max: 15}).withMessage("Senha tem que ser menor que 15 caracteres"),
    body('senha').isLength({min: 5}).withMessage("Senha tem que ser maior que 5 caracteres"),
    body('confirmaSenha').isLength({max: 15}).withMessage("Confirmar Senha tem que ser menor que 15 caracteres"),
    body('confirmaSenha').isLength({min: 5}).withMessage("Confirmar Senha tem que ser maior que 5 caracteres"),
    body('usuario').isLength({min: 1}).withMessage("Email Vazio"),
    body('usuario').isLength({max: 35}).withMessage("Email ttem que ter menos que 35 caracteres"),
    body('usuario').isEmail().withMessage('Informe um email valido'),
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.send({errors: errors.array()});
    }

    const {usuario, senha, nome, confirmaSenha} = req.body;
    console.log(req.body);
    //listando todos os usuarios existentes no sistema
    const usuarios = await db.listarUsuarios();
    //capturando usuario já cadastrado
    const checkUser = usuarios.some(item => {
        return item.usuario === usuario;
    });

    if(checkUser){
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