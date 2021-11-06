import database from "../../Database/connection.js";

async function novidades(){
    const conn = await database.connect();
    const [rows] = await conn.query("select * from vw_news7days");
    conn.end()

    return rows;
}

export default {novidades}