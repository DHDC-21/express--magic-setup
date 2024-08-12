import app from "./src/app.js";
import ip from "ip";
import "dotenv/config";

import { EventEmitter } from "events";
EventEmitter.defaultMaxListeners = 15;


const server_port = process.env.PORT || 3000;
const server_ip = ip.address();

app.listen(server_port, () => {
	console.log("Servidor iniciado com sucesso!");
	console.log("http://" + server_ip + ":" + server_port);
});
