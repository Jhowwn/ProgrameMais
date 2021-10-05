import express from "express"
import db from "./guiaEstudosQuerry.js"

const router = express.Router();

router.get("/", async(req, res) =>{
    const guiaEstudos = await db.listGuia();
    res.send(guiaEstudos);
});

export default router