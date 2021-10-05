import database from "../../Database/connection.js"

async function listGuia(){
    const conn = await database.connect();
    const [rows] = await conn.query("select * from tbl_guiaEstudos");
    conn.end();

    return rows;
}

export default {listGuia}