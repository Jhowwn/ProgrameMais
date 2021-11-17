import database from "../../Database/connection.js"

async function getQuestion(lang){
    const conn = await database.connect();
    const sql = "SELECT id_questao, questao FROM tbl_questoes Where linguagem = ?";
    const [rows] = await conn.query(sql, lang);
    

    return rows;
}
async function getAnswer(id_questao, id_questao_2, id_questao_3){
    const conn = await database.connect();
    //console.log(id_questao);
    //const sql = `SELECT resposta_correta FROM tbl_questoes WHERE id_questao = ?
    //UNION SELECT resp_errada FROM tbl_resp_errada WHERE fk_id_questao = ?`;
    const sql = `SELECT id_questao, resposta_correta FROM tbl_questoes 
    WHERE id_questao = ? or id_questao = ? or id_questao = ?
    UNION SELECT fk_id_questao, resp_errada FROM tbl_resp_errada 
    WHERE fk_id_questao = ? or fk_id_questao = ? or fk_id_questao = ?`;
    const sqlData = [parseInt(id_questao), parseInt(id_questao_2), parseInt(id_questao_3),
        parseInt(id_questao), parseInt(id_questao_2), parseInt(id_questao_3)];
    //console.log(sqlData);

    const [rows] = await conn.query(sql, sqlData);

    return rows;
}
async function obterRespostas(id_questao){
    const conn = await database.connect();
    const sql = `SELECT resposta_correta FROM tbl_questoes WHERE id_questao = ?
    UNION SELECT resp_errada FROM tbl_resp_errada WHERE fk_id_questao = ?`;
    const sqlData = [parseInt(id_questao), parseInt(id_questao)];

    const [rows] = await conn.query(sql, sqlData);
    return rows;
}

async function getLastResult(id_user){
    const conn = await database.connect();
    const sql = `SELECT last_tent from usuarios WHERE id_usuario = ?`;
    const sqlData = parseInt(id_user);

    const [rows] = await conn.query(sql, sqlData);
    return rows;
}

export default {getQuestion, getAnswer, obterRespostas, getLastResult}