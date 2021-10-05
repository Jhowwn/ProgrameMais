import database from '../../Database/connection.js';

async function listDicionario(){
    const conn = await database.connect();
    const [rows] = await conn.query("select * from tbl_dicionario");
    conn.end();

    return rows;
}

export default {listDicionario};