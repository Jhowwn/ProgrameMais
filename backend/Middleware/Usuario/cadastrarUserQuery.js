import database from "../../Database/connection.js";

async function cadastrarUsuario(usuario, senha, nome){
    const conn = await database.connect();
    const sql = "INSERT INTO usuarios (usuario, senha, nome) values (?,?,?)";
    const novoUsuario = [usuario, senha, nome];
    await conn.query(sql, novoUsuario);
    conn.end();

}
async function listarUsuarios(){
    const conn = await database.connect();
    const [rows] = await conn.query("SELECT * FROM usuarios");
    conn.end();

    return rows;
}

export default {cadastrarUsuario, listarUsuarios};