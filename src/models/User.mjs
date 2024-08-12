
import { DataTypes } from "sequelize";
import database from "./connectionDB.mjs";

let User;

if (database) {
	try {
		User = database.define(
			"User",
			{
				email: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				username: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				password: {
					type: DataTypes.STRING,
					allowNull: true,
				},
				isAdmin: {
					type: DataTypes.BOOLEAN,
					defaultValue: false,
				},
			},
			{
				tableName: "Usuario",
			}
		);
		console.log("Modelo User carregado com sucesso!");
	} catch (error) {
		console.error("Erro ao carregar o modelo User:", error.message);
		User = null;
	}
} else {
	console.error(
		"Conexão com o banco de dados não foi estabelecida. Modelo User não pode ser carregado."
	);
	User = null;
}

export default User;
