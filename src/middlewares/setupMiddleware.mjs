import fs from "fs";
import path from "path";
import database from "../models/connectionDB.mjs";
import User from "../models/User.mjs";

export default async function setupMiddleware(req, res, next) {
	console.log("setupMiddleware acionado!");

	// 1. Verificação do arquivo .env
	const envPath = path.resolve(".env");
	if (!fs.existsSync(envPath)) {
		console.log("Arquivo .env não encontrado!");
		res.cookie("error", "missingEnvFile", {
			maxAge: 900000,
			httpOnly: true,
		});
		return res.redirect("/setup/database");
	}

	try {
		// 2. Tentativa de Conexão com o Banco de Dados
		await database.authenticate();
		console.log("Conexão com o banco de dados estabelecida!");

		// 3. Verificação da Existência da Tabela 'Usuario'
		const queryInterface = database.getQueryInterface();
		const tableExists = await queryInterface.tableExists("Usuario");

		if (!tableExists) {
			console.log(
				"Tabela 'Usuario' NÃO encontrada! Redirecionando para setup."
			);
			return res.redirect("/setup/database");
		}

		// 4. Verificação da Existência de um Usuário Administrador
		const adminExists = await User.findOne({ where: { isAdmin: true } });
		if (!adminExists) {
			console.log(
				"Administrador NÃO encontrado! Redirecionando para setup."
			);
			res.cookie("error", "noAdminUser", {
				maxAge: 900000,
				httpOnly: true,
			});
			return res.redirect("/setup/admin");
		}

		console.log("Administrador encontrado com sucesso!");
		next(); // Continua para as rotas normais
	} catch (error) {
		console.log(
			"Erro ao se conectar ao banco de dados! Redirecionando para setup.",
			error
		);
		res.cookie("error", "errorConnectionDB", {
			maxAge: 900000,
			httpOnly: true,
		});
		return res.redirect("/setup/database");
	}
}
