import express from "express";
import db from "./dicionarioQuerry.js";

const router = express.Router();

router.get("/", async(req, res) =>{
    const dicionario  = await db.listDicionario();
    res.send(dicionario);
});

export default router;