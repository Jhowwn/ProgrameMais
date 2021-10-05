import express from "express";
import db from "./novidadesQuerry.js";

const router = express.Router();

router.get("/", async (req, res) =>{
    const novidades = await db.novidades();
    res.send(novidades);
});

export default router;