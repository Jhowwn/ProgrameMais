import express from "express";
import cadastrarUserRouter from "./Middleware/Usuario/cadastrarUserRouter.js";
import loginRouter from "./Middleware/Usuario/loginRouter.js";
import parceirosRouter from "./Middleware/Parceiros/parceirosRouter.js";
import desafiosRouter from "./Middleware/Desafios/desafiosRouter.js";


const router = express.Router();

router.use("/cadastrar", cadastrarUserRouter);

router.use("/login", loginRouter);

router.use("/parceiros", parceirosRouter);

router.use("/desafio", desafiosRouter);


export default router;