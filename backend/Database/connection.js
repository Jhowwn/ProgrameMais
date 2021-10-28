import mysql from "mysql2/promise";

function connect(){
    const connection = mysql.createConnection(
        "mysql://root:@localhost:3306/aprendaProgramar"
    );
    return connection;
}

export default {connect};