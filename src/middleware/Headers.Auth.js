import cors from "cors";

const allowedOrigins = ["https://www.example.com", "http://127.0.0.1:5173", "http://localhost:3000"];
const _MESSAGE_ =
    "A política do CORS para este site não permite o acesso a partir da Origem especificada";

export default cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1)
            return callback(JSON.stringify({ value: false, data: _MESSAGE_ }), false);
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
});
