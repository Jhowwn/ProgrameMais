import database from "../../Database/connection.js";


async function listarParceiros(){
    const conn = await database.connect();
    const [rows] = await conn.query("SELECT * FROM tbl_parceiros");
    conn.end();

    return rows;
}

export default {listarParceiros};