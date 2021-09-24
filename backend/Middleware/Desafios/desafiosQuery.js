import database from "../../Database/connection.js"

async function getQuestion(lang){
    const conn = await database.connect();
    const sql = "SELECT id_questao, questao FROM tbl_questoes Where linguagem = ?";
    const [rows] = await conn.query(sql, lang);
    

    return rows;
}
async function getAnswer(id_questao){
    const conn = await database.connect();
    //console.log(id_questao);
    const sql = `SELECT resposta_correta FROM tbl_questoes WHERE id_questao = ?
    UNION SELECT resp_errada FROM tbl_resp_errada WHERE fk_id_questao = ?`;
    const sqlData = [parseInt(id_questao), parseInt(id_questao)];
    //console.log(sqlData);

    const [rows] = await conn.query(sql, sqlData);

    return rows;
}

export default {getQuestion, getAnswer}