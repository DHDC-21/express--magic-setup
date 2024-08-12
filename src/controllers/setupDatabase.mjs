
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = __filename;

export default async function setupDatabase(req, res) {
    const {
        inputPort,
        inputDB_Name,
        inputDB_User,
        inputDB_Password,
        inputDB_Host,
        inputDB_Dialect
    } = req.body;

    const envData = [
        `PORT=${inputPort}`,
        `DB_NAME=${inputDB_Name}`,
        `DB_USER=${inputDB_User}`,
        `DB_PASSWORD=${inputDB_Password}`,
        `DB_HOST=${inputDB_Host}`,
        `DB_DIALECT=${inputDB_Dialect}`,
    ].join("\n");
    // console.log(envData);
    
    const envPath = path.join(__dirname, "..", "..", "..", ".env");

    fs.writeFileSync(envPath, envData);

    console.log('Variaveis de ambiente configuradas com sucesso!!');
    res.redirect("/");
}
