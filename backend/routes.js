import express from "express";
import cadastrarUserRouter from "./Middleware/Usuario/cadastrarUserRouter.js";
import loginRouter from "./Middleware/Usuario/loginRouter.js";
import parceirosRouter from "./Middleware/Parceiros/parceirosRouter.js";
import desafiosRouter from "./Middleware/Desafios/desafiosRouter.js";
import dicionarioRouter from "./Middleware/Dicionario/dicionarioRouter.js";
import guiaEstudosRouter from "./Middleware/GuiaEstudos/guiaEstudosRouter.js";
import novidadesRouter from "./Middleware/Novidades/novidadesRouter.js";
import {verifyJWT} from './Middleware/json/jwt.js'

const router = express.Router();

router.use("/cadastrar", cadastrarUserRouter);

router.use("/login", loginRouter);

router.use("/parceiros", parceirosRouter);

router.use("/desafio", desafiosRouter);

router.use("/dicionario", dicionarioRouter);

router.use("/guiaEstudos", guiaEstudosRouter);

router.use("/novidades", novidadesRouter);


export default router;