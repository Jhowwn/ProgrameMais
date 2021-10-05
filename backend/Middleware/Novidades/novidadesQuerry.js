import database from "../../Database/connection.js";

async function novidades(){
    const conn = await database.connect();
    const [rows] = await conn.query("select * from tbl_novidades where data_novidade >= curdate()");
    conn.end()

    return rows;
}

export default {novidades}