import { createClient } from "redis";
import Log from "../Log/logs.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = createClient({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    socket: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    },
});

async function startup() {
    await client.connect();
}

startup();

export default async function RateLimit(_page_, req, res, next, secods = 20, time = 7) {
    const IP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const KEY = `rate-limit-${_page_.name}-${IP.split(":").pop()}`;

    const requestCount_ = Number((await client.get(KEY)) || 0) + 1;
    await client.set(KEY, requestCount_, { EX: secods });

    if (requestCount_ >= time) {
        return res.status(200).json({
            value: false,
            data: "RATE LIMIT. Por favor, você está fazendo muitas requisições para nosso serviço. Aguarde alguns instantes",
        });
    }
    Log(`O IP ➜ [ ${IP} ] Entrou no site, Com as informações: [ ${JSON.stringify(req.body)} ]`, "notice");
    _page_.execute({ req, res });
}
