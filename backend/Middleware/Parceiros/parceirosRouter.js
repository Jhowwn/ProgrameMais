import express from "express";
import db from "./parceirosQuery.js";

const router = express.Router();

router.get("/", async (req, res)=>{
    const parceiros = await db.listarParceiros();
    res.send(parceiros);
});

export default router;