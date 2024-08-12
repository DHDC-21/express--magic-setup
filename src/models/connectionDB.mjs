
import { Sequelize } from "sequelize";
import 'dotenv/config';

let connection;
try {
	connection = new Sequelize(
	    process.env.DB_NAME,
	    process.env.DB_USER,
	    process.env.DB_PASSWORD,{
	        host: process.env.DB_HOST,
	        dialect: process.env.DB_DIALECT
	});
	await connection.authenticate();
} catch (error) {
	console.log("Erro ao conectar ao banco de dados");
	connection = null;
}

export default connection