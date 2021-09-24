import database from "../../Database/connection.js";

async function logar(usuario, senha){
    const conn = await database.connect();
    const sql = "SELECT * FROM usuarios WHERE usuario=? AND senha=?";
    const dtLogin = [usuario, senha];
    const [rows] = await conn.query(sql, dtLogin);
    
    return rows;

}

export default {logar}